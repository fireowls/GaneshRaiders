import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User, Auth, Grade } from '../models/auth.model';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId: Observable<string>;
  user: Observable<User>;

  constructor(private fireauth: AngularFireAuth, private firestore: AngularFirestore, private storage: AngularFireStorage) {
    this.userId = fireauth.authState.pipe(
      map((user: firebase.User ) => user ? user.uid : null)
    );
    this.user = new Observable<User>(subscriber => {
      this.userId.subscribe(id => {
        if (id) {
          this.firestore.collection('users').doc(id).valueChanges().subscribe((user: User) => {
            subscriber.next(user);
          });
        } else {
          subscriber.next(null);
        }
      });
    });
  }

  signup(auth: Auth, email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.fireauth.auth.createUserWithEmailAndPassword(email, password).then((fireUser) => {
        const user: User = {
          id: fireUser.user.uid,
          grade: Grade.NONE,
          ...auth
        };
        this.setUser(user).then(() => resolve(), err => reject(err));
      }, err => reject(err));
    });
  }

  signin(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.fireauth.auth.signInWithEmailAndPassword(email, password).then(() => {
        this.user.pipe(first()).subscribe(user => resolve(user));
      }, err => reject(err));
    });
  }

  logout() {
    this.fireauth.auth.signOut();
  }

  setProfilePicture(file: File): Promise<void> {
    return new Promise((resolve, reject) => {
      this.userId.pipe(first()).subscribe(id => {
        const task = this.storage.ref('users/' + id + '/picture').put(file);
        task.percentageChanges().subscribe((percentage: number) => console.log(percentage));
        task.then(
          (res) => this.user.subscribe(user => {
            res.ref.getDownloadURL().then(url => {
              user.profilePicture = url;
              this.setUser(user).then(() => resolve(), err => reject(err));
            }, err => reject(err));
          }), err => reject(err));
      });
    });
  }

  setUser(user: User): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestore.collection('users').doc(user.id).set(user).then(
        () => resolve(), err => reject(err)
      );
    });
  }

  isAdmin(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.user.pipe(first()).subscribe(user => {
        if (!user) {
          reject('user is not logged...');
        } else {
          resolve(user.grade === Grade.ADMIN);
        }
      });
    });
  }

}

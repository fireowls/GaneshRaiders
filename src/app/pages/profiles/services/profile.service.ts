import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Grade, User } from '../../auth/models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private firestore: AngularFirestore) { }

  getUsersByGrade(grade: Grade): Observable<User[]> {
    return this.firestore.collection('users', ref => ref.where('grade', '==', grade)).valueChanges() as Observable<User[]>;
  }
  get users(): Observable<User[]> {
    return this.firestore.collection('users').valueChanges() as Observable<User[]>;
  }

}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Article } from '../models/article.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles: Observable<Article[]>;

  constructor(private firestore: AngularFirestore) {
    this.articles = firestore.collection('articles', ref => ref.orderBy('date', 'desc'))
      .valueChanges() as Observable<Article[]>;
  }

  getArticle(name: string): Observable<Article> {
    return this.firestore.collection('articles').doc(name).valueChanges() as Observable<Article>;
  }

  setArticle(article: Article): Promise<void> {
    return new Promise((resolve, reject) => {
      this.firestore.collection('articles').doc(article.name).set(article).then(
        () => resolve(), err => reject(err)
      );
    });
  }

}

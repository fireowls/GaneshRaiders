import { Component, OnInit, ViewChild } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.articles.subscribe(articles => this.articles = articles);
  }

  newArticle(value: string) {
    this.articlesService.setArticle({
      name: value,
      date: new Date()
    } as Article).catch(err => console.error(err.message));
  }

}

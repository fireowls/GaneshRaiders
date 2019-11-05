import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticlesService } from '../../services/articles.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  articles: Observable<Article[]>;

  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
    this.articles = this.articleService.articles;
  }

  createArticle(value: string): void {
    this.articleService.setArticle({
      name: value,
      date: new Date()
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Article, Paragraphe } from '../../../models/article.model';

@Component({
  selector: 'app-article-loaded',
  templateUrl: './article-loaded.component.html',
  styleUrls: ['./article-loaded.component.scss']
})
export class ArticleLoadedComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {
  }

  get title(): string {
    return this.article.title;
  }

  get name(): string {
    return this.article.name;
  }

  get description(): string {
    return this.article.description;
  }

  get date(): Date {
    return this.article.date;
  }

  get authors(): string[] {
    return this.article.authors;
  }

  get paragraphes(): Paragraphe[] {
    return this.article.paragraphes;
  }

}

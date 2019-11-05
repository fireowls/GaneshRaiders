import { Component, OnInit, Input } from '@angular/core';
import { Article, Paragraphe } from '../../models/article.model';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  @Input() article: Article;

  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
  }

  save(): void {
    this.articleService.setArticle(this.article);
  }

  get title(): string {
    return this.article.title;
  }

  set title(value: string) {
    this.article.title = value;
  }

  get name(): string {
    return this.article.name;
  }

  set name(value: string) {
    this.article.name = name;
  }

  get description(): string {
    return this.article.description;
  }

  set description(value: string) {
    this.article.description = value;
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../models/article.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  article: Article;
  notFound: boolean;

  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) { }

  ngOnInit() {
    this.notFound = false;
    this.route.params.pipe(map(param => param.id))
      .subscribe(id => this.articlesService.getArticle(id)
        .subscribe(article => {
          this.article = article;
          if (!this.article) {
            this.notFound = true;
          }
        }));
  }

}

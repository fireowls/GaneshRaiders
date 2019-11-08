import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticlesService } from '../../services/articles.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateArticleDialogComponent } from './create-article-dialog/create-article-dialog.component';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  articles: Observable<Article[]>;

  constructor(private articleService: ArticlesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.articles = this.articleService.articles;
  }

  createArticle(value: string): void {
    this.articleService.setArticle({
      name: value,
      date: new Date()
    });
  }

  openDialog(): void {
    const dialog = this.dialog.open(CreateArticleDialogComponent, {
      width: '500px'
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.createArticle(result);
      }
    });
  }

}

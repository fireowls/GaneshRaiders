import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ArticlesService } from '../../../services/articles.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-article-dialog',
  templateUrl: './create-article-dialog.component.html',
  styleUrls: ['./create-article-dialog.component.scss']
})
export class CreateArticleDialogComponent implements OnInit {

  name: string;
  createArticle: boolean;
  edit: boolean;

  constructor(
    public dialogRef: MatDialogRef<CreateArticleDialogComponent>, private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.createArticle = false;
    this.edit = false;
  }

  check() {
    this.edit = true;
    if (this.name !== '') {
      this.articlesService.containArticle(this.name).then(result => this.createArticle = !result);
    } else {
      this.createArticle = false;
    }
  }

  cancel() {
    this.dialogRef.close();
  }

}

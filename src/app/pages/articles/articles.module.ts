import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { FireModule } from 'src/app/fire/fire.module';

import { ArticlesService } from './services/articles.service';

import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { ArticlesListComponent } from './articles-page/articles-list/articles-list.component';
import { ArticleItemComponent } from './articles-page/articles-list/article-item/article-item.component';
import { ArticleEditComponent } from './articles-page/article-edit/article-edit.component';
import { ArticleViewComponent } from './articles-page/article-view/article-view.component';
import { ArticleLoadedComponent } from './articles-page/article-view/article-loaded/article-loaded.component';
import { ArticleNotFoundComponent } from './articles-page/article-view/article-not-found/article-not-found.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { CreateArticleDialogComponent } from './articles-page/articles-list/create-article-dialog/create-article-dialog.component';


@NgModule({
  declarations: [
    ArticlesPageComponent,
    ArticlesListComponent,
    ArticleItemComponent,
    ArticleEditComponent,
    ArticleViewComponent,
    ArticleLoadedComponent,
    ArticleNotFoundComponent,
    CreateArticleDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArticlesRoutingModule,
    MaterialModule,
    FireModule
  ],
  entryComponents: [CreateArticleDialogComponent],
  providers: [ ArticlesService ],
  exports: [ArticlesPageComponent]
})
export class ArticlesModule { }

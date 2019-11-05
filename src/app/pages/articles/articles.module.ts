import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { ArticleComponent } from './articles-page/article/article.component';
import { ArticleEditorComponent } from './articles-page/article-editor/article-editor.component';
import { ArticlesComponent } from './articles-page/articles/articles.component';
import { ArticlesService } from './services/articles.service';
import { ArticlesRoutingModule } from './articles-routing.module';
import { FireModule } from 'src/app/fire/fire.module';
import { ArticleItemComponent } from './articles-page/articles/article-item/article-item.component';


@NgModule({
  declarations: [
    ArticlesPageComponent,
    ArticleComponent,
    ArticleEditorComponent,
    ArticlesComponent,
    ArticleItemComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FireModule
  ],
  providers: [ ArticlesService ],
  exports: [ArticlesPageComponent]
})
export class ArticlesModule { }

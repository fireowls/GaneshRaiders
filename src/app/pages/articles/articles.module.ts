import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { ArticleComponent } from './article/article.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { ArticlesComponent } from './articles-page/articles/articles.component';
import { ArticlesService } from './services/articles.service';
import { ArticlesRoutingModule } from './articles-routing.module';
import { FireModule } from 'src/app/fire/fire.module';


@NgModule({
  declarations: [ArticlesPageComponent, ArticleComponent, ArticleEditorComponent, ArticlesComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FireModule
  ],
  providers: [ ArticlesService ],
  exports: [ArticlesPageComponent]
})
export class ArticlesModule { }

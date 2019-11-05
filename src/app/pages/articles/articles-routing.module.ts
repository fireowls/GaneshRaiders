import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ArticlesComponent } from './articles-page/articles/articles.component';
import { ArticleComponent } from './articles-page/article/article.component';


const routes: Route[] = [
    { path: '', component: ArticlesComponent, pathMatch: 'full' },
    { path: 'read/:id', component: ArticleComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticlesRoutingModule { }

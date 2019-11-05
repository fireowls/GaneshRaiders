import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ArticlesListComponent } from './articles-page/articles-list/articles-list.component';
import { ArticleViewComponent } from './articles-page/article-view/article-view.component';


const routes: Route[] = [
    { path: '', component: ArticlesListComponent, pathMatch: 'full' },
    { path: 'read/:id/:edit', component: ArticleViewComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticlesRoutingModule { }

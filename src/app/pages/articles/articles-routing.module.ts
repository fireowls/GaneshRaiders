import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ArticlesComponent } from './articles-page/articles/articles.component';


const routes: Route[] = [
    { path: '', component: ArticlesComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticlesRoutingModule { }

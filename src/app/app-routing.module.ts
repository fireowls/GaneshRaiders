import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AuthPageComponent } from './pages/auth/auth-page/auth-page.component';
import { ProfilesPageComponent } from './pages/profiles/profiles-page/profiles-page.component';
import { ArticlesPageComponent } from './pages/articles/articles-page/articles-page.component';

const routes: Route[] = [
    { path: 'articles', component: ArticlesPageComponent, loadChildren: './pages/articles/articles.module#ArticlesModule' },
    { path: 'auth', component: AuthPageComponent, loadChildren: './pages/auth/auth.module#AuthModule' },
    { path: 'profiles', component: ProfilesPageComponent, loadChildren: './pages/profiles/profiles.module#ProfilesModule' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

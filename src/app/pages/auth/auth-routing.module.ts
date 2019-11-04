import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SigninComponent } from './auth-page/signin/signin.component';
import { SignupComponent } from './auth-page/signup/signup.component';

const routes: Route[] = [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: 'signin', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})
export class AuthRoutingModule { }

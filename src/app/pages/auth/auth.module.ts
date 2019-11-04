import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './auth-page/signin/signin.component';
import { SignupComponent } from './auth-page/signup/signup.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FireModule } from 'src/app/fire/fire.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [SigninComponent, SignupComponent, AuthPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FireModule,
    ReactiveFormsModule
  ],
  providers: [ AuthService ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { ProfilesModule } from './profiles/profiles.module';
import { ArticlesModule } from './articles/articles.module';

const pages = [
  AuthModule,
  ProfilesModule,
  ArticlesModule
];

@NgModule({
  imports: [ pages ],
  exports: [ pages ]
})
export class PagesModule { }

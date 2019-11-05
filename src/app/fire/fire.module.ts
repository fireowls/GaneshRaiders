import { NgModule } from '@angular/core';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MatInputModule } from '@angular/material/input';

const fires = [
  AngularFireAuthModule,
  AngularFirestoreModule,
  AngularFireStorageModule,
  MatInputModule
];

@NgModule({
  imports: [ fires ],
  exports: [ fires ]
})
export class FireModule { }

import { NgModule } from '@angular/core';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

const fires = [
  AngularFireAuthModule,
  AngularFirestoreModule,
  AngularFireStorageModule
];

@NgModule({
  imports: [ fires ],
  exports: [ fires ]
})
export class FireModule { }

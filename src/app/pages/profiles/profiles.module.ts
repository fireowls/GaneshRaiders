import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesPageComponent } from './profiles-page/profiles-page.component';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesComponent } from './profiles-page/profiles/profiles.component';
import { PermissionsComponent } from './profiles-page/permissions/permissions.component';

import { ProfileService } from './services/profile.service';
import { UserComponent } from './profiles-page/user/user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfilesPageComponent, ProfilesComponent, PermissionsComponent, UserComponent],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    FormsModule
  ],
  providers: [ ProfileService ]
})
export class ProfilesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ProfilesComponent } from './profiles-page/profiles/profiles.component';
import { PermissionsComponent } from './profiles-page/permissions/permissions.component';

const routes: Route[] = [
    { path: '', component: ProfilesComponent, pathMatch: 'full' },
    { path: 'permissions', component: PermissionsComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ProfilesRoutingModule { }

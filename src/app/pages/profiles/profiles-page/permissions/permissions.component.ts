import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { User, Grade } from 'src/app/pages/auth/models/auth.model';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {

  users: User[];

  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.profile.users.subscribe((users: User[]) => {
      this.users = users;
    });
  }

}

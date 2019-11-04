import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/auth/services/auth.service';
import { User } from 'src/app/pages/auth/models/auth.model';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe(user => this.user = user);
  }

  uploadProfilePic(event) {
    this.authService.setProfilePicture(event.target.files[0])
      .catch(err => console.log(err.message));
  }

}

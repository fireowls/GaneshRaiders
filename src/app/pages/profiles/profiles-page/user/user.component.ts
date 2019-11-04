import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/pages/auth/models/auth.model';
import { AuthService } from 'src/app/pages/auth/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  updateUser() {
    this.authService.setUser(this.user).catch(err => console.error(err.message));
  }

}

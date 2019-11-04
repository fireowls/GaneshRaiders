import { Component, OnInit } from '@angular/core';
import { AuthService } from '../pages/auth/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  user: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe(user => this.user = user ? user.name : null);
  }

  logout() {
    this.authService.logout();
  }

}

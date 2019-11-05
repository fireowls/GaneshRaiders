import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signin: FormGroup;
  error: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.signin = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  submit() {
    this.authService.signin(this.email, this.password)
      .then(() => this.route.navigate(['/articles']), err => this.error = err.message);
  }

  get email(): string {
    return this.signin.get('email').value;
  }

  get password(): string {
    return this.signin.get('password').value;
  }

}

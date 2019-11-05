import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup: FormGroup;
  error: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.signup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      comfirmPassword: ['', Validators.required]
    });
  }

  submit() {
    this.authService.signup({ name: this.name }, this.email, this.password)
      .then(() => this.route.navigate(['/articles']), err => this.error = err.message);
  }

  get name(): string {
    return this.signup.get('name').value;
  }

  get email(): string {
    return this.signup.get('email').value;
  }

  get password(): string {
    return this.signup.get('password').value;
  }

  get comfirmPassword(): string {
    return this.signup.get('comfirmPassword').value;
  }

}

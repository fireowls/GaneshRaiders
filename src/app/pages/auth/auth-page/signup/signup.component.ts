import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../models/auth.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.signup = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      comfirmPassword: ['']
    });
  }

  submit() {
    this.authService.signup({ name: this.name }, this.email, this.password)
      .catch(err => console.log(err.message));
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

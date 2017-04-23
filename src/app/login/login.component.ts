import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/TSData/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginToggled = true;

  public user = {
    username: '',
    password: '',
  };

  public signUpUser = {
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
    first_name: '',
    last_name: ''
  };



  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate([''])
    }
  }


  toggleLogin() {
    this.loginToggled = !this.loginToggled;
  }

  login() {
    this.auth.login(this.user.username, this.user.password).subscribe(user => {
      this.router.navigate(['']);
    });
  }

  loginValid() {
    return this.user.username !== '' && this.user.password !== '';
  }

  signUpValid() {
    return this.signUpUser.username !== '' &&
      this.signUpUser.password !== '' &&
      this.signUpUser.passwordConfirm !== '' &&
      this.signUpUser.email !== '' &&
      this.signUpUser.password === this.signUpUser.passwordConfirm &&
      this.signUpUser.first_name !== '' &&
      this.signUpUser.last_name !== '';
  }

}

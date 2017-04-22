import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService} from '../shared/services/auth/auth.service';

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
    code: '',
  };



  constructor(private router: Router) { }

  ngOnInit() {
  }


  toggleLogin() {
    this.loginToggled = !this.loginToggled;
  }

  login() {
    // if (this.user.username === '') {
    //   this.auth.login(this.signUpUser.username);
    // } else {
    //   this.auth.login(this.user.username);
    // }
    this.router.navigate(['']);
  }

  loginValid() {
    return this.user.username !== '' && this.user.password !== '';
  }

  signUpValid() {
    return this.signUpUser.username !== '' &&
      this.signUpUser.password !== '' &&
      this.signUpUser.passwordConfirm !== '' &&
      this.signUpUser.code !== '' &&
      this.signUpUser.password === this.signUpUser.passwordConfirm;
  }

}

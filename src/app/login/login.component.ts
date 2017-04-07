import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Slide } from '../animations/slide';
import { State } from '../animations/state';
import { AuthService} from '../shared/services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  private loginToggled: boolean = true;

  private user = {
    username: '',
    password: '',
  };

  private signUpUser = {
    username: '',
    password: '',
    passwordConfirm: '',
    code: '',
  };



  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }


  toggleLogin() {
    this.loginToggled = !this.loginToggled
  }

  login() {
    // 1 == "1" true
    // 1 === "1" false
    // 1 === 1 true
    if (this.user.username === ''){
      this.auth.login(this.signUpUser.username);
    }
    else{
      this.auth.login(this.user.username);
    }
    this.router.navigate([''])
  }

  loginValid() {
    return this.user.username !== "" && this.user.password !== "";
  }

  signUpValid() {
    return this.signUpUser.username !== "" &&
      this.signUpUser.password !== "" &&
      this.signUpUser.passwordConfirm !== "" &&
      this.signUpUser.code !== "" &&
      this.signUpUser.password === this.signUpUser.passwordConfirm;
  }

}

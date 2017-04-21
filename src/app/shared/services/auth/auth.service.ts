import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class AuthService {
  private user = {
    name: '',
  };
  constructor(private cookie: CookieService) {
    const username = this.cookie.get('username')
    if (username !== '') {
      this.user.name = username;
    }
  }
  public login(username: string) {
    this.user.name = username;
    this.cookie.put('username', username);
  }

  public logout() {
    this.user.name = '';
    this.cookie.put('username', undefined);
  }

  public getUsername(): string {
    return this.user.name;
  }

}

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
  constructor(private cookie: CookieService, private router: Router) {}
  public canActivate() {
    const worthy = this.cookie.get('username') !== undefined;
    if (!worthy) {
      this.router.navigate(['/login']);
    }
    return worthy;
  }
}

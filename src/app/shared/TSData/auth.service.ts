import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs/Rx';
import { HttpService } from './http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ProjectApiConfig } from './project-api-config';
import { UserService } from './user/user.service';

const AUTH_TOKEN_HEADER: string = 'Authorization'

@Injectable()
export class AuthService {
  private user: any = {};
  private userSubject$ = new ReplaySubject();
  private apiConfig = new ProjectApiConfig();
  public user$ = this.userSubject$.asObservable();
  constructor(
    private http: HttpService,
    private cookieService: CookieService,
    private userService: UserService ) {
      let token = this.cookieService.get('token')
      console.log(token);
      if(token != undefined) {
        this.setAuthToken(token);
      }
    }

  public login(username: string, password: string): Observable<any> {
    this.http.resetHeaders();
    const request = this.http.post(this.apiConfig.authUrl, {
      username: username,
      password: password
    });
    return request.do((response: any) => {
      this.cookieService.put('token', response.token);
      this.setAuthToken(response.token);
    });
  }

  public isLoggedIn(): boolean {
    const lUser = this.cookieService.get('token');
    return !!(this.user.id || lUser);
  }

  public logout(): void {
    this.http.removeHeader(AUTH_TOKEN_HEADER);
    this.user = {};
    this.cookieService.remove('token');
    this.userSubject$.next(this.user);
  }

  public signUp(user: any): Observable<any> {
    return this.http.post(`${this.apiConfig.baseUrl}/contributors`, user).flatMap(user => {
      return this.login(user.username, user.password);
    });
  }

  public getUser(): Observable<Object> {
    return this.http.get('http://160.7.242.7:8000/api/users/me/').do((user: any) => {
      this.user = user;
      this.userSubject$.next(this.user);
    });
  }

  private setAuthToken(token: string): void {
    this.http.updateHeader(AUTH_TOKEN_HEADER, 'Token ' + token);
  }

}

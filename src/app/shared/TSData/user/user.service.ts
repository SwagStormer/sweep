import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class UserService {
  constructor(private http: Http){}
  read(id: string | number) {
    return this.http.get('https://160.7.242.7:8080/api/contributors/' + `${id}`);
  }

  create(username: string, password: string) {
    return this.http.post('https://160.7.242.7:8080/api/contributors/',
      {username: username, password: password}).map(result => result.json());
  }

}

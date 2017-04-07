import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private user = {
    name: '',

  }
  constructor() { }
  public login(username: string){
    this.user.name = username;
  }

}

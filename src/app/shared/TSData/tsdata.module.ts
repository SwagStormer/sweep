import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';
import { UserService } from './user/user.service';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [

  ],
  providers: [
    UserService,
    CookieService,
    HttpService,
    AuthService,
  ],
})
export class TSDataModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './home/routes/dashboard/dashboard.component';
import { CourseComponent } from './home/routes/course/course.component';
import { CookieService } from 'angular2-cookie/core';
import {CanActivateViaAuthGuard} from './shared/services/auth/auth.service';
import { AssignmentsComponent } from './home/routes/assignments/assignments.component';
import { GradeComponent } from './home/routes/grade/grade.component';
import { AssignmentComponent } from './home/routes/assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    CourseComponent,
    AssignmentsComponent,
    GradeComponent,
    AssignmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    SharedModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
    CanActivateViaAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

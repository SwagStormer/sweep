import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './home/routes/courses/courses.component';
import { CourseComponent } from './home/routes/course/course.component';
import { AssignmentComponent } from './home/routes/assignment/assignment.component';
import { GradeComponent } from './home/routes/grade/grade.component';
import { AssignmentsComponent } from './home/routes/assignments/assignments.component';
import { DashboardComponent } from './home/routes/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    CoursesComponent,
    CourseComponent,
    AssignmentComponent,
    GradeComponent,
    AssignmentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

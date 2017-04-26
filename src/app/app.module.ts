import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import {
  MaterialModule, MdButtonModule, MdCardModule, MdToolbarModule, MdInputModule,
  MdProgressBarModule, MdSelectModule
} from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './home/routes/course/course.component';
import { AssignmentComponent } from './home/routes/assignment/assignment.component';
import { GradeComponent } from './home/routes/grade/grade.component';
import { AssignmentsComponent } from './home/routes/assignments/assignments.component';
import { DashboardComponent } from './home/routes/dashboard/dashboard.component';
import { AssignmentSubmissionsComponent } from './shared/components/assignment-submissions/assignment-submissions.component';
import { PeriodsComponent } from './shared/components/periods/periods.component';
import { CoursesTableComponent } from './shared/components/courses-table/courses-table.component';
import { StudentsTableComponent } from './shared/components/students-table/students-table.component';
import {StudentsComponent} from './home/routes/students/students.component';
import { AssignmentsTableComponent } from './shared/components/assignments-table/assignments-table.component';
import { AssignmentCreateComponent } from './shared/components/assignment-create/assignment-create.component';
import { AuthService, CanActivateViaAuthGuard } from './shared/TSData/auth.service';
import { TSDataModule } from './shared/TSData/tsdata.module';
import { CourseService } from './shared/models/course-service';
import { AssignmentService } from './shared/models/assignment-service';
import { AssignmentSubmisionService } from './shared/models/assignment-submission-service';
import { PeriodService } from './shared/models/period-service';
import { StudentService } from './shared/models/student-service';
import { TeacherService } from './shared/models/teacher-service';
import { StudentComponent } from './home/routes/student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    CourseComponent,
    AssignmentComponent,
    GradeComponent,
    AssignmentsComponent,
    AssignmentSubmissionsComponent,
    PeriodsComponent,
    CoursesTableComponent,
    StudentsTableComponent,
    StudentsComponent,
    AssignmentsTableComponent,
    AssignmentCreateComponent,
    StudentComponent,
  ],
  entryComponents: [
    AssignmentCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    TSDataModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [
    CourseService,
    AssignmentService,
    AssignmentSubmisionService,
    PeriodService,
    StudentService,
    TeacherService,
    CanActivateViaAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

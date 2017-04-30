import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import {
  MaterialModule, MdButtonModule, MdCardModule, MdToolbarModule, MdInputModule,
  MdProgressBarModule, MdSelectModule, MdIconModule, MdSidenavModule, MdOptionModule
} from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './teacher/routes/course/course.component';
import { AssignmentComponent } from './teacher/routes/assignment/assignment.component';
import { GradeComponent } from './teacher/routes/grade/grade.component';
import { AssignmentsComponent } from './teacher/routes/assignments/assignments.component';
import { DashboardComponent } from './teacher/routes/dashboard/dashboard.component';
import { AssignmentSubmissionsComponent } from './teacher/components/assignment-submissions/assignment-submissions.component';
import { PeriodsComponent } from './teacher/components/periods/periods.component';
import { CoursesTableComponent } from './teacher/components/courses-table/courses-table.component';
import { StudentsTableComponent } from './teacher/components/students-table/students-table.component';
import {StudentsComponent} from './teacher/routes/students/students.component';
import { AssignmentsTableComponent } from './teacher/components/assignments-table/assignments-table.component';
import { AssignmentCreateComponent } from './teacher/components/assignment-create/assignment-create.component';
import { AuthService, CanActivateViaAuthGuard, IsTeacher } from './shared/TSData/auth.service';
import { TSDataModule } from './shared/TSData/tsdata.module';
import { CourseService } from './shared/models/course-service';
import { AssignmentService } from './shared/models/assignment-service';
import { AssignmentSubmisionService } from './shared/models/assignment-submission-service';
import { PeriodService } from './shared/models/period-service';
import { StudentService } from './shared/models/student-service';
import { TeacherService } from './shared/models/teacher-service';
import { StudentComponent } from './teacher/routes/student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceModule } from './shared/models/service.module';
import { TeacherModule } from './teacher/teacher.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
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
    ServiceModule,
    CanActivateViaAuthGuard,
    IsTeacher
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

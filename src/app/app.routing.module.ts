
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './teacher/routes/dashboard/dashboard.component';
import { CourseComponent } from './teacher/routes/course/course.component';
import { GradeComponent } from './teacher/routes/grade/grade.component';
import { AssignmentsComponent } from './teacher/routes/assignments/assignments.component';
import { AssignmentComponent } from './teacher/routes/assignment/assignment.component';
import {StudentsComponent} from "./teacher/routes/students/students.component";
import {LoginComponent} from "./login/login.component";
import { StudentComponent } from './teacher/routes/student/student.component';
import { CanActivateViaAuthGuard, IsStudent, IsTeacher } from './shared/TSData/auth.service';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [CanActivateViaAuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'teachers',
    loadChildren: 'app/teacher/teacher.module#TeacherModule',
    canActivate: [IsTeacher]
  },
  {
    path: 'students',
    loadChildren: 'app/student/student.module#StudentModule',
    canActivate: [IsStudent]
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './home/routes/dashboard/dashboard.component';
import {CanActivateViaAuthGuard} from './shared/services/auth/auth.service';
import {StudentsComponent} from './shared/components/students/students.component';
import {AssignmentComponent} from './home/routes/assignment/assignment.component';
import {CourseComponent} from './home/routes/course/course.component';
import {GradeComponent} from "./home/routes/grade/grade.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [ CanActivateViaAuthGuard ],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'assignments',
        component: AssignmentComponent
      },
      {
        path: 'course/:id',
        component: CourseComponent
      },
      {
        path: 'my-students',
        component: StudentsComponent
      },
      {
        path: 'grade/:id',
        component: GradeComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

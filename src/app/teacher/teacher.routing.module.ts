
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { AssignmentsComponent } from './routes/assignments/assignments.component';
import { AssignmentComponent } from './routes/assignment/assignment.component';
import { CourseComponent } from './routes/course/course.component';
import { StudentsComponent } from './routes/students/students.component';
import { StudentComponent } from './routes/student/student.component';
import { GradeComponent } from './routes/grade/grade.component';
import { TeacherComponent } from 'app/teacher/routes/teacher/teacher.component';
import { CourseSettingsComponent } from './routes/course-settings/course-settings.component';
import { CanActivateViaAuthGuard } from '../shared/TSData/auth.service';

const routes: Routes = [{
  path: '',
  component: TeacherComponent,
  canActivate: [CanActivateViaAuthGuard],
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
        component: AssignmentsComponent
      },
      {
        path: 'assignment/:id',
        component: AssignmentComponent
      },
      {
        path: 'course/:id',
        component: CourseComponent
      },
      {
        path: 'course/:id/settings',
        component: CourseSettingsComponent
      },
      {
        path: 'my-students',
        component: StudentsComponent
      },
      {
        path: 'student/:id',
        component: StudentComponent
      },
      {
        path: 'grade',
        component: GradeComponent
      }
    ]
  }
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TeacherRoutingModule {}

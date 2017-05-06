
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from '../shared/TSData/auth.service';
import { StudentComponent } from './routes/student/student.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { CourseComponent } from './routes/course/course.component';


const routes: Routes = [{
  path: '',
  component: StudentComponent,
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
      path: 'course/:id',
      component: CourseComponent
    }
  ]
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class StudentRoutingModule {}

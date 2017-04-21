
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/routes/dashboard/dashboard.component';
import { CourseComponent } from './home/routes/course/course.component';
import { GradeComponent } from './home/routes/grade/grade.component';
import { AssignmentsComponent } from './home/routes/assignments/assignments.component';
import { AssignmentComponent } from './home/routes/assignment/assignment.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'course', component: CourseComponent },
      { path: 'grade', component: GradeComponent },
      { path: 'assignments', component: AssignmentsComponent },
      { path: 'assignment', component: AssignmentComponent }
    ]
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

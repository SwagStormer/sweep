import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AuthService } from './services/auth/auth.service'
import { CourseService } from './services/course/course.service';
import { AssignmentService } from './services/assignment/assignment.service';
import { StudentService } from './services/student/student.service';



import { CoursesComponent } from './components/courses/courses.component';
import { AssignmentsComponent } from './components/assignments/assignments.component'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [CoursesComponent, AssignmentsComponent],
  exports: [
    CoursesComponent,
    AssignmentsComponent
  ],
  providers: [
    AuthService,
    CourseService,
    AssignmentService,
    StudentService,
  ]
})
export class SharedModule { }

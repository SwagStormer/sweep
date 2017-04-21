import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AuthService } from './services/auth/auth.service';
import { CourseService } from './services/course/course.service';
import { AssignmentSubmissionService } from './services/assignment/assignment-submission.service';
import { StudentService } from './services/student/student.service';



import { CoursesComponent } from './components/courses/courses.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { StudentsComponent } from './components/students/students.component';
import { AssignmentSubmissionsComponent } from './components/assignment-submissions/assignment-submissions.component';
import {FormsModule} from '@angular/forms';
import {AssignmentService} from './services/assignment/assignment.service';
import { StudentsCourseComponent } from './components/students-course/students-course.component';
import { AssignmentCourseComponent } from './components/assignment-course/assignment-course.component';
import { AssignmentSubmissionsCourseComponent } from './components/assignment-submissions-course/assignment-submissions-course.component';
import { CoursesStudentComponent } from './components/courses-student/courses-student.component';
import { AssignmentCreateComponent } from './components/assignment-create/assignment-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    CoursesComponent,
    AssignmentsComponent,
    StudentsComponent,
    AssignmentSubmissionsComponent,
    StudentsCourseComponent,
    AssignmentCourseComponent,
    AssignmentSubmissionsCourseComponent,
    CoursesStudentComponent,
    AssignmentCreateComponent],
  exports: [
    CoursesComponent,
    AssignmentsComponent,
    AssignmentSubmissionsComponent,
    StudentsComponent,
    StudentsCourseComponent,
    AssignmentCourseComponent,
    AssignmentSubmissionsCourseComponent

  ],
  entryComponents: [
    AssignmentCreateComponent
  ],
  providers: [
    AuthService,
    CourseService,
    AssignmentService,
    AssignmentSubmissionService,
    StudentService,
  ]
})
export class SharedModule { }

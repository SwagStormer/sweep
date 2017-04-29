import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentService } from './assignment-service';
import { AssignmentSubmisionService } from './assignment-submission-service';
import { CourseService } from './course-service';
import { HourService } from './hour-service';
import { PeriodService } from './period-service';
import { StudentService } from './student-service';
import { TeacherService } from './teacher-service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AssignmentService,
    AssignmentSubmisionService,
    CourseService,
    HourService,
    PeriodService,
    StudentService,
    TeacherService
  ]
})
export class ServiceModule { }

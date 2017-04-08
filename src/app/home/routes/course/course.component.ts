import { Component, OnInit } from '@angular/core';
import {Course, CourseService} from '../../../shared/services/course/course.service';
import {StudentService} from '../../../shared/services/student/student.service';
import {AssignmentService} from '../../../shared/services/assignment/assignment.service';
import {AssignmentSubmissionService} from '../../../shared/services/assignment/assignment-submission.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public course: Course;

  constructor(
    public courseService: CourseService,
    public studentService: StudentService,
    public assignmentService: AssignmentService,
    public assignmentSubmissionService: AssignmentSubmissionService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const param = parseInt(params['id'], 10)
      this.courseService.getCourse(param).subscribe(course => {
        this.course = course;
      });
    });
  }


}

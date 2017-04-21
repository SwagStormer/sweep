import { Component, OnInit } from '@angular/core';
import {Course, CourseService} from "../../services/course/course.service";
import {AssignmentSubmissionService} from "../../services/assignment/assignment-submission.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-courses-student',
  templateUrl: './courses-student.component.html',
  styleUrls: ['./courses-student.component.scss']
})
export class CoursesStudentComponent implements OnInit {

  private courses: Course[] = [];


  constructor(private courseService: CourseService,
              public assignmentSubmissionService: AssignmentSubmissionService,
              private router: Router) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  navigate(id: number) {
    this.router.navigate(['course', id]);
  }

}

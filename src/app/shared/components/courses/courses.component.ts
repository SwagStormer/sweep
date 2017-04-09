import { Component, OnInit } from '@angular/core';
import { CourseService, Course } from '../../services/course/course.service';
import {AssignmentSubmissionService} from '../../services/assignment/assignment-submission.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

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

  speedGrade(id: number, event) {
    event.stopPropagation();
    this.router.navigate(['grade'], { queryParams: {course: id}});
  }

}

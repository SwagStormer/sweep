import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CourseService, ICourse } from '../../../shared/models/course-service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public course: ICourse;

  constructor(public route: ActivatedRoute, private courseService: CourseService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const param = +params['id'];
      this.courseService.read(param).subscribe(course => {
        this.course = course;
      });
    });


  }
}

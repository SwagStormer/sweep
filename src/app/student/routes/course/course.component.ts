import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService, ICourse } from '../../../shared/models/course-service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public course: ICourse;

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseService.read(+params['id']).subscribe(course => {
        this.course = course;
      });
    });
  }

}

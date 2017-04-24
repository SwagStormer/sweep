import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CourseService } from '../../models/course-service';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent implements OnInit {
  private _filters: any;
  @Input() cached = true;
  @Input() set filters(value: any) {
    this._filters = value;
    this.getCourses();
  };


  courses = [];
  constructor(private router: Router, private courseService: CourseService) {
  }

  ngOnInit() {
  }
  getCourses() {
    this.courseService.readList(this._filters, !this.cached).subscribe(courses => {
      this.courses = courses;
    });
  }
  navigateToDetail(id: number) {
    this.router.navigate(['course', id]);
  }
  speedGrade(id: number, event: any) {
    event.stopPropagation();
    this.router.navigate(['grade'], {queryParams: {course: id}});

  }
}

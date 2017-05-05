import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CourseService, ICourse } from '../../../shared/models/course-service';
import { Store } from '@ngrx/store';
import { ModelState } from '../../../shared/TSData/interfaces';
import { readListAction, ReadListAction } from '../../../shared/TSData/actions';
import { Observable } from 'rxjs/Observable';

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
    this.courseService.readList(this._filters).subscribe(courses => {
      this.courses = courses;
    });
  }
  navigateToDetail(id: number) {
    this.router.navigate(['teachers/course', id]);
  }
  speedGrade(id: number, event: any) {
    event.stopPropagation();
    this.router.navigate(['teachers/grade'], {queryParams: {course: id}});

  }
}

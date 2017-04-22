import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent implements OnInit {
  private _filters: any;
  @Input() set filters(value: any) {
    this._filters = value;
    this.getCourses();
  };
  courses = [];
  constructor(private router: Router) {

  }

  ngOnInit() {
  }
  getCourses() {
    this.courses = Array(10);
  }
  navigateToDetail(id: number) {
    this.router.navigate(['course', id]);
  }
  speedGrade(id: number, event: any) {
    event.stopPropagation();
    this.router.navigate(['grade'], {queryParams: {course: id}});

  }
}

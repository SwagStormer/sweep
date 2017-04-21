import { Component, Input, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  getCourses() {
    this.courses = Array(10);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {

  private _filters: any;
  @Input() set filters(value: any) {
    this._filters = value;
    this.getStudents();
  };
  students = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  getStudents() {
    this.students = Array(10);
  }
  navigateToSubmission(id: number, event: any) {
    event.stopPropagation();
    this.router.navigate(['grade'], {queryParams: {course: id}});

  }
}

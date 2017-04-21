import { Component, Input, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  getStudents() {
    this.students = Array(10);
  }
}

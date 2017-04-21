import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments-table',
  templateUrl: './assignments-table.component.html',
  styleUrls: ['./assignments-table.component.scss']
})
export class AssignmentsTableComponent implements OnInit {
  private _filters: any;
  @Input() set filters(value: any) {
    this._filters = value;
    this.getAssignments();
  };
  @Input() inDetail: boolean = false;
  assignments = [];
  constructor() { }

  ngOnInit() {
  }
  getAssignments() {
    this.assignments = Array(10);
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-submissions',
  templateUrl: './assignment-submissions.component.html',
  styleUrls: ['./assignment-submissions.component.scss']
})
export class AssignmentSubmissionsComponent implements OnInit {
  private _filters: any;
  @Input() set filters(value: any) {
    this._filters = value;
    this.getAssignmentSubmissions();
  };
  assignmentSubmissions = [];
  constructor() { }

  ngOnInit() {
  }
  getAssignmentSubmissions() {
    this.assignmentSubmissions = Array(10);
  }
}

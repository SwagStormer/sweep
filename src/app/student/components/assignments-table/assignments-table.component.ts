import { Component, Input, OnInit } from '@angular/core';
import { AssignmentService, IAssignment } from '../../../shared/models/assignment-service';

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
  }

  public assignments: IAssignment[] = [];

  constructor(private assignmentService: AssignmentService) { }

  getAssignments() {
    this.assignmentService.readList(this._filters).subscribe(assignments => {
      this.assignments = assignments;
    });
  }

  ngOnInit() {
  }

}

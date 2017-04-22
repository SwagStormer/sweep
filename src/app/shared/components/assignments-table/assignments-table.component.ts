import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AssignmentService } from '../../models/assignment-service';
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
  constructor(private router: Router, private assignmentService: AssignmentService) { }

  ngOnInit() {
  }
  navigateToGrades(id: number) {
    this.router.navigate(['assignment', id]);

  }
  getAssignments() {
    this.assignmentService.readList(this._filters).subscribe(assignments => {
      this.assignments = assignments;
    });
  }
}

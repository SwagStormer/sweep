import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AssignmentService } from '../../models/assignment-service';
import { MdDialog } from '@angular/material';
import { AssignmentCreateComponent } from '../assignment-create/assignment-create.component';
@Component({
  selector: 'app-assignments-table',
  templateUrl: './assignments-table.component.html',
  styleUrls: ['./assignments-table.component.scss']
})
export class AssignmentsTableComponent implements OnInit {

  private lastSearched: number;
  public searchText = '';

  private _filters: any;
  @Input() set filters(value: any) {
    this._filters = value;
    this.getAssignments();
  };
  @Input() inDetail: boolean = false;
  assignments = [];
  constructor(private router: Router, private assignmentService: AssignmentService, private dialog: MdDialog) { }

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

  public search(event) {
    const d = new Date();
    this.lastSearched = d.getMilliseconds();
    this.checkDebounce(this.lastSearched, event);
  }

  private checkDebounce(time: any, event) {
    setTimeout(() => {
      if (time === this.lastSearched) {
        this.filters = Object.assign(this._filters, {'search': event});
      }
    }, 350);
  }

  openDialog() {
    const dialog = this.dialog.open(AssignmentCreateComponent);
    dialog.componentInstance.selectCourse(this._filters['course']);
  }

}

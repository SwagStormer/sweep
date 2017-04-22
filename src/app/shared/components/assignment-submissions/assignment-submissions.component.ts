import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-assignment-submissions',
  templateUrl: './assignment-submissions.component.html',
  styleUrls: ['./assignment-submissions.component.scss']
})
export class AssignmentSubmissionsComponent implements OnInit {
  private _filters: any;
  private _synopsis = false;
  @Input() set synopsis(value: boolean) {
    this._synopsis = value;
    this.filterSubmissions();
  }
  @Input() set filters(value: any) {
    this._filters = value;
    this.getAssignmentSubmissions();
  };

  assignmentSubmissions = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  getAssignmentSubmissions() {
    this.assignmentSubmissions = Array(10);
  }
  navigateToAssignment(id: number) {
    this.router.navigate(['assignment', id]);

  }

  navigate() {
    this.router.navigate(['assignments']);
  }


  filterSubmissions() {
    this.assignmentSubmissions = [this.assignmentSubmissions[0], this.assignmentSubmissions[1], this.assignmentSubmissions[2]];
  }
}


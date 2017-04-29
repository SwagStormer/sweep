import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AssignmentService, IAssignment } from '../../../shared/models/assignment-service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

  public assignment: IAssignment;

  constructor(private route: ActivatedRoute, private assignmentService: AssignmentService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.assignmentService.read(+params['id']).subscribe(assignment => {
        this.assignment = assignment;
      });
    });
  }

  public gradeSubmissions() {
    this.router.navigate(['grade'], {queryParams: {assignment: this.assignment.id}});
  }
}

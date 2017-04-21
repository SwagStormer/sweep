import { Component, OnInit } from '@angular/core';
import { Assignment, AssignmentService } from '../../../shared/services/assignment/assignment.service';
import { ActivatedRoute } from '@angular/router';
import {
  AssignmentSubmission, AssignmentSubmissionService,
} from '../../../shared/services/assignment/assignment-submission.service';
import { StudentService } from '../../../shared/services/student/student.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

  public assignment: Assignment;
  public assignments: AssignmentSubmission[] = [];

  constructor(
    private route: ActivatedRoute,
    public assignmentService: AssignmentService,
    public assignmentSubmissionService: AssignmentSubmissionService,
    public studentService: StudentService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.assignmentService.getAssignment(+params['id']).subscribe(assignment => {
        this.assignment = assignment;
      });
      this.assignmentSubmissionService.getSubmissionsForAssignment(+params['id']).subscribe(assignments => {
        this.assignments = assignments;
      });
    });
  }

  public navigateToDetail() {}

  public searchGraded() {}

  public searchUngraded() {}

}

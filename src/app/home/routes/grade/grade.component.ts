import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  AssignmentSubmisionService,
  IAssignmentSubmission
} from '../../../shared/models/assignment-submission-service';
import { ActivatedRoute, Router } from '@angular/router';
import { IAssignment } from '../../../shared/models/assignment-service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {

  private currentAssignment: IAssignmentSubmission;
  private submissions: IAssignmentSubmission[];

  private initialLength: number;

  constructor(private location: Location,
              private assignmentSubmissionService: AssignmentSubmisionService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['assignment_submission']) {
        this.assignmentSubmissionService.read(+params['assignment_submission']).subscribe(submission => {
          if (!submission) {
            this.navigateBack();
          }
          this.currentAssignment = submission;
        });
      } else if (params['course']) {
        this.assignmentSubmissionService.readList({course: +params['course']}).subscribe(submissions => {
          if (submissions.length === 0) {
            this.navigateBack();
          }
          this.initialLength = submissions.length;
          this.currentAssignment = submissions[this.initialLength - 1];
          submissions.pop();
          this.submissions = submissions;
        });
      } else if (params['student']) {
        this.assignmentSubmissionService.readList({student: +params['student']}).subscribe(submissions => {
          if (submissions.length === 0) {
            this.navigateBack();
          }
          this.initialLength = submissions.length;
          this.currentAssignment = submissions[this.initialLength - 1];
          submissions.pop();
          this.submissions = submissions;
        });
      } else if (params['assignment']) {
        this.assignmentSubmissionService.readList({assignment: +params['assignment']}).subscribe(submissions => {
          if (submissions.length === 0) {
            this.navigateBack();
          }
          this.initialLength = submissions.length;
          this.currentAssignment = submissions[this.initialLength - 1];
          submissions.pop();
          this.submissions = submissions;
        });
      }
    });
  }

  hasNext(): boolean {
    return this.submissions && this.submissions.length > 0;
  }

  navigateBack() {
    this.location.back();
  }

  submit() {
    this.currentAssignment.graded = true;
    this.assignmentSubmissionService.update(this.currentAssignment.id, this.currentAssignment, false).subscribe(x => {
    });
    console.log(this.hasNext());
    if (this.hasNext()) {
      this.currentAssignment = this.submissions[this.submissions.length - 1];
      this.submissions.pop()
    } else {
      this.navigateBack();
    }
  }

  getValue() {
    return (this.initialLength - this.submissions.length) / this.initialLength * 100;
  }
}

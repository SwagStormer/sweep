import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
  AssignmentSubmission,
  AssignmentSubmissionService
} from '../../../shared/services/assignment/assignment-submission.service';
import {AssignmentService} from '../../../shared/services/assignment/assignment.service';
import {StudentService} from '../../../shared/services/student/student.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {

  public submission: AssignmentSubmission;
  public submissions: AssignmentSubmission[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private assignmentSubmissionService: AssignmentSubmissionService,
    public assignmentService: AssignmentService,
    public studentService: StudentService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['submission']) {
        this.assignmentSubmissionService.getAssignment(+params['submission']).subscribe(submission => {
          this.submission = submission;
        });
      } else if (params['student']) {
        this.assignmentSubmissionService.getUngradedStudentAssignments(+params['student']).subscribe(submissions => {
          if (submissions.length > 0) {
            this.submissions = submissions;
            this.submission = this.submissions[this.submissions.length - 1];
          } else {
            this.location.back();
          }
        });
      } else if (params['course']) {
        this.assignmentSubmissionService.getCourseAssignments(+params['course'], false).subscribe(submissions => {
          if (submissions.length > 0) {
            this.submissions = submissions;
            this.submission = this.submissions[this.submissions.length - 1];
          } else {
            this.location.back();
          }
        });
      }
    });
  }

  public submit() {
    this.assignmentSubmissionService.gradeAssignment(this.submission);
    if (this.submissions) {
      this.submissions.pop();
      if (this.submissions.length > 0) {
        this.submission = this.submissions[this.submissions.length - 1];
      } else {
        this.location.back();
      }
    } else {
      this.location.back();
    }
  }

}

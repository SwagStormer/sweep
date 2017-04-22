import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AssignmentSubmisionService } from '../../models/assignment-submission-service';
import { AssignmentService } from '../../models/assignment-service';
import { StudentService } from '../../models/student-service';
import { CourseService } from '../../models/course-service';
@Component({
  selector: 'app-assignment-submissions',
  templateUrl: './assignment-submissions.component.html',
  styleUrls: ['./assignment-submissions.component.scss'],
})
export class AssignmentSubmissionsComponent implements OnInit {
  private _filters: any;
  private _synopsis = false;
  @Input() set synopsis(value: boolean) {
    this._synopsis = value;
  }
  @Input() set filters(value: any) {
    this._filters = value;
    this.getAssignmentSubmissions();
  };

  assignmentSubmissions = [];
  constructor(
    private router: Router,
    private assignmentSubmissionService: AssignmentSubmisionService,
    public assignmentService: AssignmentService,
    public studentService: StudentService) { }

  ngOnInit() {
  }
  getAssignmentSubmissions() {
    this.assignmentSubmissionService.readList(this._filters).subscribe(assignments => {
      this.assignmentSubmissions = assignments;
      if (this._synopsis) {
        this.filterSubmissions();
      }
    });
  }
  navigateToAssignment(id: number) {
    this.router.navigate(['grade'], {queryParams: {assignment: id}});

  }

  navigate() {
    this.router.navigate(['assignments']);
  }


  filterSubmissions() {
    this.assignmentSubmissions = this.assignmentSubmissions.slice(0, 3);
  }
}


import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AssignmentSubmisionService } from '../../../shared/models/assignment-submission-service';
import { AssignmentService } from '../../../shared/models/assignment-service';
import { StudentService } from '../../../shared/models/student-service';
@Component({
  selector: 'app-assignment-submissions',
  templateUrl: './assignment-submissions.component.html',
  styleUrls: ['./assignment-submissions.component.scss'],
})
export class AssignmentSubmissionsComponent implements OnInit {
  private _filters: any;
  private _synopsis = false;
  private lastSearched: number;
  private searchText = '';
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
    this.router.navigate(['grade'], {queryParams: {assignment_submission: id}});

  }

  navigate() {
    this.router.navigate(['assignments']);
  }


  filterSubmissions() {
    this.assignmentSubmissions = this.assignmentSubmissions.slice(0, 3);
  }


  public search(event) {
    const d = new Date();
    this.lastSearched = d.getMilliseconds();
    this.checkDebounce(this.lastSearched);
  }

  private checkDebounce(time: any) {
    setTimeout(() => {
      if (time === this.lastSearched) {
        this.filters = Object.assign(this._filters, {'search': this.searchText});
      }
    }, 350);
  }


}


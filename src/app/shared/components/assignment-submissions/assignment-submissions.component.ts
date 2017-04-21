import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AssignmentSubmission, AssignmentSubmissionService} from '../../services/assignment/assignment-submission.service';
import {StudentService} from '../../services/student/student.service';
import {CourseService} from '../../services/course/course.service';
import {AssignmentService} from '../../services/assignment/assignment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-assignment-submissions',
  templateUrl: './assignment-submissions.component.html',
  styleUrls: ['./assignment-submissions.component.scss']
})
export class AssignmentSubmissionsComponent implements OnInit {

  @Input() synopsis = false;
  public _graded = false;
  @Input() set graded(value) {
    this._graded = value;
    this.ngOnInit();
  }

  private lastSearched: number;

  public assignments: AssignmentSubmission[] = [];
  public searchText: string;

  constructor(
    public assignmentSubmissionService: AssignmentSubmissionService,
    public assignmentService: AssignmentService,
    public studentService: StudentService,
    public courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {

    if (this._graded) {
      this.assignmentSubmissionService.getGradedAssignments().subscribe(assignments => {
        this.assignments = assignments;
      });
    } else {
      this.assignmentSubmissionService.getUngradedAssignments().subscribe(assignments => {
        if (this.synopsis) {
          this.assignments = assignments.slice(0, 3);
        } else {
          this.assignments = assignments;
        }
      });
    }
  }

  public navigate() {
    this.router.navigate(['assignments']);
  }

  public navigateToDetail(id: number) {
    this.router.navigate(['grade'], { queryParams: {submission: id}});
  }

  updateList(search: string) {
    this.assignmentSubmissionService.filterAssignments(search, this._graded).subscribe(x => {
      this.assignments = x;
    });
  }



  public search(event) {
    const d = new Date();
    this.lastSearched = d.getMilliseconds();
    this.checkDebounce(this.lastSearched);
  }

  private checkDebounce(time: any ) {
    setTimeout(() => {
      if (time === this.lastSearched) {
        this.updateList(this.searchText);
      }
    }, 350);
  }


}

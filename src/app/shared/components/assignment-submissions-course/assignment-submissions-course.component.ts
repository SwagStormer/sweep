import {Component, Input, OnInit} from '@angular/core';
import {
  AssignmentSubmission,
  AssignmentSubmissionService
} from '../../services/assignment/assignment-submission.service';
import {AssignmentService} from '../../services/assignment/assignment.service';
import {StudentService} from '../../services/student/student.service';
import {CourseService} from '../../services/course/course.service';

@Component({
  selector: 'app-assignment-submissions-course',
  templateUrl: './assignment-submissions-course.component.html',
  styleUrls: ['./assignment-submissions-course.component.scss']
})
export class AssignmentSubmissionsCourseComponent implements OnInit {
  private permanentArray: AssignmentSubmission[] = [];
  public assignmentArray: AssignmentSubmission[] = [];

  private _course: number;
  @Input() set course(value: number) {
    this._course = value;
    this.getAssignments();
  };

  public _graded = false;
  @Input() set graded(value: boolean) {
    this._graded = value;
    this.getAssignments();
  }

  private lastSearched: number;

  public assignments: AssignmentSubmission[] = [];
  public searchText: string;

  constructor(
    public assignmentSubmissionService: AssignmentSubmissionService,
    public assignmentService: AssignmentService,
    public studentService: StudentService,
    public courseService: CourseService,
  ) { }

  ngOnInit() {

  }

  getAssignments() {
    this.assignmentSubmissionService.getCourseAssignments(this._course, this._graded).subscribe(assignments => {
      this.permanentArray = assignments;
      this.assignments = assignments;
    });
  }

  updateList(search: string) {
    this.assignmentSubmissionService.filterAssignments(search, this._graded).subscribe(x => {
      this.assignments = x;
    });
  }



  public search(event) {
    const d = new Date();
    this.lastSearched = d.getMilliseconds();
    this.checkDebounce(this.lastSearched, event);
  }

  private checkDebounce(time: any, event: any) {
    setTimeout(() => {
      if (time === this.lastSearched) {
        this.updateList(this.searchText);
      }
    }, 350);
  }

}

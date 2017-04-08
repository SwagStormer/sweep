import { Component, OnInit } from '@angular/core';
import { AssignmentSubmissionService, AssignmentSubmission} from '../../services/assignment/assignment-submission.service';
import { StudentService, Student} from '../../services/student/student.service';
import {CourseService} from '../../services/course/course.service';
import {Assignment, AssignmentService} from "../../services/assignment/assignment.service";

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {

  public assignments: Assignment[] = [];
  public searchText: string;
  public lastSearched: number;

  constructor(
    private assignmentService: AssignmentService,
    public studentService: StudentService,
    public courseService: CourseService,
  ) { }

  ngOnInit() {
    this.assignmentService.getAssignments().subscribe(assignments => {
      this.assignments = assignments;
    });

  }

  updateList(search: string) {
    this.assignmentService.filterAssignments(search).subscribe(x => {
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

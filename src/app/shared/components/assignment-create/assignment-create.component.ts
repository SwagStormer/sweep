import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Course, CourseService } from '../../services/course/course.service';
import { Assignment, AssignmentService } from '../../services/assignment/assignment.service';
import { AssignmentSubmissionService } from '../../services/assignment/assignment-submission.service';

@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignment-create.component.html',
  styleUrls: ['./assignment-create.component.scss']
})
export class AssignmentCreateComponent implements OnInit {

  public courses: Course[] = [];

  public assignment: Assignment = new Assignment(-1, '', '', -1, 100, '');


  constructor(
    private dialog: MdDialogRef<AssignmentCreateComponent>,
    private courseService: CourseService,
    private assignmentService: AssignmentService,
    private assignmentSubmissionService: AssignmentSubmissionService
  ) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  valid(): boolean {
    return this.assignment.name !== '' &&
      this.assignment.instructions !== '' &&
      this.assignment.dueBy !== '' &&
      this.assignment.course !== -1;
  }

  submit() {
    this.assignmentService.createAssignment(this.assignment).subscribe(assignment => {
      console.log(assignment.id);
      this.assignmentSubmissionService.generateFakeSubmissions(assignment.id);
    });
    this.dialog.close();
  }





}

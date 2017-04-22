import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import {AssignmentSubmisionService} from "../../models/assignment-submission-service";
import {CourseService, ICourse} from "../../models/course-service";
import {AssignmentService, IAssignment} from "../../models/assignment-service";
import { DateFormatter } from '@angular/common/src/pipes/intl';




@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignment-create.component.html',
  styleUrls: ['./assignment-create.component.scss']
})
export class AssignmentCreateComponent implements OnInit {

  public courses: ICourse[] = [];

  public assignment: IAssignment = {
    name: '',
    description: '',
    out_of: 100,
    course: -1,
    due_by: '2017/2/4'
  };


  constructor(
    private dialog: MdDialogRef<AssignmentCreateComponent>,
    private assignmentService: AssignmentService,
    private courseService: CourseService

  ) { }

  ngOnInit() {
    this.courseService.readList().subscribe(course => {
      this.courses = course;
    });
  }

  valid(): boolean {

    let valid =  this.assignment.name !== '' &&
      this.assignment.description !== '' &&
      this.assignment.due_by !== '' &&
      this.assignment.course !== -1;
    console.log(valid);
    return valid;
  }


  submit() {
    console.log(this.assignment.course);
    const temp = this.assignment.due_by.split('/').join('-');
    this.assignment.due_by = temp;
    this.assignmentService.create(this.assignment).subscribe(assignment => {
      this.dialog.close();
    });
  }





}

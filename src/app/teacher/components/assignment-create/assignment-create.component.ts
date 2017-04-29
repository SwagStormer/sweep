import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { DateFormatter } from '@angular/common/src/pipes/intl';
import { CourseService, ICourse } from '../../../shared/models/course-service';
import { AssignmentService, IAssignment } from '../../../shared/models/assignment-service';




@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignment-create.component.html',
  styleUrls: ['./assignment-create.component.scss']
})
export class AssignmentCreateComponent implements OnInit {

  public courses: ICourse[] = [];
  public locked = false;

  public assignment: IAssignment = {
    name: '',
    description: '',
    out_of: 100,
    course: -1,
    due_by: ''
  };



  constructor(
    private dialog: MdDialogRef<AssignmentCreateComponent>,
    private assignmentService: AssignmentService,
    private courseService: CourseService

  ) { }

  ngOnInit() {
    this.courseService.readList().subscribe(course => {
      if (!this.locked) {
        this.courses = course;
      }
    });
  }

  valid(): boolean {

    let valid =  this.assignment.name !== '' &&
      this.assignment.description !== '' &&
      this.assignment.due_by !== '' &&
      this.assignment.course !== -1;
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

  selectCourse(id: number) {
    this.locked = true;
    this.courseService.read(id).subscribe(course => {
      this.courses = [course];
      this.assignment.course = course.id;
    });
  }





}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Student, StudentService} from '../../../shared/services/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public student: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.studentService.getStudent(+params['id']).subscribe(student => {
         this.student = student;
       });
    });

  }

}

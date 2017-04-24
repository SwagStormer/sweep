import { Component, OnInit } from '@angular/core';
import { IStudent, StudentService } from '../../../shared/models/student-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public student: IStudent;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentService.read(+params['id']).subscribe(student => {
        this.student = student;
      });
    });
  }

}

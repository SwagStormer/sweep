import {Component, Input, OnInit} from '@angular/core';
import {Student, StudentService} from '../../services/student/student.service';
import {AssignmentSubmissionService} from '../../services/assignment/assignment-submission.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  public students: Student[] = [];
  public lastSearched: number;
  public searchText: string;

  constructor(
    public studentService: StudentService,
    public assignmentSubmissionService: AssignmentSubmissionService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }

  private updateList(name: string) {
    this.studentService.filterByName(name).subscribe(students => {
      this.students = students;
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

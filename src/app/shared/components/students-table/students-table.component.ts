import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { StudentService } from '../../models/student-service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {

  private lastSearched: number;
  private searchText = '';

  private _filters: any;
  @Input() set filters(value: any) {
    this._filters = value;
    this.getStudents();
  };
  students = [];
  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit() {
  }
  getStudents() {
    this.studentService.readList(this._filters).subscribe(students => {
      this.students = students;
    });
  }
  navigateToSubmission(id: number, event: any) {
    event.stopPropagation();
    this.router.navigate(['grade'], {queryParams: {student: id}});

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

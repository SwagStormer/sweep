import {Component, Input, OnInit} from '@angular/core';
import {Student, StudentService} from '../../services/student/student.service';
import {AssignmentSubmissionService} from '../../services/assignment/assignment-submission.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-students-course',
  templateUrl: './students-course.component.html',
  styleUrls: ['./students-course.component.scss']
})
export class StudentsCourseComponent implements OnInit {

  private permanentArray: Student[] = [];
  public students: Student[] = [];
  public searchText: string;
  public lastSearched: number;

  private _course: number;
  @Input() set course(value: number) {
    this._course = value;
    this.getStudents();
  };

  constructor(
    private studentService: StudentService,
    public assignmentSubmissionService: AssignmentSubmissionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getStudents() {
    this.studentService.getStudentsByClass(this._course).subscribe(students => {
      this.permanentArray = students;
      this.students = students;
    });
  }

  public navigateToSubmission(id: number, event) {
    event.stopPropagation();
    this.router.navigate(['grade'], {queryParams: {student: id}});
  }

  public navigateToDetail(id: number) {
    this.router.navigate(['student', id]);
  }

  filterStudents(name: string) {
    this.studentService.filterByName(name)
      .map(students => {
        const arr = [];
        this.permanentArray.forEach(student => {
          if (students.find(s => student.id === s.id) !== undefined) {
            arr.push(student);
          }
        });
        return arr;
      })
      .subscribe(students => {
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
        this.filterStudents(this.searchText);
      }
    }, 350);
  }

}

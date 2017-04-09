import {Component, Input, OnInit} from '@angular/core';
import {Assignment, AssignmentService} from '../../services/assignment/assignment.service';
import {StudentService} from '../../services/student/student.service';
import {CourseService} from '../../services/course/course.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-assignment-course',
  templateUrl: './assignment-course.component.html',
  styleUrls: ['./assignment-course.component.scss']
})
export class AssignmentCourseComponent implements OnInit {
  private _course;
  @Input() set course(value: number) {
    this._course = value;
    this.getAssignments();
  }

  public assignments: Assignment[] = [];
  public searchText: string;

  private lastSearched: number;
  private permanentArray: Assignment[] = [];

  constructor(
    private assignmentService: AssignmentService,
    public studentService: StudentService,
    public courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  getAssignments() {
    this.assignmentService.getAssignmentsForCourse(this._course).subscribe(assignments => {
      this.permanentArray = assignments;
      this.assignments = assignments;
    });
  }

  public navigateToDetail(id: number) {
    this.router.navigate(['assignment', id]);
  }

  updateList(search: string) {
    this.assignmentService.filterAssignments(search)
      .map(assignments => {
      const arr = [];
      this.permanentArray.forEach(student => {
        if (assignments.find(s => student.id === s.id) !== undefined) {
          arr.push(student);
        }
      });
      return arr;
    })
      .subscribe(x => {
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

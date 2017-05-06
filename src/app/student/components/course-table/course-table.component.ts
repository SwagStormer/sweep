import { Component, Input, OnInit } from '@angular/core';
import { CourseService, ICourse } from '../../../shared/models/course-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.scss']
})
export class CourseTableComponent implements OnInit {

  private _filters: any;
  @Input() set filters(value: any) {
    this._filters = value;
    this.getCourses();
  }

  grades = {};

  public courses: ICourse[] = [];

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {

  }

  getGrade(id: number) {
    if (this.grades[id] !== undefined) {
      return `${this.grades[id]}%`;
    } else {
      return 'No Grade';
    }
  }

  getCourses() {
    this.courseService.readList(this._filters).subscribe(courses => {
      this.courses = courses;
      const mapped = [];
      courses.forEach(course => { mapped.push(this.courseService.getDetailRoute(course.id, 'grade'))});
      Observable.forkJoin(mapped).subscribe(grades => {
        console.log(grades);
        grades.forEach(grade => Object.assign(this.grades, {[grade['course']]: grade['grade']}));
      });
    });
  }

  navigateToDetail(id: number) {
    this.router.navigate(['students/course', id]);
  }

}

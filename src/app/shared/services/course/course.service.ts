import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs/Rx';

export class Course {
  constructor(
    public name: string,
    public period: number,
    public code: number,
    public numberOfStudents: number,
  ) {}
}

@Injectable()
export class CourseService {

  private courses: Array<Course> = [
    new Course('English 1010', 1, 23, 24),
    new Course('Spanish', 2, 24, 15),
    new Course('Jazz Band', 3, 25, 15),
    new Course('Engineering', 4, 26, 15),
    new Course('Chemistry', 4, 26, 15),
    new Course('Computer Programming 2', 4, 26, 15),

  ];

  constructor() { }

  public getCourses(): Observable<Course[]> {
    return Observable.from(this.courses).toArray();
  }
}

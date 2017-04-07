import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs/Rx';

export class Course {
  constructor(
    public id: number,
    public name: string,
    public period: number,
    public code: number,
    public numberOfStudents: number,
  ) {}
}

@Injectable()
export class CourseService {

  private courses: Array<Course> = [
    new Course(1, 'English 1010', 1, 23, 24),
    new Course(2, 'Spanish', 2, 24, 15),
    new Course(3, 'Jazz Band', 3, 25, 15),
    new Course(4, 'Engineering', 4, 26, 15),
    new Course(5, 'Chemistry', 4, 26, 15),
    new Course(6, 'Computer Programming 2', 4, 26, 15),

  ];

  constructor() { }

  public getCourses(): Observable<Course[]> {
    return Observable.from(this.courses).toArray();
  }

  public getCourse(id: number): Observable<Course> {
    return Observable.of(this.courses.find(item => item.id === id));
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs/Rx';

export class Student {
  constructor(
    public id: number,
    public name: string,
    public courses: number[]
  ) {}
}

@Injectable()
export class StudentService {

  private students: Student[] = [
    new Student(1, 'Ryan Berger', [1, 2, 3]),
    new Student(2, 'Davin Parish', [1]),
    new Student(3, 'Karl	Maldonado', [1, 3, 4]),
    new Student(4, 'Leticia	Holland', [2, 4]),
    new Student(5, 'Marcella	Baker', [1, 2, 3]),
    new Student(6, 'Dana	Christensen', [1]),
    new Student(7, 'Billy	Richardson', [1, 3, 4]),
    new Student(8, 'Arthur	Webb', [2, 4]),
    new Student(9, 'Wanda	Murray', [1, 2, 3]),
    new Student(10, 'Bert	Castro', [1]),
    new Student(11, 'Cory	Thomas', [1, 3, 4]),
    new Student(12, 'Elaine	Howell', [2, 4]),
    new Student(13, 'Abel	Aguilar', [1, 2, 3]),
    new Student(14, 'Ellen	Ballard', [1]),
    new Student(15, 'Leona	Howard', [1, 3, 4]),
    new Student(16, 'Debra	Guerrero', [2, 4]),
  ];

  constructor() { }

  public getStudent(id: number) {
    return Observable.of(this.students.find(student => student.id === id));
  }

  public getStudents(): Observable<Array<Student>> {
    return Observable.from(this.students).toArray();
  }

  public filterByName(name: string): Observable<Array<Student>> {
    return Observable.from(this.students.filter(student =>
      student.name.toLowerCase().startsWith(name.toLowerCase()))
    ).toArray();
  }

  public getStudentsByClass(courseId: number): Observable<Array<Student>> {
    return Observable.from(this.students.filter(student => {
      return student.courses.find(course => course === courseId) !== undefined;
    })).toArray();
  }


}

import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs/Rx';

export class Student {
  constructor(
    public id: number,
    public name: string
  ) {}
}

@Injectable()
export class StudentService {

  private students: Student[] = [
    new Student(1, 'Ryan Berger'),
    new Student(2, 'Davin Parish'),
    new Student(3, 'Cool Kid'),
    new Student(4, 'Cooler Kid'),
  ];

  constructor() { }

  public getStudent(id: number) {
    return Observable.of(this.students.find(student => student.id === id));
  }


}

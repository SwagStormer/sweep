import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CourseService } from '../course/course.service';
import { StudentService } from '../student/student.service';

export class Assignment {
  constructor(
    public id: number,
    public name: string,
    public instructions: string,
    public course: number,
    public outOf: number,
    public dueBy: string
  ) {}
}

@Injectable()
export class AssignmentService {

  private assignments: Assignment[] = [
    new Assignment(1, 'Argument Essay', 'Argue about Donald Trump', 1, 100, '04/12/17'),
    new Assignment(2, 'Spanish Story', 'Write a story in spanish', 2, 100, '03/04/17'),
    new Assignment(3, 'Sectionals', 'Work festival tunes as a section', 3, 100, '05/11/17'),
    new Assignment(4, 'Balancing Reactions', 'Balance the reactions given', 4, 100, '03/22/17'),
    new Assignment(5, 'Inventor Cert', 'Finish the Inventor certification test', 1, 100, '03/23/17'),
    new Assignment(6, 'Binary Tree', 'Write searching and sorting for teh binary tree functions', 1, 100, '02/11/17'),
  ];

  constructor(
    private courseService: CourseService,
    private studentService: StudentService,
  ) { }

  public getAssignments(): Observable<Assignment[]> {
    return Observable.from(this.assignments).toArray();
  }

  public getAssignment(id: number): Observable<Assignment> {
    return Observable.of(this.assignments.find(item => item.id === id));
  }

  public getAssignmentsForCourse(courseId: number): Observable<Array<Assignment>> {
    return Observable.from(this.assignments.filter(assignment => assignment.course === courseId)).toArray();
  }

  public filterAssignments(name: string) {
    return Observable.from(this.assignments.filter(assignment =>
      assignment.name.toLowerCase().startsWith(name.toLowerCase()))
    ).toArray();
  }

  public createAssignment(assignment: Assignment): Observable<Assignment> {
    assignment.id = this.assignments.length + 1;
    this.assignments.push(assignment);
    return Observable.of(assignment);
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CourseService } from '../course/course.service';
import { StudentService } from '../student/student.service';

export class Assignment {
  constructor(
    public id: number,
    public name: string,
    public course: number,
    public outOf: number,
    public dueBy: string
  ) {}
}

@Injectable()
export class AssignmentService {

  private assignments: Assignment[] = [
    new Assignment(1, 'Argument Essay', 1, 100, '04/12'),
    new Assignment(2, 'Spanish Story', 3, 100, '03/04'),
    new Assignment(3, 'Sectionals', 2, 100, '05/11'),
    new Assignment(4, 'Balancing Reactions', 4, 100, '03/22'),
    new Assignment(5, 'Inventor Cert', 1, 100, '03/23'),
    new Assignment(6, 'Binary Tree', 1, 100, '02/11'),
    new Assignment(7, '', 1, 100, '04/11'),
    new Assignment(8, '', 1, 100, '03/11')
  ];

  constructor(
    private courseService: CourseService,
    private studentService: StudentService
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

  public createAssignment() {}

}

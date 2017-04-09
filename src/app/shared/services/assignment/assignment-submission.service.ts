import {Injectable} from '@angular/core';
import {Observable } from 'rxjs/Rx';
import {StudentService} from '../student/student.service';
import {Assignment, AssignmentService} from './assignment.service';
import {Course, CourseService} from '../course/course.service';


export class AssignmentSubmission {
  constructor(
              public id: number,
              public assignment: number,
              public student: number,
              public score: number,
              public body: string,
              public graded: boolean,
              public comments: string) {
  }
}

@Injectable()
export class AssignmentSubmissionService {

  private assignments: AssignmentSubmission[] = [
    new AssignmentSubmission(
      1, 1, 1, 0,
      'It is all fake news. My alternative facts are better than yours. Argument finished',
      false, ''),
    new AssignmentSubmission(3, 3, 3, 0, '', false, ''),
    new AssignmentSubmission(2, 2, 2, 0, '', false, ''),
    new AssignmentSubmission(4, 5, 4, 0, '', false, ''),
    new AssignmentSubmission(5, 4, 1, 0, '', false, ''),
    new AssignmentSubmission(6, 6, 1, 0, '', false, '')
  ];

  constructor(
    private assignmentService: AssignmentService,
    private studentService: StudentService,
    private courseService: CourseService
  ) {
  }

  public getAssignment(id: number): Observable<AssignmentSubmission> {
    return Observable.of(this.assignments.find(assignment => assignment.id === id));
  }

  public getUngradedAssignments(): Observable<AssignmentSubmission[]> {
    return Observable.from(this.assignments.filter(assignment => !assignment.graded)).toArray();
  }

  public getGradedAssignments(): Observable<AssignmentSubmission[]> {
    return Observable.from(this.assignments.filter(assignment => assignment.graded)).toArray();
  }

  public getNextAssignment(id: number): Observable<AssignmentSubmission|null> {
    let index = this.assignments.indexOf(this.assignments.find(assignment => assignment.id === id));
    if (index < this.assignments.length - 1) {
      return Observable.of(this.assignments[++index]);
    }
    return Observable.of(null);
  }

  public gradeAssignment(assignmentSubmission: AssignmentSubmission) {
    const index = this.assignments.indexOf(this.assignments.find(assignment => assignment.id === assignmentSubmission.id));
    assignmentSubmission.graded = true;
    this.assignments[index] = assignmentSubmission;
  }

  public filterAssignments(name: string, graded: boolean) {
    return Observable.from(this.assignmentService.filterAssignments(name)).flatMap(assignments => {
      const filteredAssignments = !graded ?
        assignments.map(assignment => this.assignments.find(a => a.assignment === assignment.id)) :
        assignments.map(assignment => this.assignments.find(a => a.assignment === assignment.id && a.graded));
      filteredAssignments.forEach(elem => {
        if (elem === undefined) {
          filteredAssignments.splice(filteredAssignments.indexOf(elem));
        }
      });
      return this.studentService.filterByName(name).map(students => {
        let arr = [];
        students.forEach(student => {
          arr = Array().concat(...this.assignments.filter(assignment => assignment.student === student.id));
        });
        return Array().concat(arr, filteredAssignments);
      });
    });
  }

  //////////////////////
  // Foreign Key Crap //
  //////////////////////

  public getSubmissionCourse(submissionId: number): Observable<Course> {
    return Observable.of(this.assignments.find(assignment => assignment.id === submissionId))
      .flatMap(assignment => {
        return this.assignmentService.getAssignment(assignment.assignment).flatMap(a => {
          return this.courseService.getCourse(a.course);
        });
      });
  }

  public getCourseAssignments(courseId: number, graded = false): Observable<Array<AssignmentSubmission>> {
    return this.courseService.getCourse(courseId).flatMap(course => {
      return this.assignmentService.getAssignmentsForCourse(course.id).map(assignments => {
        let arr = [];
        assignments.forEach(assignment => {
          arr = Array().concat(arr, ...this.assignments.filter(a => a.assignment === assignment.id && a.graded === graded));
        });
        return arr;
      });
    });
  }

  public getStudentAssignments(studentId: number): Observable<AssignmentSubmission[]> {
    return Observable.from(this.assignments.filter(assignment => assignment.student === studentId)).toArray();
  }

  public getUngradedStudentAssignments(studentId: number): Observable<AssignmentSubmission[]> {
    return Observable.from(this.assignments.filter(assignment =>
      assignment.student === studentId && !assignment.graded )).toArray();
  }

}

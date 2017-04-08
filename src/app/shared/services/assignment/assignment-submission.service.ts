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
              public graded: boolean) {
  }
}

@Injectable()
export class AssignmentSubmissionService {

  private assignments: AssignmentSubmission[] = [
    new AssignmentSubmission(1, 1, 1, 0, false),
    new AssignmentSubmission(3, 3, 3, 0, false),
    new AssignmentSubmission(2, 2, 2, 0, false),
    new AssignmentSubmission(4, 5, 4, 0, false),
    new AssignmentSubmission(5, 4, 1, 0, false),
    new AssignmentSubmission(6, 6, 1, 0, false)
  ];

  constructor(
    private assignmentService: AssignmentService,
    private studentService: StudentService,
    private courseService: CourseService
  ) {
  }

  public getAssignments(): Observable<AssignmentSubmission[]> {
    return Observable.from(this.assignments).toArray();
  }

  public getUngradedAssignments(): Observable<AssignmentSubmission[]> {
    return Observable.from(this.assignments.filter(assignment => !assignment.graded)).toArray();
  }

  public getGradedAssignments(): Observable<AssignmentSubmission[]> {
    return Observable.from(this.assignments.filter(assignment => assignment.graded)).toArray();
  }

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

}

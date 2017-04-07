import { Component, OnInit } from '@angular/core';
import { AssignmentService, Assignment} from '../../services/assignment/assignment.service';
import { StudentService, Student} from '../../services/student/student.service';



@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {

  public assignments: Assignment[] = [];

  constructor(
    private assignmentService: AssignmentService,
    public studentService: StudentService
  ) { }

  ngOnInit() {
    this.assignmentService.getAssignments().subscribe(assignments => {
      this.assignments = assignments;
    });

  }



}

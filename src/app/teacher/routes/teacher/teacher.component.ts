import { Component, OnInit } from '@angular/core';
import { AssignmentCreateComponent } from '../../components/assignment-create/assignment-create.component';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { State } from '../../../shared/animations/state';
import { spin } from '../../../shared/animations/spin';
import { expand } from '../../../shared/animations/expand';
import { AuthService } from '../../../shared/TSData/auth.service';
import { AnnouncementCreateComponent } from '../../components/announcement-create/announcement-create.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
  animations: [
    spin,
    expand
  ]
})
export class TeacherComponent implements OnInit {

  public state: State = new State('closed', 'open');

  constructor(
    private router: Router,
    private dialog: MdDialog,
    private auth: AuthService
  ) {}

  ngOnInit() {

  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

  createAssignment() {
    this.state.toggle();
    const dialog = this.dialog.open(AssignmentCreateComponent);
  }

  createAnnouncement() {
    this.state.toggle()
    const dialog = this.dialog.open(AnnouncementCreateComponent);
  }

}

import {
  Component,
  OnInit,

} from '@angular/core';
import { Router } from '@angular/router';
import { State } from '../animations/state';
import { spin } from '../animations/spin';
import { expand } from '../animations/expand';
import { MdDialog } from '@angular/material';
import { AssignmentCreateComponent } from '../shared/components/assignment-create/assignment-create.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    spin,
    expand,
  ]
})
export class HomeComponent implements OnInit {

  public state: State = new State('closed', 'open');

  constructor(
    private router: Router,
    private dialog: MdDialog
  ) {}

  ngOnInit() {}

  logout() {
    this.router.navigate(['login']);
  }

  createAssignment() {
    this.state.toggle();
    const dialog = this.dialog.open(AssignmentCreateComponent);
  }

}

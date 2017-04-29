import {
  Component,
  OnInit,

} from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { AssignmentCreateComponent } from '../teacher/components/assignment-create/assignment-create.component';
import { AuthService } from '../shared/TSData/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit() {}

  constructor() {}


}

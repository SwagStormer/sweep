import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/TSData/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}

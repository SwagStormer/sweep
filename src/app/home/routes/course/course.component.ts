import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const param = +params['id'];
    });


  }
}

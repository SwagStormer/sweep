import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService, ICourse } from '../../../shared/models/course-service';

@Component({
  selector: 'app-course-settings',
  templateUrl: './course-settings.component.html',
  styleUrls: ['./course-settings.component.scss']
})
export class CourseSettingsComponent implements OnInit {

  public course: ICourse;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseService.read(+params['id']).subscribe(course => {
        this.course = course;
      });
    });
  }

  navigateBack() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}

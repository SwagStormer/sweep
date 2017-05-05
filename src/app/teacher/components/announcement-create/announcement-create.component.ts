import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { AnnouncementService, IAnnouncement } from 'app/shared/models/announcement-service';
import { CourseService, ICourse } from '../../../shared/models/course-service';

@Component({
  selector: 'app-announcement-create',
  templateUrl: './announcement-create.component.html',
  styleUrls: ['./announcement-create.component.scss']
})
export class AnnouncementCreateComponent implements OnInit {

  public courses: ICourse[]= [];

  public announcement: IAnnouncement = {
    announcement: '',
    pinned: true,
    course: -1
  };

  constructor(
    private dialog: MdDialogRef<AnnouncementCreateComponent>,
    private assignmentService: AnnouncementService,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.courseService.readList().subscribe(courses => {
      this.courses = courses;
    });
  }

  submit() {

  }

  selectCourse(id: number) {

  }

}

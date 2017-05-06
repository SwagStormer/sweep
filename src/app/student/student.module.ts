import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './routes/student/student.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ServiceModule } from '../shared/models/service.module';
import { StudentRoutingModule } from './student.routing.module';
import { MdButtonModule, MdCardModule, MdIconModule, MdToolbarModule } from '@angular/material';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { CourseComponent } from './routes/course/course.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ServiceModule,
    StudentRoutingModule,
    MdToolbarModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule
  ],
  declarations: [StudentComponent, DashboardComponent, CourseTableComponent, CourseComponent]
})
export class StudentModule { }

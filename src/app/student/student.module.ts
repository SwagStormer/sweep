import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './routes/student/student.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ServiceModule } from '../shared/models/service.module';
import { StudentRoutingModule } from './student.routing.module';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdTabsModule,
  MdToolbarModule
} from '@angular/material';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { CourseComponent } from './routes/course/course.component';
import { AssignmentsTableComponent } from './components/assignments-table/assignments-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ServiceModule,
    StudentRoutingModule,
    MdToolbarModule,
    MdCardModule,
    MdIconModule,
    MdTabsModule,
    MdListModule,
    MdButtonModule
  ],
  declarations: [StudentComponent, DashboardComponent, CourseTableComponent, CourseComponent, AssignmentsTableComponent]
})
export class StudentModule { }

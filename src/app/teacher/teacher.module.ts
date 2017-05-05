import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './routes/teacher/teacher.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { CourseComponent } from './routes/course/course.component';
import { AssignmentsComponent } from './routes/assignments/assignments.component';
import { PeriodsComponent } from 'app/teacher/components/periods/periods.component';
import { AssignmentSubmissionsComponent } from './components/assignment-submissions/assignment-submissions.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { StudentsComponent } from './routes/students/students.component';
import { AssignmentCreateComponent } from 'app/teacher/components/assignment-create/assignment-create.component';
import { AssignmentsTableComponent } from './components/assignments-table/assignments-table.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { GradeComponent } from './routes/grade/grade.component';
import { StudentComponent } from './routes/student/student.component';
import { AssignmentComponent } from './routes/assignment/assignment.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ServiceModule } from '../shared/models/service.module';
import { ChartsModule } from 'ng2-charts';
import { TeacherRoutingModule } from './teacher.routing.module';
import { CourseSettingsComponent } from './routes/course-settings/course-settings.component';
import { HourTableComponent } from './components/hour-table/hour-table.component';
import { GradingScaleComponent } from './components/grading-scale/grading-scale.component';
import { GradeCategoriesComponent } from './components/grade-categories/grade-categories.component';
import { AnnouncementCreateComponent } from './components/announcement-create/announcement-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    TeacherRoutingModule,
    ServiceModule,
    MaterialModule
  ],
  declarations: [
    TeacherComponent,
    DashboardComponent,
    CourseComponent,
    AssignmentComponent,
    GradeComponent,
    AssignmentsComponent,
    AssignmentSubmissionsComponent,
    AssignmentCreateComponent,
    PeriodsComponent,
    CoursesTableComponent,
    StudentsTableComponent,
    StudentsComponent,
    AssignmentsTableComponent,
    AssignmentCreateComponent,
    StudentComponent,
    CourseSettingsComponent,
    HourTableComponent,
    GradingScaleComponent,
    GradeCategoriesComponent,
    AnnouncementCreateComponent,
  ],
  entryComponents: [
    AssignmentCreateComponent,
    AnnouncementCreateComponent
  ],
})
export class TeacherModule { }

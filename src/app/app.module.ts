import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import {
  MaterialModule, MdButtonModule, MdCardModule, MdToolbarModule, MdInputModule,
  MdProgressBarModule, MdSelectModule, MdIconModule, MdSidenavModule, MdOptionModule
} from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TSDataModule } from './shared/TSData/tsdata.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceModule } from './shared/models/service.module';
import { TeacherModule } from './teacher/teacher.module';
import { CanActivateViaAuthGuard, IsTeacher } from './shared/TSData/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    TSDataModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [
    ServiceModule,
    CanActivateViaAuthGuard,
    IsTeacher
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

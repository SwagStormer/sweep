import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentCourseComponent } from './assignment-course.component';

describe('AssignmentCourseComponent', () => {
  let component: AssignmentCourseComponent;
  let fixture: ComponentFixture<AssignmentCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

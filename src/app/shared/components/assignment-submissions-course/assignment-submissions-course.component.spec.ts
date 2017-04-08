import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSubmissionsCourseComponent } from './assignment-submissions-course.component';

describe('AssignmentSubmissionsCourseComponent', () => {
  let component: AssignmentSubmissionsCourseComponent;
  let fixture: ComponentFixture<AssignmentSubmissionsCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentSubmissionsCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentSubmissionsCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

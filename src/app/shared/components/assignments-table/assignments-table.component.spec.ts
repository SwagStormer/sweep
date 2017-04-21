import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsTableComponent } from './assignments-table.component';

describe('AssignmentsTableComponent', () => {
  let component: AssignmentsTableComponent;
  let fixture: ComponentFixture<AssignmentsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

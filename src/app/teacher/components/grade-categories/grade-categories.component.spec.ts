import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCategoriesComponent } from './grade-categories.component';

describe('GradeCategoriesComponent', () => {
  let component: GradeCategoriesComponent;
  let fixture: ComponentFixture<GradeCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingScaleComponent } from './grading-scale.component';

describe('GradingScaleComponent', () => {
  let component: GradingScaleComponent;
  let fixture: ComponentFixture<GradingScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradingScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

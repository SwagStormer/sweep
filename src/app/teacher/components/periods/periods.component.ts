import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.scss']
})
export class PeriodsComponent implements OnInit {
  private _filters: any;
  @Input() set filters(value: any) {
  this._filters = value;
  this.getPeriods();
};

  periods = [];
  constructor() { }

  ngOnInit() {
  }

  getPeriods() {
    this.periods = Array(10);
  }

}

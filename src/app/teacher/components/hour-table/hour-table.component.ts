import { Component, Input, OnInit } from '@angular/core';
import { HourService, IHour } from '../../../shared/models/hour-service';

@Component({
  selector: 'app-hour-table',
  templateUrl: './hour-table.component.html',
  styleUrls: ['./hour-table.component.scss']
})
export class HourTableComponent implements OnInit {

  private _filters: any;
  @Input() set filters(value: any) {
    this._filters = value;
    this.updateHours();
  }

  private hours: IHour[] = [];


  constructor(private hourService: HourService) { }

  ngOnInit() {
  }

  private updateHours() {
    this.hourService.readList(this._filters).subscribe(hours => {
      this.hours = hours;
    });
  }

}

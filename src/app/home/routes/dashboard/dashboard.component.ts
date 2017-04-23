import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public data = [];
  public data2 = [];

  private chartOptions = {
    animation: {
      animateRotate: true,
      animateScale: false
    },
    cutoutPercentage: 85
  };

  private chartColors: any[] = ['#37b24d', '#c92a2a'];

  constructor() { }

  ngOnInit() {

    this.data = [
      {
        data: [75, 25],
        backgroundColor: this.chartColors
      },
    ];
    this.data2 = [
      {
        data: [100, 0],
        backgroundColor: this.chartColors
      },
    ];
  }

}

import {
  Component,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { Spin } from '../animations/spin'
import { FlyIn } from '../animations/fly-in';
import { State } from '../animations/state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    new Spin().self(),
    new FlyIn().self()
  ],
})
export class HomeComponent implements OnInit {

  private sideNav: State = new State('derp', 'derp');

  private spin: State = new State('closed', 'open');

  private chartOptions = {
    animation: {
      animateRotate: true,
      animateScale: false
    },
    cutoutPercentage: 85
  };

  private chartColors: any[] = ['#37b24d', "#c92a2a"];

  private data = [];

  private todos = [
    "Talk to student",
    "Finish grading that assignment",
    "Be awesome",
    "Do something cool"
  ];

  constructor() {

  }

  ngOnInit() {
    this.data = [
      {
        data: [60, 40],
        backgroundColor: this.chartColors
      },
    ];
  }

}

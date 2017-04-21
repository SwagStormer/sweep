import {
  Component,
  OnInit,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],


})
export class HomeComponent implements OnInit {



  private chartColors: any[] = ['#37b24d', '#c92a2a'];

  private data = [];

  private todos = [
    'Talk to student',
    'Finish grading that assignment',
    'Be awesome',
    'Do something cool'
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

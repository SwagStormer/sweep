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

  ngOnInit() {}

}

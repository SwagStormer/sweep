import { Animation } from './animation'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';

///////////////////////////
//// Fly In Animation ////
/////////////////////////


export class FlyIn extends Animation {
  description = "Enter in from the left";
  self(): any {
    return trigger('flyIn', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition(':leave', [
        animate(100, style({transform: 'translateX(-100%)'}))
      ])
    ])
  }
}

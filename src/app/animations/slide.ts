import { Animation } from './animation';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/core';

export class Slide extends Animation {
  description = "Slide back and forth";
  self(): any {
    return trigger('slide', [
      state('right', style({right: '0'})),
      state('left', style({right: '100%'})),
      transition('right=>left', [
        animate(100, keyframes([
          style({right: "25%", offset: .25}),
          style({right: "50%", offset: .5}),
          style({right: "75%", offset: .75}),
          style({right: "100%", offset: 1})
        ]))
      ]),
      transition("left=>right", [
        animate(100, keyframes([
          style({right: "100%", offset: .25}),
          style({right: "75%", offset: .5}),
          style({right: "50%", offset: .75}),
          style({right: "25%", offset: 1})
        ]))
      ])
    ])
  }
}

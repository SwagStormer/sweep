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


export const flyIn = trigger('flyIn', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition(':leave', [
        animate(100, style({transform: 'translateX(-100%)'}))
      ])
    ]);



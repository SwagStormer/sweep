import { animate, style, transition, trigger } from '@angular/core';
/**
 * Created by ryanberger on 4/11/17.
 */

export const collapse = trigger('collapse', [
  transition(':leave', [
    animate(150, style({height: '0px'}))
  ])
]);

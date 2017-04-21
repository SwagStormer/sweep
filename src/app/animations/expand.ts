/**
 * Created by ryanberger on 4/11/17.
 */

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/core';


export const expand = trigger('expand', [
  transition(':enter', [
    animate(200, keyframes([
      style({width: '20vw', height: '20vw', offset: .1}),
      style({width: '40vw', height: '40vw', offset: .2}),
      style({width: '60vw', height: '60vw', offset: .3}),
      style({width: '80vw', height: '80vw', offset: .4}),
      style({width: '90vw', height: '100vw', offset: .5}),
      style({width: '100vw', height: '120vw', offset: .6}),
      style({width: '100vw', height: '140vw', offset: .7}),
      style({width: '100vw', height: '160vw', offset: .8}),

    ]))
  ]),
  transition(':leave', [
    animate(200, keyframes([
      style({width: '100vw', height: '160vw', offset: .1}),
      style({width: '100vw', height: '140vw', offset: .2}),
      style({width: '100vw', height: '120vw', offset: .3}),
      style({width: '90vw', height: '100vw', offset: .4}),
      style({width: '80vw', height: '80vw', offset: .5}),
      style({width: '60vw', height: '60vw', offset: .6}),
      style({width: '40vw', height: '40vw', offset: .7}),
      style({width: '20vw', height: '20vw', offset: .8})
    ]))
  ])
]);

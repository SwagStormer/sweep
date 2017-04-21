import {
  trigger,
  state,
  style,
  animate,
  keyframes,
  transition
} from '@angular/core';

export const spin = trigger('spin', [
  state('closed', style({transform: 'rotate(0deg)'})),
  state('open', style({transform: 'rotate(225deg)'})),
  transition('closed => open', [
    animate(400, keyframes([
      style({transform: 'rotate(45deg)', offset: 0}),
      style({transform: 'rotate(225deg)', offset: .3})
    ]))
  ]),
  transition('open => closed', [
    animate(400, keyframes([
      style({transform: 'rotate(-90deg)', offset: 0}),
      style({transform: 'rotate(-180deg)', offset: .3})
    ]))
  ])
]);


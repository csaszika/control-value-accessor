import {animate, state, style, transition, trigger} from '@angular/animations';

export const galleryItemInOut = trigger('list', [

  /**
   * Defined states
   */
  state('in', style({
    opacity: 1,
    transform: 'translateX(0)'
  })),

  /**
   * Transitions
   */
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translateX(-100px) translateY(-50px)'
    }),
    animate(400)
  ]),

  transition('* => void', [
    animate(400, style({
      opacity: 0,
      transform: 'translateX(100px) translateY(50px)'
    }))
  ])
]);


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'app';
// }


import { Component, OnInit, HostListener, ElementRef, HostBinding } from '@angular/core';
import * as $ from 'jquery';


import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'rotate(-90deg)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'translateX(-50%)'
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ]),

    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('1500ms ease-in-out')),
      transition('out => in', animate('1500ms ease-in-out'))
    ]),
    trigger('slideWhite', [
      state('in', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('out => in', animate('1400ms ease-in-out')),
      transition('in => out', animate('1500ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  @HostBinding('class.is-open')
  state = 'hide';
  menuState = 'out';
  whiteState = 'out';
  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.whiteState = this.whiteState === 'out' ? 'in' : 'out';
  }
  toggleHome() {
   this.menuState = 'out';
    this.whiteState = 'out';
  }
  // toggleWhite() {
  //   this.whiteState = this.whiteState === 'out' ? 'in' : 'out';
  // }
  // constructor(public el: ElementRef) {

  // }
}

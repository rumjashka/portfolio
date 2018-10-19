import { Component, OnInit, HostListener, ElementRef } from '@angular/core';



import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-w-one',
  templateUrl: './w-one.component.html',
  styleUrls: ['./w-one.component.scss'],
  animations: [
    trigger('scrollW', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ],
  ),
  trigger('scrollImg', [
    state('show', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    state('hide',   style({
      opacity: 0,
      transform: 'translateX(-100%)'
    })),
    transition('show => hide', animate('1000ms ease-out')),
    transition('hide => show', animate('1000ms ease-in'))
  ])
  ]
})
export class WOneComponent  {
  stateW = 'hide';

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScrollW() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + 700;

    if (scrollPosition >= componentPosition) {
      this.stateW = 'show';
    } else {
      this.stateW = 'hide';
    }
  }
}

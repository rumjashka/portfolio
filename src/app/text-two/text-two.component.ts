import { Component, OnInit, HostListener, ElementRef } from '@angular/core';


import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';


@Component({
  selector: 'app-text-two',
  templateUrl: './text-two.component.html',
  styleUrls: ['./text-two.component.scss'],
  animations: [
    trigger('showAboutTextTwo', [
      transition('hide => show', [
        query('.block', style({ opacity: 0 })),
        query('.block', stagger(400, [
          animate('1s ease-in-out', style({ opacity: 1 })),
        ])),
      ])
    ]),
  ]
})
export class TextTwoComponent  {

  stateTextTwo = 'hide';
  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop + 200;
    const scrollPosition = window.pageYOffset + 1200;

    if (scrollPosition > componentPosition) {
      this.stateTextTwo = 'show';
    } else {
      this.stateTextTwo = 'hide';
    }
  }
}

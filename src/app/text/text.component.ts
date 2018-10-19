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
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  animations: [
    trigger('showAboutText', [
      transition('hide => show', [
        query('.block', style({ opacity: 0 })),
        query('.block', stagger(400, [
          animate('1s ease-in-out', style({ opacity: 1 })),
        ])),
      ])
    ]),
  ]
})
export class TextComponent  {

  stateText = 'hide';
  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + 700;

    if (scrollPosition >= componentPosition) {
      this.stateText = 'show';
    } else {
      this.stateText = 'hide';
    }
  }
}

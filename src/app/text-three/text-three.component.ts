import { Component, OnInit, HostListener, ElementRef } from '@angular/core';


import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-text-three',
  templateUrl: './text-three.component.html',
  styleUrls: ['./text-three.component.scss'],
  animations: [
    trigger('showCheers', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'translateX(-50%)'
      })),
      transition('show => hide', animate('1200ms ease-out')),
      transition('hide => show', animate('1200ms ease-in'))
    ]),
    ]
})
export class TextThreeComponent implements OnInit {

  stateCheers = 'hide';
  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkCheers() {
      const componentPosition = this.el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset + 700;

      if (scrollPosition >= componentPosition) {
        this.stateCheers = 'show';
      } else {
        this.stateCheers = 'hide';
      }

    }
  ngOnInit() {
  }
}

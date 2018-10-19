import { Component, OnInit, HostListener, ElementRef } from '@angular/core';


import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('showAbout', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'rotate3d(0.2, 1, 0, 30deg)'
      })),
      transition('show => hide', animate('1200ms ease-out')),
      transition('hide => show', animate('1200ms ease-in'))
    ]),
    trigger('showAboutPhoto', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'rotate3d(0, 1, 0, 60deg)'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]),

    ]
})
export class AboutComponent implements OnInit {


  state = 'hide';
  stateImg = 'hide';
  constructor(public el: ElementRef, private router: Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
         return false;
      };
      this.router.events.subscribe((evt) => {
         if (evt instanceof NavigationEnd) {
            this.router.navigated = false;
            window.scrollTo(0, 0);
         }
     });

  }

  @HostListener('window:scroll', ['$event'])
    checkShow() {
      const componentPosition = this.el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;


      if (scrollPosition >= componentPosition) {
        this.stateImg = 'show';
      } else {
        this.stateImg = 'hide';
      }

    }
    public ngOnInit()  {
      setTimeout (() => {
            this.state = 'show';
         }, 500);
    }

}

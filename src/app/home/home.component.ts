import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import * as $ from 'jquery';


import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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

    // trigger('slideInOut', [
    //   state('in', style({
    //     transform: 'translate3d(0, 0, 0)'
    //   })),
    //   state('out', style({
    //     transform: 'translate3d(100%, 0, 0)'
    //   })),
    //   transition('in => out', animate('1500ms ease-in-out')),
    //   transition('out => in', animate('1500ms ease-in-out'))
    // ]),
    // trigger('slideWhite', [
    //   state('in', style({
    //     transform: 'translate3d(-100%, 0, 0)'
    //   })),
    //   state('out', style({
    //     transform: 'translate3d(100%, 0, 0)'
    //   })),
    //   transition('out => in', animate('1400ms ease-in-out')),
    //   transition('in => out', animate('1500ms ease-in-out'))
    // ]),
  ]
})
export class HomeComponent implements OnInit {
  photo = 'assets/rubics.jpg';
  state = 'hide';
  // menuState = 'out';
  // whiteState = 'out';
  // toggleMenu() {
  //   this.menuState = this.menuState === 'out' ? 'in' : 'out';
  // }

  // toggleWhite() {
  //   this.whiteState = this.whiteState === 'out' ? 'in' : 'out';
  // }
  constructor(public el: ElementRef) {

  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= componentPosition) {
        this.state = 'show';
      } else {
        this.state = 'hide';
      }
      const scroll = window.pageYOffset;
      const img = document.querySelector('.zoom img') as HTMLElement;
      img.style.width = (100 + scroll / 5)  + '%';
      img.style.top = -(scroll / 10)  + '%';
    }

  public ngOnInit() {
  // $(window).scroll(function() {
  //   // const scroll = $(window).scrollTop();
  //   // $('.zoom img').css({
  //   //   width: (100 + scroll / 5)  + '%',
  //   //   top: -(scroll / 10)  + '%',
  //   // });
  //  const scroll = window.pageYOffset;
  //   const img = document.querySelector('.zoom img') as HTMLElement;
  //   img.style.width = (100 + scroll / 5)  + '%';
  //   img.style.top = -(scroll / 10)  + '%';
  // });
  $(window).scroll(function() {
    $('.parent').css('opacity', 1 - ($(window).scrollTop() - 100) / 250);
  });

window.onscroll = function() {stickyIpad();
};

const navbar = document.getElementById('intro');
const sticky = navbar.offsetTop;

function stickyIpad() {

    navbar.classList.add('sticky');
}


}
}

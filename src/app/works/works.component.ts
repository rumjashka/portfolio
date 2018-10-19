import { Component, OnInit, HostListener, ElementRef, AfterViewInit } from '@angular/core';


import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  animations: [
    trigger('showWorksText', [
      transition('hide => show', [
        query('.block', style({ opacity: 0 })),
        query('.block', stagger(400, [
          animate('2s ease-in-out', style({ opacity: 1 })),
        ])),
      ])
    ]),
  ]
})
// export class WorksComponent  implements AfterViewInit {

//   stateWorksText = 'hide';
//   constructor(public el: ElementRef) { }

//   @HostListener('window:scroll', ['$event'])
//   ngAfterViewInit() {
//     const componentPosition = this.el.nativeElement.offsetTop;
//     const scrollPosition = window.pageYOffset;
//     setTimeout (() => {
//           this.stateWorksText = 'show';
//        }, 1000);
//     if (componentPosition ) {
//       this.stateWorksText = 'show';
//     } else {
//       this.stateWorksText = 'hide';
//     }

//   }
// }

export class WorksComponent  implements OnInit {

  constructor(private router: Router) {
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
  stateWorksText = 'hide';
public ngOnInit()  {
  setTimeout (() => {
        this.stateWorksText = 'show';
     }, 500);

}


}

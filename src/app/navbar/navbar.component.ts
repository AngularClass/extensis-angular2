import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  template: `
    <nav>
      <a routerLink="/home"> Back to Home </a>
      <ng-content></ng-content>
      <button> 
        <a routerLink="/kittens"> To Kittens </a>
      </button>
      <button>
        <a routerLink="/kittens/generate"> Kitten Factory </a>
      </button>
      <button>
        <a routerLink="/accounts"> To Your Accounts! </a>
      </button>
    </nav>
  `
})
export class NavBarComponent {
  // constructor( router: Router ) {

  // }

  // goTo ( page: string , details: number ) {
  //   this.router.navigate[page, details];
  // }
}

/*
  The commented out section shows a different way to navigate:
  In this case, rather than use the routerLink attribute, you can call
  upon the router to directly navigate you to a place.

  In the commented out example, you would need to pass in the link and any other information
  from the DOM to the component for the goTo function to work.
*/
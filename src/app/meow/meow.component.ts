import { Component, OnDestroy } from '@angular/core';
import { ViewService } from '../../shared/view.service';

@Component({
  selector: 'meow',
  template: `
     I am projected content.
     <div *ngIf="toggle">
       View has been switched! :)
       <img src="http://placekitten.com/g/200/300">
     </div>
     <div *ngIf="!toggle">
       View has not been switched :(
     </div>
  `
})
export class Meow implements OnDestroy {
  toggle = false;
  listener;
  constructor(public viewService: ViewService ) {
    this.init();
  }

  init () {
    this.listener = this.viewService.getChanges('meow').subscribe(
      toggleValue => {
        this.toggle = toggleValue;
      }
    )
  }

  ngOnDestroy () {
    this.listener.unsubscribe();
  }

  /*  
    Avoid writing imperatively in the constructor, it makes it hard to test.
    Hence, there is an init function that is being called which makes it infinitely easier to test against.
  */
}
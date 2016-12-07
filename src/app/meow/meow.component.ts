import { Component } from '@angular/core';
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
export class Meow {
  toggle = false;

  constructor(public viewService: ViewService ) {
    this.viewService.getChanges('meow').subscribe(
      toggleValue => {
        this.toggle = toggleValue;
      }
    )
  }

}
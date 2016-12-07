import { Component } from '@angular/core';
import { Litter, Kitten } from '../../shared/models';
import { Store } from '../../shared/store.service';

@Component({
  selector: 'litter',
  template: `
    <ul>
      <li *ngFor="let kitten of litter.kittens">
        <a [routerLink]="['/kittens', kitten.id]">
          {{ kitten.name }}
        </a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class LitterComponent {
  litter: Litter;

  constructor ( public store: Store ) {
    this.litter = store.get('litter');  
  }
}
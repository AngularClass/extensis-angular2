import { Component, Input } from '@angular/core';
import { Kitten } from '../../../shared/models';
import { ActivatedRoute } from '@angular/router';
import { Store } from '../../../shared/store.service';

@Component({
  selector: 'kitten-details',
  template: `
    {{ kitten.name }}
  `
})
export class KittenDetailsComponent {
  kitten: Kitten;

  constructor( 
    public route: ActivatedRoute
  ) {

    this.route.data
      .map(data => data[0])
      .subscribe(data => {
        this.kitten = data; 
      });
  }

} 
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <h3> HOME </h3>
    <router-outlet></router-outlet>
  `
})
export class HomeComponent {}
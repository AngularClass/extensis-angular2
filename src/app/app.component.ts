import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <nav-bar>
      Hello Extensis. Glad it isn't snowing.
    </nav-bar>
    <my-todo>
      <meow></meow>
    </my-todo>
    <router-outlet></router-outlet>
  `
})
export class AppComponent{}
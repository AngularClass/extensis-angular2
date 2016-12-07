import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    Hello Extensis. Glad it isn't snowing.
    <my-todo>
      <meow></meow>
    </my-todo>
    <router-outlet></router-outlet>
  `
})
export class AppComponent{}
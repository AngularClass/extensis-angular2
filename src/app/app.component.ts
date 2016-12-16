import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <nav-bar>
      <div class="targ">Hello Extensis. Glad it isn't snowing.</div>
    </nav-bar>
    <my-todo>
      <meow></meow>
    </my-todo>
    <router-outlet></router-outlet>
  `
})
export class AppComponent{}
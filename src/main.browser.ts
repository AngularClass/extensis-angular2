import './polyfills.browser';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, Injectable } from '@angular/core';
import { Route, RouterModule, Resolve, ActivatedRouteSnapshot  } from '@angular/router';

import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { SharedModule } from './shared/shared.module';
import { ToDoService } from './shared/todo.service';
import { Store } from './shared/store.service';
import { LitterComponent } from './app/litter/litter.component';
import { KittenDetailsComponent } from './app/litter/kitten-details/kitten-details.component';
import { Observable } from 'rxjs';

@Injectable()
class GetKittens implements Resolve<GetKittens> {
  constructor( public store: Store ) {

  }

  resolve ( route: ActivatedRouteSnapshot ) {
    var id = route.params['id'];
    var filter = this.store.get('litter').kittens
      .filter( cat => cat.id === Number(id) )[0];

    return Observable.of(filter);
  }
}

@Component({
  selector: 'home',
  template: `<h3> HOME </h3>`
})
export class HomeComponent {}


var routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'kittens/:id',
    component: LitterComponent,
    resolve: [ GetKittens ],
    children: [
      {
        path: '',
        component: KittenDetailsComponent
      }
    ]
  }
];

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ HomeComponent ],
  providers: [ GetKittens ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppModule,
    SharedModule.withProviders()
  ]
})
class MainModule {
  constructor(public todoservice: ToDoService) {
    console.log('Main module created.');
    todoservice.syncWithServer();
  }
}

var platform = platformBrowserDynamic();

platform.bootstrapModule(MainModule)
.then( moduleRef => console.log('Bootstrapped.'));
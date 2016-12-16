import { NgModule } from '@angular/core';
import { ToDoModule } from './todo/todo.module';
import { MeowModule } from './meow/meow.module';
import { LitterModule } from './litter/litter.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';
import { AppRoutesModule } from './app-routes.module.ts';
import { NavBarModule } from './navbar/navbar.module';
import { AccountManagementModule } from './account-management/account-management.module';
import { NotFoundModule } from './not-found/not-found.module';
/*
Recommended: Open app-routes.module.ts and any other -routes.module.ts file.NotFoundModule

All the features that have their own independent routes have their own routing module
and what you'll see is that the routing module calls upon the RouterModule and appends a child 
to the routes by invoking the static method 'forChild' and then passing in a route object.

In the top level rather than invoking 'forChild' you should invoke 'forRoot'.

After declaring and creating a routing module, import it into the feature module an then import
that into the main module. Your routes are now pulled in order.

Be careful about the order in which you include your routes because routing goes by first-match.

Here's the snippet from the Ng2 team regarding that strategy:

The order of the routes in the configuration matters and this is by design. 
The router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes. 
In our configuration above, the routes with a static path are listed first, followed by an empty path route, that matches as the default route. 
The wildcard route is listed last as it's the most generic route and should be matched only if no other routes are matched first.


And that is why I import the NotFoundModule at the very end on line 50.

Other notes: 
> in the index.html, the <base href="/"> establishes the root of the app - super important to include this.
> do not forget to include a <router-outlet> on any 'parent'; content is projected next to it not inside of it.
*/
var modules = [
  ToDoModule,
  MeowModule,
  LitterModule,
  SharedModule,
  AppRoutesModule,
  HomeModule,
  NavBarModule,
  AccountManagementModule
];

var _appModule = {
  imports: [
    ...modules,
    NotFoundModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent,
    ToDoModule,
    MeowModule
  ]
};

@NgModule({
  imports: [
    ...modules,
    NotFoundModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent,
    ToDoModule,
    MeowModule
  ]
})
export class AppModule {}

export var appModule = _appModule;

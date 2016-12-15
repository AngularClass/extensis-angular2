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

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
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
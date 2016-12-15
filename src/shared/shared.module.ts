import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ToDoService } from './todo.service';
import { FetchService } from './fetch.service';
import { Store } from './store.service';
import { ViewService } from './view.service';

var providers = [
  ToDoService,
  FetchService,
  Store,
  ViewService
];

var modules = [
  CommonModule,
  HttpModule,
  RouterModule,
  ReactiveFormsModule
  /*
    Be mindful of what forms module you're importing and what directives
    or functionalities you'll be using.
  */
];

var components = [];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule {
  static withProviders (): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers
    }
  }
}
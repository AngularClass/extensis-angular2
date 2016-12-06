import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meow } from './meow.component';

var components = [
  Meow
];

@NgModule({
  declarations: [ 
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class MeowModule {}
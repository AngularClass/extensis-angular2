import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { Meow } from './meow.component';

var components = [
  Meow
];

@NgModule({
  declarations: [ 
    ...components
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ...components
  ]
})
export class MeowModule {}
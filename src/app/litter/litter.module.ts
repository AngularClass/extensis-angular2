import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { LitterComponent } from './litter.component';
import { KittenDetailsComponent } from './kitten-details/kitten-details.component';



var components = [
  LitterComponent,
  KittenDetailsComponent
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
export class LitterModule {}
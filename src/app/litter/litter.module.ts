import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { LitterComponent } from './litter.component';
import { KittenDetailsComponent } from './kitten-details/kitten-details.component';
import { KittenGeneratorComponent } from './kitten-generator/kitten-generator.component';


var components = [
  LitterComponent,
  KittenDetailsComponent,
  KittenGeneratorComponent
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
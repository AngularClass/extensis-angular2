import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { NavBarComponent } from './navbar.component';

var components = [
  NavBarComponent
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
export class NavBarModule {}
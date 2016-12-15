import { NgModule } from '@angular/core';

import { NotFoundRoutesModule } from './not-found-routes.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    NotFoundRoutesModule
  ],
  exports: [],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule {}
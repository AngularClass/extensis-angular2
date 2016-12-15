import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { LitterService } from './litter.service';

import { LitterComponent } from './litter.component';
import { KittenDetailsComponent } from './kitten-details/kitten-details.component';
import { KittenGeneratorComponent } from './kitten-generator/kitten-generator.component';
import { KittenUpvoteComponent} from './kitten-generator/kitten-upvote.component';
import { LitterRoutesModule } from './litter-routes.module';

var components = [
  LitterComponent,
  KittenDetailsComponent,
  KittenGeneratorComponent,
  KittenUpvoteComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    SharedModule,
    LitterRoutesModule
  ],
  exports: [
    ...components
  ],
  providers: [
    LitterService
  ]
})
export class LitterModule {}
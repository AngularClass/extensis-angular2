import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LitterService } from './litter.service';

import { LitterComponent } from './litter.component';
import { KittenDetailsComponent } from './kitten-details/kitten-details.component';
import { KittenGeneratorComponent } from './kitten-generator/kitten-generator.component';
/*
A lot of this code belonged to main.browser.ts, but following the principle
of organizing things by domain I moved all things involving kittens to its own
module and that includes the routes as well. 

To prevent a user from accidentally hitting a different route when trying to generate
their own kitten, I have added a canDeactivate guard which triggers when the client tries to leave
the kittens route.

*/

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'kittens/generate',
        component: KittenGeneratorComponent,
        canDeactivate: [ LitterService ]
      },
      {
        path: 'kittens/:id',
        component: LitterComponent,
        canActivate: [ LitterService ],
        children: [
          {
            path: '',
            resolve: [ LitterService ],
            component: KittenDetailsComponent,
          }
        ]
      }
    ])
  ]
})
export class LitterRoutesModule { }

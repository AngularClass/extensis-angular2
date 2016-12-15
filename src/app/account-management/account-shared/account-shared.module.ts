import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

/*
  Some times you'll have sub-domains that are more or less isolated
  from the rest of the app such as a profile page. If you have services
  that are shared with the subdomain's components but not the main app then it might
  have a shared module and folder of its own.
*/

var modules = [
  SharedModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  declarations: []
})
export class AccountSharedModule {}
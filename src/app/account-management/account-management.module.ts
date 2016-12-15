import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { AccountSharedModule } from './account-shared/account-shared.module';
import { AccountManagementRoutes } from './account-management-routes.module';
import { AccountManagementComponent } from './account-management.component';

var modules = [
  AccountSharedModule,
  AccountManagementRoutes
];

var components = [
  AccountManagementComponent
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class AccountManagementModule {}
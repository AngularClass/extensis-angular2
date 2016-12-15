import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountManagementComponent } from './account-management.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'accounts',
        component: AccountManagementComponent
      }
    ])
  ]
})
export class AccountManagementRoutes {}
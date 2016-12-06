import { Component } from '@angular/core';
import { AccountManagementService } from './shared/account-management.service';
import { AccountStateService } from './shared/account-state.service';

@Component({
  selector: 'account-management',
  templateUrl: './account-management.component.html'
})
export class AccountManagementComponent {
  constructor( public ams: AccountManagementService, public accState: AccountStateService ) {
    
  }
}
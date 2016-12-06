import { Component } from '@angular/core';
import { AccountStateService } from '../shared/account-state.service';

@Component({
  selector: 'company-bar',
  templateUrl: 'company-bar.component.html'
})
export class CompanyBarComponent {
  constructor( public accState: AccountStateService ) {}

  toggleCompany( companyId: string ) {
   this.accState.setCurrentCompany(companyId);
  }
}
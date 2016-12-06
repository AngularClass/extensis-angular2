import { Injectable } from '@angular/core';

@Injectable()
export class AccountStateService {
  currentCompany = 'companyA';
  callbacks = [];

  getCurrentCompany () {
    return this.currentCompany;
  }

  subscribe ( cb ) {
    this.callbacks.push(cb);
  }

  emitChange ( companyId: string ) {
    this.callbacks.forEach(cb => cb(companyId));
  }

  setCurrentCompany ( companyId: string ) {
    this.currentCompany = companyId;

    this.emitChange(this.currentCompany);

    return this.getCurrentCompany();
  }

}
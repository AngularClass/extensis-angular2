import { Injectable } from '@angular/core';
import { AccountManagementFetchService } from './account-management-fetch.service';
import { Account } from './account-management.model';

const generateId = () => {
  return Math.random().toString(36).substr(1,8);
};


@Injectable()
export class AccountManagementService {
   masterList = [];
   companies = {
     companyA: [],
     companyB: []
   };

   constructor( public accountFetch: AccountManagementFetchService ) {
     accountFetch.get().forEach((dataSet: any) => {
       for(let person of dataSet) {
         this.masterList.push(new Account(person));
       }

       for(var company in this.companies) {
         this.companies[company] = [...this.masterList];
       }
     });
   }

   get ( companyId: any ) {
     return this.companies[companyId];
   }

   edit ( companyId: any, person: Account ) {
     this.companies[companyId][person.index] = person;
     return this.get(companyId);
   }

   add ( companyId: any, person: any) {
     person._id = generateId();
     person._index = this.companies[companyId].length - 1;

     this.companies[companyId].push(new Account(person)) 
     return this.get(companyId);
   }

   remove ( companyId: any, person: Account ) {
     this.companies[companyId] = this.companies[companyId].filter((account: Account)  => account._id !== person_id);
     return this.get(companyId);
   }
}
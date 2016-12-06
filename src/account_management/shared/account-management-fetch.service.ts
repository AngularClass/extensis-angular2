import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { data } from '../../data-json';

@Injectable()
export class AccountManagementFetchService {
  data: any;

  get() {
    // return Observable.from(data).delay(300);
    return data;
  }
}
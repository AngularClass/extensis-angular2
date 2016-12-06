import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class FetchService {

  constructor( public http: Http ) {}

  getRequest (): Observable<string[]> {
    return Observable.of([
      'Default task 1',
      'Default task 2',
      'Default task 3'
    ]).delay(300);
  }
}
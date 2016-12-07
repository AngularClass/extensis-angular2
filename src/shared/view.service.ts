import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

var _defaultViews = {
  meow: false
};

var _views = new BehaviorSubject(_defaultViews);

@Injectable()
export class ViewService {

  toggleView ( property ) {
    var newValue = Object.assign(
      {},
      _views.value, 
      {
        [property]: !_views.value[property]
      }
    );

    console.log('curr: ', _views.value);
    console.log('next: ', newValue);

    _views.next(newValue);
  }

  getChanges ( property ) {
    return _views.map(view => view[property]);
  }
}
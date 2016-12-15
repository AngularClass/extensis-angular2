import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '../../shared/store.service';

/*
CanActivate triggers whenever the client wishes to enter a specific route, CanDeactivate triggers
when the client attempts to leave the route.

More info here: https://angular.io/docs/ts/latest/guide/router.html#!#guards

I put all three router functions in this file rather than splitting them up for ease of reference.
CanDeactivate requires a type (most likely a target component) and normally that would be the case
since you would have these functions sit on a specific route. In this case, I opted to go with <any>
just to demonstrate something generic. So, in an actual app for example, you would write:

'implements CanDeactivate<TheComponentToGuard>'

The expected return type follows: Observable<boolean>|Promise<boolean>|boolean

*/

@Injectable()
export class LitterService implements Resolve<LitterService>, CanActivate, CanDeactivate<any> {
  constructor( public store: Store ) {

  }

  resolve ( route: ActivatedRouteSnapshot ) {
    var id = route.params['id'];
    var filter = this.store.get('litter').kittens
      .filter( cat => cat.id === Number(id) )[0];

    return Observable.of(filter);
  }

  canActivate ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    console.log('Activating : ', route, state);
    return true;
  }

  canDeactivate ( component: any ) {
    console.log('Deactivating : ', component);
    return window.confirm('O rly?');
  }
}
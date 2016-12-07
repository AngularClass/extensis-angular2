import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task, Litter, Kitten } from './models';

export interface AppState {
  todos: Task[],
  litter: Litter
};

var _defaultValue: AppState = {
  todos: [],
  litter: new Litter([
    new Kitten(1, 'bob'),
    new Kitten(2, 'fluffy'),
    new Kitten(3, 'stinky'),
    new Kitten(4, 'Von Fuzzypantsenstein'),
    new Kitten(5, 'Lisa')
  ])
};

var _store = new BehaviorSubject(_defaultValue);


@Injectable()
export class Store {
  changes = _store.asObservable().do(value => console.log('new state with value: ', value));

  setCurrentState ( state: any ) {
    _store.next(state);
  }

  getCurrentState () {
    return _store.value;
  }

  get ( property ) {
    return _store.value[property];
  }

  update ( property, value ) {
    var currentState = _store.value;
    currentState[property] = value;

    _store.next(currentState);
  }

}
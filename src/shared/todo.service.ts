import { Injectable } from '@angular/core';
import { FetchService } from './fetch.service';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Task, TaskList } from './models';
import { Store } from './store.service';


@Injectable()
export class ToDoService {
  
  constructor( public fetchService: FetchService, public store: Store ) {
    console.log('Creating ToDo Service.');
  }

  syncWithServer () {
    console.log('Starting to sync with server.');

    this.fetchService.getRequest()
    .subscribe(data => {
      console.log('Returned from server with state');
      var tasks = data.map((task)=> {
        return new Task( Math.random(), task);
      });

      this.store.update('todos', tasks);
    });
  }

  getChanges () {
    return this.store.changes
      .pluck<Task[]>('todos')
      //.filter(state => Boolean(state['todos']));
  }

  getCurrentTasks () {
    return this.store.get('todos');
  }

  createToDo ( task: string ) {
    var newTask = new Task(Math.random(), task);
    var currentTasks = this.store.get('todos');
    var newTasks = [...currentTasks, newTask ];

    this.store.update('todos', newTasks);
  }

  completeTask ( target: Task ) {
    var currentTasks = this.store.get('todos');
    var taskList = currentTasks.filter( task => task.id !== target.id);
    
    this.store.update('todos' , taskList);
  }
}


























    // .subscribe( data  => {
    //   this.taskList = data.map((task)=> {
    //     return new Task( Math.random(), task);
    //   });
    // });
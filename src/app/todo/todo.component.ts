import { Component } from '@angular/core';
import { ToDoService } from '../../shared/todo.service';
import { AppState } from '../../shared/store.service';
import { Task, TaskList } from '../../shared/models';

@Component({
  selector: 'my-todo',
  template: `
    <input type="text" placeholder="input a task"
      (input)="inputDetector($event.target.value)"
      [value]="task"
    >
    <button (click)="createToDo(task)"> Create </button>
    <ul>
      <li *ngFor="let item of taskList; let i = index"> 
        <my-task (completed)="completeTask($event)" [task]="item"></my-task>
      </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class MyToDoComponent {
  task: string = '';
  taskList: Task[] = [];
  subscription;
  // toggle = true;
  


  constructor ( public toDoService: ToDoService ) {
    this.toDoService.getChanges()
    .subscribe(data => {
      this.taskList = data;
    });
  }

  inputDetector ( value: string ) {
    this.task = value;
  }

  clearInputField () {
    this.task = '';
  }

  createToDo ( task: string ) {
    this.toDoService.createToDo(task);
    this.clearInputField();
  }

  completeTask ( task: Task ) {
    this.toDoService.completeTask(task);
    //this.taskList = this.todoservice.getCurrentTasks();
  }
}
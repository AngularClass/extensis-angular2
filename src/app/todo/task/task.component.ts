import { Input, Output, Component, EventEmitter } from '@angular/core';
import { Task } from '../../../shared/models';

@Component({
  selector: 'my-task',
  template: `
    <div *ngIf="task">
      {{ task.getShort() }} | {{ task.task }}
    </div>
    <button (click)="completeTask()"> Complete </button>
  `
})
export class MyTask {
  @Input() task: any
  @Output() completed = new EventEmitter();

  completeTask () {

    this.completed.emit(this.task);
  }
}
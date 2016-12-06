export class Task {
  id: number;
  task: string;

  constructor( id: number, task: string ) {
    this.id = id;
    this.task = task;
  }

  getShort () {
    return this.id.toString().substr(2,4);
  }
}

export class TaskList {
  tasks: Task[];

  constructor( taskArr: Task[] ) {
    this.tasks = taskArr;
  }
}
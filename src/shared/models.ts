export class Task {

  constructor( public id: number, public task: string ) {}

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

export class Kitten {
  constructor( public id: number, public name: string ) {}
}

export class Litter {
  constructor( public kittens: Kitten[] ) {

  }
}
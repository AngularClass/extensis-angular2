export class Account {
  _id: string;
  meta: any;
  index: any;

  constructor( params ) {
    this._id = params.id;
    this.index = params.index;
    this.meta = params;
  }
}
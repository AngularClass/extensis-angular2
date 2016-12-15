import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn  } from '@angular/forms';
import { checkId } from './kitten-generator.validator';


@Component({
  selector: 'kitten-generator',
  template: `
    Generates Kittens:
    <form  (ngSubmit)="funTimes()" [formGroup]="form" >
      Id:

      <input type="text" formControlName="bob" placeholder="Kitten Id">

      Name:
      <input type="text" formControlName="dave" placeholder="Kitten name goes here">

      <kitten-upvote [form]="form" formControlName="upvote"></kitten-upvote>
      <button [disabled]="pending || !form.valid"> Create a kitten! </button>
    </form>

  `
})
export class KittenGeneratorComponent {
  form: FormGroup;
  pending = false;

  constructor () {
    this.form = new FormGroup({
      bob: new FormControl('', [checkId, Validators.required]),
      dave: new FormControl('', Validators.required),
      upvote: new FormControl('')
    });

    this.form.valueChanges.subscribe(data => console.log(data, this.form));
  }

  funTimes () {
    this.pending = true;

    setTimeout(() => {
      this.pending = false;
    }, 1000);

    console.log(arguments);
  }
}
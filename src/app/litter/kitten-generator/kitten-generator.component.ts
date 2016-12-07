import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn  } from '@angular/forms';

var checkId: ValidatorFn = ( formControl ) => {

  if(formControl.value.length > 3) {
    return null;
  } 

  return {
    minLength: true
  };
};

@Component({
  selector: 'kitten-generator',
  template: `
    Generates Kittens:
    <form  (ngSubmit)="funTimes()" [formGroup]="form" >
      Id:

      <input type="text" formControlName="bob" placeholder="Kitten Id">

      Name:
      <input type="text" formControlName="dave" placeholder="Kitten name goes here">

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
      dave: new FormControl('', Validators.required)
    });

    this.form.valueChanges.subscribe(data => console.log(this.form));
  }

  funTimes () {
    this.pending = true;

    setTimeout(() => {
      this.pending = false;
    }, 1000);

    console.log(arguments);
  }
}
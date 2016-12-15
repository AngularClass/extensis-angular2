import { ValidatorFn, FormControl } from '@angular/forms';

export var checkId: ValidatorFn = ( formControl ) => {

  if(formControl.value.length > 3) {
    return null;
  } 

  return {
    minLength: true
  };
};
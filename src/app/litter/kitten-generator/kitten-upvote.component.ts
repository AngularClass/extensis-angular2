import { Input, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, ControlValueAccessor } from '@angular/forms';


/*
  We explored a little bit of Rxjs when we touched on forms. In a matter of fact,
  if you open up the kitten-generator.component, you can see that what helps govern the form controls
  is rxjs.
  
  How form controls communicate with the main body is by reading the value from inputs
  and then processing those values in its own internal service before emitting an event.
  However, these are only built into certain tags (almost all the input types).
  So, to cover the missing cases or custom cases you need to do the following:

  - Provide NG_VALUE_ACCESSOR to the component
    > This allows the component to emit changes to the form control
    > Since this is component based and not tag based, you may need extra logic.extra
  - Use ForwardRef
    > This tells the dependency injector to use a stand-in token. 
    > Since the form control needs to know what is going to report to it 
      and what controls are being attached and the component's creation time isn't guaranteed,
      it needs to know what to hook into.
    > Multi allows more than one to report into the service.
  - writeValue() {} and registerOnChange ( fn ) {}
    > ControlValueAccessor will call upon the registerOnChange function.
    > This gives the component a hook to call whenever a change dictated by your code logic happens. 
    > writeValue can be empty or can be used to assign a new value to the element (the selector).
  - A dummy function on the component.
    > This function gets overriden by registerOnChange via ControlValueAccessor
    > Call upon this dummy function whenever a change is made and it will report to whatever form is controlling this component.
  - registerOnTouched can be blank, it will tell the control whether it is dirty or pristine.

  https://angular.io/docs/ts/latest/api/forms/index/ControlValueAccessor-interface.html
*/



@Component({
  selector: 'kitten-upvote',
  template: `
    <button (click)="upvote()">  
      {{ count }}
    </button> 
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KittenUpvoteComponent),
      multi: true
    }
  ],
})
export class KittenUpvoteComponent implements ControlValueAccessor {
  count = 0;
  @Input() form: FormGroup;
  @Input() control;

  upvote() {
    this.count++;
    this.propagateChange(this.count);
  }

  writeValue () {}

  propagateChange( value: any) {}

  registerOnChange( fn ) {
    this.propagateChange = fn;
    console.log('register on Change ', fn);
  }

  registerOnTouched() {}
}

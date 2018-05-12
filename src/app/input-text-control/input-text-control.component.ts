import {Component, forwardRef, Input, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {GenericElementRef} from '../shared/common.types';

@Component({
  selector: 'input-text-control',
  templateUrl: './input-text-control.component.html',
  styleUrls: ['./input-text-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextControlComponent),
      multi: true
    }
  ]
})
export class InputTextControlComponent implements ControlValueAccessor {

  @Input() control: FormControl;

  @ViewChild('inputText') inputText: GenericElementRef<HTMLInputElement>;

  /**
   * Emit the defined event to form if called.
   * The defined event is visible in template.
   */
  onTouched(): void {}

  /**
   * Emit the defined event to form if called.
   * The defined event is visible in template.
   */
  onChange(value: string): void {}

  /**
   * The setValue() method of {@link FormControl}
   * calls this function where we can update the custom control.
   */
  writeValue(input: string): void {
    this.inputText.nativeElement.value = input;
  }

  /**
   * Run only by initializing. It defines which function
   * will emit the change event to the form.
   */
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  /**
   * Run only by initializing. It defines which function
   * will emit the change event to the form.
   */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * This function can be called from form with
   * disable() function of the {@link FormControl}.
   */
  setDisabledState(isDisabled: boolean): void {
    // do nothing
  }
}

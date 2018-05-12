import {Component, ElementRef, forwardRef, Input, Renderer2} from '@angular/core';
import {FormControl, NG_VALUE_ACCESSOR, SelectControlValueAccessor} from '@angular/forms';
import {SelectInput} from '../app.component';

@Component({
  selector: 'select-control',
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectControlComponent),
      multi: true
    }
  ]
})
/**
 * This is the most stupid thing you can do. PLEASE do not extend these
 * classes. These are used for template-driven form, so with ngModel.
 */
export class SelectControlComponent extends SelectControlValueAccessor {

  @Input() control: FormControl;
  @Input() values: Array<SelectInput>;

  /**
   * When selected data is changed, notify parent form via
   * {@link SelectControlValueAccessor}
   */
  onSelectChange(event: any): void {
    this.onChange(event.target.value);
  }

  /**
   * Notify parent form via {@link SelectControlValueAccessor}
   */
  onSelectBlur() {
    this.onTouched();
  }

  /**
   * Apply value coming from parent form
   */
  writeValue(valueFromParent: any) {
    this.value = valueFromParent;
  }

  constructor(_renderer2: Renderer2, _elementRef: ElementRef) {
    super(_renderer2, _elementRef);
  }

}

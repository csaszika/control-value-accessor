import {Component, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {GenericElementRef} from '../shared/common.types';

@Component({
  selector: 'id-generator',
  templateUrl: './id-generator.component.html',
  styleUrls: ['./id-generator.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IdGeneratorComponent),
      multi: true
    }
  ]
})
export class IdGeneratorComponent implements ControlValueAccessor {

  @Input() control: FormControl;

  @ViewChild('guid1') guid1: GenericElementRef<HTMLInputElement>;
  @ViewChild('guid2') guid2: GenericElementRef<HTMLInputElement>;
  @ViewChild('guid3') guid3: GenericElementRef<HTMLInputElement>;
  @ViewChild('guid4') guid4: GenericElementRef<HTMLInputElement>;

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  onChange(value: string): void {}

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onTouched(): void {}

  writeValue(obj: string): void {
    const guidFromParent = obj.split('-');
    this.guid1.nativeElement.value = guidFromParent[0];
    this.guid2.nativeElement.value = guidFromParent[1] || '';
    this.guid3.nativeElement.value = guidFromParent[2] || '';
    this.guid4.nativeElement.value = guidFromParent[3] || '';
  }

  onGuidChange() {
    const value = this.guid1.nativeElement.value
      .concat('-')
      .concat(this.guid2.nativeElement.value)
      .concat('-')
      .concat(this.guid3.nativeElement.value)
      .concat('-')
      .concat(this.guid4.nativeElement.value);
    this.onChange(value);
  }

  updateFocus(event) {
    if (event.target.value.length === 4) {
      event.srcElement.nextElementSibling.focus();
    }
  }
}

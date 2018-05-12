import {Component, OnInit} from '@angular/core';
import {AppForm} from './app.form';

export interface SelectInput {
  id: number;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: AppForm;
  selectInputs: Array<SelectInput> = [
    {
      id: 1,
      description: 'Laika'
    },
    {
      id: 2,
      description: 'Atlantis'
    },
    {
      id: 3,
      description: 'Discovery'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.form = new AppForm();

    this.form.valueChanges.subscribe(() => console.log(this.form));
  }

  setInputTextValue(): void {
    console.log('setInputTextValue');
    this.form.controls.inputText.setValue('kutyuli');
  }

  setSelectValue(): void {
    console.log('setSelectValue');
    this.form.controls.select.setValue('3');
  }

}

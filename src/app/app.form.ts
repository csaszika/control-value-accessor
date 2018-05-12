import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppValidator} from './app.validator';

export class AppForm extends FormGroup {

  constructor() {
    super({
      inputText: new FormControl('', [
        Validators.required, Validators.maxLength(10)
      ]),
      select: new FormControl('', [Validators.required]),
      id: new FormControl('', [AppValidator.guidValidator]),
      photos: new FormArray([])
    });
  }

}

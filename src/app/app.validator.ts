import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class AppValidator {

  static photoValidator(): ValidatorFn {
    return  (control: AbstractControl): {[key: string]: boolean} | null => {
      if (control.value.length > 2) {
        return {toMuchItems: true};
      }
      return null;
    };
  }


  static guidValidator(control: FormControl): ValidationErrors | null {
    const guidRegex = new RegExp('^[0-9]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9]{4}$');
    const guid = control.value.toString();
    if (guidRegex.test(guid)) {
      console.log('valid');
      return null;
    }
    return {invalidGuid: true};
  }
}

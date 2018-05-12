import {Component, Input} from '@angular/core';
import {AbstractControl, FormArray, FormControl, ValidatorFn} from '@angular/forms';

export interface Photo{
  src: string;
  fileName: string;
}

@Component({
  selector: 'photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent {

  @Input() validator: Function;
  @Input() photosArray: FormArray;

  addNewPhoto(newPhoto: Photo): void {
    this.photosArray.push(new FormControl(newPhoto, PhotoCardComponent.photoValidator()));
  }

  removePhoto(index: number): void {
    this.photosArray.removeAt(index);
  }

  static photoValidator(): ValidatorFn {
    return  (control: AbstractControl): {[key: string]: boolean} | null => {
      const fileName = (control.value as Photo).fileName;
      if (fileName.length > 10) {
        return {maxLength: true};
      }
      return null;
    };
  }
}

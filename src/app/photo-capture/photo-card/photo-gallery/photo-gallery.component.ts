import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormArray} from '@angular/forms';
import {galleryItemInOut} from '../../../shared/animations/photo.animations';

@Component({
  selector: 'photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
  animations: [galleryItemInOut]
})
export class PhotoGalleryComponent {

  @Input() photos: FormArray;

  @Output() removeItem: EventEmitter<number> = new EventEmitter<number>();

  removeGalleryItem(index: number) {
    this.removeItem.emit(index);
  }

  updateForm(index: number, newFileName: string) {
    const item = this.photos.at(index);
    item.setValue({...item.value, fileName: newFileName})
  }
}

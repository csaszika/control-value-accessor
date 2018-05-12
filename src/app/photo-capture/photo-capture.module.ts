import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { PhotoMakerComponent } from './photo-card/photo-maker/photo-maker.component';
import { PhotoGalleryComponent } from './photo-card/photo-gallery/photo-gallery.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[PhotoCardComponent],
  declarations: [PhotoCardComponent, PhotoMakerComponent, PhotoGalleryComponent]
})
export class PhotoCaptureModule { }

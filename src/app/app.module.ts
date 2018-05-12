import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { InputTextControlComponent } from './input-text-control/input-text-control.component';
import { SelectControlComponent } from './select-control/select-control.component';
import { FormControlStatusReporterComponent } from './form-control-status-reporter/form-control-status-reporter.component';
import {PhotoCaptureModule} from './photo-capture/photo-capture.module';
import { IdGeneratorComponent } from './id-generator/id-generator.component';


@NgModule({
  declarations: [
    AppComponent,
    InputTextControlComponent,
    SelectControlComponent,
    FormControlStatusReporterComponent,
    IdGeneratorComponent
  ],
  imports: [
    BrowserModule,
    PhotoCaptureModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

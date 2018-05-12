import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'form-control-status-reporter',
  templateUrl: './form-control-status-reporter.component.html',
  styleUrls: ['./form-control-status-reporter.component.css']
})
export class FormControlStatusReporterComponent {

  @Input() control: FormControl;
  @Input() controlName: string;

}

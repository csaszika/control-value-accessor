import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlStatusReporterComponent } from './form-control-status-reporter.component';

describe('FormControlStatusReporterComponent', () => {
  let component: FormControlStatusReporterComponent;
  let fixture: ComponentFixture<FormControlStatusReporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlStatusReporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlStatusReporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

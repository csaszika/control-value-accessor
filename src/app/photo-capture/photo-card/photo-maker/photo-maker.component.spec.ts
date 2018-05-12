import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoMakerComponent } from './photo-maker.component';

describe('PhotoMakerComponent', () => {
  let component: PhotoMakerComponent;
  let fixture: ComponentFixture<PhotoMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

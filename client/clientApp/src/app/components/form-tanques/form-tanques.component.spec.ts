import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTanquesComponent } from './form-tanques.component';

describe('FormTanquesComponent', () => {
  let component: FormTanquesComponent;
  let fixture: ComponentFixture<FormTanquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTanquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTanquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

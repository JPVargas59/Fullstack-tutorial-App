import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTanquesComponent } from './lista-tanques.component';

describe('ListaTanquesComponent', () => {
  let component: ListaTanquesComponent;
  let fixture: ComponentFixture<ListaTanquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTanquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTanquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

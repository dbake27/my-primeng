import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicedropdownComponent } from './invoicedropdown.component';

describe('InvoicedropdownComponent', () => {
  let component: InvoicedropdownComponent;
  let fixture: ComponentFixture<InvoicedropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicedropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicedropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

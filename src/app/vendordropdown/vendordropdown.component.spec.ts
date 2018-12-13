import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendordropdownComponent } from './vendordropdown.component';

describe('VendordropdownComponent', () => {
  let component: VendordropdownComponent;
  let fixture: ComponentFixture<VendordropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendordropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendordropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

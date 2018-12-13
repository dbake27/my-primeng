import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherdropdownComponent } from './voucherdropdown.component';

describe('VoucherdropdownComponent', () => {
  let component: VoucherdropdownComponent;
  let fixture: ComponentFixture<VoucherdropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherdropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

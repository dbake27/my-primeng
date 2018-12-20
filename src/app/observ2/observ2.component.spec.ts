import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observ2Component } from './observ2.component';

describe('Observ2Component', () => {
  let component: Observ2Component;
  let fixture: ComponentFixture<Observ2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Observ2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Observ2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

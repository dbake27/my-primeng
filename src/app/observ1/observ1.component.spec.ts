import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observ1Component } from './observ1.component';

describe('Observ1Component', () => {
  let component: Observ1Component;
  let fixture: ComponentFixture<Observ1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Observ1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Observ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

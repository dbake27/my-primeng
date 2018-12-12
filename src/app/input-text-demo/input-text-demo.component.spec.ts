import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextDemoComponent } from './input-text-demo.component';

describe('InputTextDemoComponent', () => {
  let component: InputTextDemoComponent;
  let fixture: ComponentFixture<InputTextDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

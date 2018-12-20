import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestobservComponent } from './testobserv.component';

describe('TestobservComponent', () => {
  let component: TestobservComponent;
  let fixture: ComponentFixture<TestobservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestobservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestobservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

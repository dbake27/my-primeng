import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodropdownComponent } from './podropdown.component';

describe('PodropdownComponent', () => {
  let component: PodropdownComponent;
  let fixture: ComponentFixture<PodropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IddropdownComponent } from './iddropdown.component';

describe('IddropdownComponent', () => {
  let component: IddropdownComponent;
  let fixture: ComponentFixture<IddropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IddropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IddropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

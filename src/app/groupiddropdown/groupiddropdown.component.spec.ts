import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupiddropdownComponent } from './groupiddropdown.component';

describe('GroupiddropdownComponent', () => {
  let component: GroupiddropdownComponent;
  let fixture: ComponentFixture<GroupiddropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupiddropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupiddropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

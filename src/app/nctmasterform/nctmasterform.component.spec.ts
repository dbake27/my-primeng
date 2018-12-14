import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NctmasterformComponent } from './nctmasterform.component';

describe('NctmasterformComponent', () => {
  let component: NctmasterformComponent;
  let fixture: ComponentFixture<NctmasterformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NctmasterformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NctmasterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

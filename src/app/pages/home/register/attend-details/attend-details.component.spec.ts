import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendDetailsComponent } from './attend-details.component';

describe('AttendDetailsComponent', () => {
  let component: AttendDetailsComponent;
  let fixture: ComponentFixture<AttendDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

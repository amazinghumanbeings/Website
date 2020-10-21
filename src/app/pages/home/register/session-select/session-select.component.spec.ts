import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionSelectComponent } from './session-select.component';

describe('SessionSelectComponent', () => {
  let component: SessionSelectComponent;
  let fixture: ComponentFixture<SessionSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberStoryComponent } from './number-story.component';

describe('NumberStoryComponent', () => {
  let component: NumberStoryComponent;
  let fixture: ComponentFixture<NumberStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

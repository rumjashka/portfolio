import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTwoComponent } from './text-two.component';

describe('TextTwoComponent', () => {
  let component: TextTwoComponent;
  let fixture: ComponentFixture<TextTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WOneComponent } from './w-one.component';

describe('WOneComponent', () => {
  let component: WOneComponent;
  let fixture: ComponentFixture<WOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

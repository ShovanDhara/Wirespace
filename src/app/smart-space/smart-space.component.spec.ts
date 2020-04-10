import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSpaceComponent } from './smart-space.component';

describe('SmartSpaceComponent', () => {
  let component: SmartSpaceComponent;
  let fixture: ComponentFixture<SmartSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

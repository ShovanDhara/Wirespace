import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatUberficationComponent } from './seat-uberfication.component';

describe('SeatUberficationComponent', () => {
  let component: SeatUberficationComponent;
  let fixture: ComponentFixture<SeatUberficationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatUberficationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatUberficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

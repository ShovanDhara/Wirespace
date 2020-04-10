import { TestBed, inject } from '@angular/core/testing';

import { SeatUberficationService } from './seat-uberfication.service';

describe('SeatUberficationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeatUberficationService]
    });
  });

  it('should be created', inject([SeatUberficationService], (service: SeatUberficationService) => {
    expect(service).toBeTruthy();
  }));
});

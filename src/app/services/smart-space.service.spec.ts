import { TestBed, inject } from '@angular/core/testing';

import { SmartSpaceService } from './smart-space.service';

describe('SmartSpaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartSpaceService]
    });
  });

  it('should be created', inject([SmartSpaceService], (service: SmartSpaceService) => {
    expect(service).toBeTruthy();
  }));
});

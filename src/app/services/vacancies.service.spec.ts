import { TestBed, inject } from '@angular/core/testing';

import { VacanciesService } from './vacancies.service';

describe('VacanciesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VacanciesService]
    });
  });

  it('should be created', inject([VacanciesService], (service: VacanciesService) => {
    expect(service).toBeTruthy();
  }));
});

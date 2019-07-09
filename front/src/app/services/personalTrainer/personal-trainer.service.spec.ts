import { TestBed } from '@angular/core/testing';

import { PersonalTrainerService } from './personal-trainer.service';

describe('PersonalTrainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalTrainerService = TestBed.get(PersonalTrainerService);
    expect(service).toBeTruthy();
  });
});

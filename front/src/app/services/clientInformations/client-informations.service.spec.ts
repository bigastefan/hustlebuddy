import { TestBed } from '@angular/core/testing';

import { ClientInformationsService } from './client-informations.service';

describe('ClientInformationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientInformationsService = TestBed.get(ClientInformationsService);
    expect(service).toBeTruthy();
  });
});

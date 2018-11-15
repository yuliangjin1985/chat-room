import { TestBed } from '@angular/core/testing';

import { RegiterService } from './regiter.service';

describe('RegiterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegiterService = TestBed.get(RegiterService);
    expect(service).toBeTruthy();
  });
});

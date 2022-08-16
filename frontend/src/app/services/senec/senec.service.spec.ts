import { TestBed } from '@angular/core/testing';

import { SenecService } from './senec.service';

describe('SenecService', () => {
  let service: SenecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { IRAService } from './ira.service';

describe('IRAService', () => {
  let service: IRAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IRAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

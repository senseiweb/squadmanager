import { TestBed, inject } from '@angular/core/testing';

import { DomUtilService } from './dom-util.service';

describe('DomUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomUtilService]
    });
  });

  it('should be created', inject([DomUtilService], (service: DomUtilService) => {
    expect(service).toBeTruthy();
  }));
});

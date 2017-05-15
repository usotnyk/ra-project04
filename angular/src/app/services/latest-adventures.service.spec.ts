import { TestBed, inject } from '@angular/core/testing';

import { LatestAdventuresService } from './latest-adventures.service';

describe('LatestAdventuresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LatestAdventuresService]
    });
  });

  it('should ...', inject([LatestAdventuresService], (service: LatestAdventuresService) => {
    expect(service).toBeTruthy();
  }));
});

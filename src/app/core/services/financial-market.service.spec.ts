import { TestBed } from '@angular/core/testing';

import { FinancialMarketService } from './financial-market.service';

describe('FinancialMarketService', () => {
  let service: FinancialMarketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialMarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

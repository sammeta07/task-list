import { TestBed } from '@angular/core/testing';

import { ChartCheckGuard } from './chart-check.guard';

describe('ChartCheckGuard', () => {
  let guard: ChartCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChartCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

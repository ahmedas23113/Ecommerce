import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { usersserviceGuard } from './usersservice.guard';

describe('usersserviceGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => usersserviceGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

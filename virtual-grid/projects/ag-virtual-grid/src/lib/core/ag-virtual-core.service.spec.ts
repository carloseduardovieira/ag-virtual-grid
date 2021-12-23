import { TestBed } from '@angular/core/testing';

import { AgVirtualCoreService } from './ag-virtual-core.service';

describe('AgVirtualCoreService', () => {
  let service: AgVirtualCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgVirtualCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

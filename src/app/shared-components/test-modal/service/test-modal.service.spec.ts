import { TestBed } from '@angular/core/testing';

import { TestModalService } from './test-modal.service';

describe('TestModalService', () => {
  let service: TestModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

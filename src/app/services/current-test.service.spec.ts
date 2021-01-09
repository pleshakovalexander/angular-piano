import { TestBed } from '@angular/core/testing';

import { CurrentTestService } from './current-test.service';

describe('CurrentTestService', () => {
  let service: CurrentTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

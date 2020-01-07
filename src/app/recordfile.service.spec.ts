import { TestBed } from '@angular/core/testing';

import { RecordfileService } from './recordfile.service';

describe('RecordfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordfileService = TestBed.get(RecordfileService);
    expect(service).toBeTruthy();
  });
});

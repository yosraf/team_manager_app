import { TestBed } from '@angular/core/testing';

import { TaskDevService } from './task-dev.service';

describe('TaskDevService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskDevService = TestBed.get(TaskDevService);
    expect(service).toBeTruthy();
  });
});

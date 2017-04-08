import { TestBed, inject } from '@angular/core/testing';

import { AssignmentSubmissionService } from './assignment-submission.service';

describe('AssignmentSubmissionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignmentSubmissionService]
    });
  });

  it('should ...', inject([AssignmentSubmissionService], (service: AssignmentSubmissionService) => {
    expect(service).toBeTruthy();
  }));
});

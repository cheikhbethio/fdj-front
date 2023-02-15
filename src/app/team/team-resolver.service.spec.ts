import { TestBed } from '@angular/core/testing';

import { TeamResolverService } from './team-resolver.service';

describe('TeamResolverService', () => {
  let service: TeamResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

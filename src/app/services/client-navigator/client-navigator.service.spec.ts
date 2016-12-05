import { TestBed, async, inject } from '@angular/core/testing';
import { ClientNavigatorService } from './client-navigator.service';

describe('ClientNavigatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientNavigatorService]
    });
  });

  it('should ...', inject([ClientNavigatorService], (service: ClientNavigatorService) => {
    expect(service).toBeTruthy();
  }));
});

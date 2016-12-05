import { TestBed, async, inject } from '@angular/core/testing';
import {FloodService} from "app/services/flood.service";

describe('FloodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FloodService]
    });
  });

  it('should ...', inject([FloodService], (service: FloodService) => {
    expect(service).toBeTruthy();
  }));
});

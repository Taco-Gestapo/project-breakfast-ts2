import {TestBed, async, inject} from '@angular/core/testing';
import {Logger} from 'angular2-log4ts/src/app/core';
import {ClientWindowService} from './client-window.service';

describe('Service: ClientWindow', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Logger, ClientWindowService]
    }).compileComponents();
  });

  it('should ...', inject([ClientWindowService], (service: ClientWindowService) => {
    expect(service).toBeTruthy();
  }));
});

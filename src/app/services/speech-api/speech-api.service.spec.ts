import {TestBed, async, inject} from '@angular/core/testing';
import {Logger} from 'angular2-log4ts/src/app/core';
import { SpeechApiService } from './speech-api.service';
import {ClientWindowService} from "app/services/client-window/client-window.service";


describe('Service: SpeechApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Logger, ClientWindowService, SpeechApiService]
    }).compileComponents();
  });

  it('should inject SpeechApiService', inject([SpeechApiService], (service: SpeechApiService) => {
    expect(service).toBeTruthy();
  }));
});

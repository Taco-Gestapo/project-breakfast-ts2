import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import {Logger} from 'angular2-log4ts/src/app/core';
import {SpeechComponent} from './speech.component';
import {ClientWindowService} from "app/services/client-window/client-window.service";
import {SpeechApiService} from "app/services/speech-api/speech-api.service";

describe('Test SpeechComponent', () => {
  let component: SpeechComponent;
  let fixture: ComponentFixture<SpeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpeechComponent],
      providers: [Logger, ClientWindowService, SpeechApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

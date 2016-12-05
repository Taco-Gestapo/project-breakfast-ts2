import {Component, OnInit} from '@angular/core';
import {Logger} from 'angular2-log4ts/src/app/core';
import {SpeechApiService} from "app/services/speech-api/speech-api.service";
import {ClientWindowService} from "app/services/client-window/client-window.service";

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss']
})
export class SpeechComponent implements OnInit {

  constructor(private _logger: Logger,
              private _speechApiService: SpeechApiService,
              private _clientWindowService: ClientWindowService
  ) {
    // do nothing
  }

  ngOnInit() {
    if (this.isSpeechCapableClient()) {
      let agents = this._clientWindowService.getNativeWindow().navigator.userAgent.split(' ');
      let welcomeMessage: string = 'Welcome Browser Speech Activated, ' + agents[0] + ', ' + agents[1] + ', ' + agents[2];
      this._speechApiService.utter(welcomeMessage, {
        "lang": "en-US",
        "rate": "1.6"
      });
      if (this._logger.isDebugEnabled()) {
        this._logger.debug('Success: Speech Component initialized.')
      }
    }
  }

  public isSpeechCapableClient(): boolean {
    let client: Window = this._clientWindowService.getNativeWindow();
    return 'SpeechSynthesisUtterance' in client;
  }
}

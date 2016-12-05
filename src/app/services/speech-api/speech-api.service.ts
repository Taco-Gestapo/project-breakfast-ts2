import {Injectable} from '@angular/core';
import {Logger} from 'angular2-log4ts/src/app/core';
import {ClientWindowService} from "app/services/client-window/client-window.service";

@Injectable()
export class SpeechApiService {

  constructor(private _logger: Logger,
              private clientWindowService: ClientWindowService) {
    //do nothing
  }

  public utter(verbals: string, params: any): void {
    let client: Window = this.clientWindowService.getNativeWindow();
    //only attempt utterance if client is speech enabled
    if ('SpeechSynthesisUtterance' in client) {
      //bootstrap the tts
      let utterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance();
      utterance.text = verbals;
      utterance.lang = params.lang;
      utterance.rate = params.rate;
      let instance: SpeechApiService = this;
      utterance.onend = function (event: SpeechSynthesisEvent) {
        instance._logger.debug('Utterance Finished in ' + event.elapsedTime / 1000000000 + ' seconds. At time '
          + new Date(event.timeStamp).toLocaleString());
      };
      speechSynthesis.speak(utterance);
    }
  }
}

import {Injectable} from '@angular/core';
import {Logger} from 'angular2-log4ts/src/app/core';

@Injectable()
export class ClientWindowService {

  private static _INSTANCE: ClientWindowService;

  constructor(private _logger: Logger) {
    // do inits
    ClientWindowService._INSTANCE = this;
  }

  private _window() : Window {
  // return the global native browser window object
  return window;
}

  public getNativeWindow() : Window {
    let fenestration: Window = this._window();
    if (this._logger.isDebugEnabled()) {
      // this._logger.debug('ClientWindowService.nativeWindow():', fenestration); //DO NOT REMOVE, IT WILL BE USEFUL LATER
    }
    return fenestration;
  }

  public static getInstance(): ClientWindowService {
    if (ClientWindowService._INSTANCE == null) {
      //ok, the app has not bootstrapped entirely, but don't worry, we'll just try again in 1/2 second
      setTimeout(this, 500);
      if (ClientWindowService._INSTANCE == null) {
        //there ought to be a singleton instance kicking around by now surely?
        //but there isn't
        //therefore, it's time to explode
        throw Error('Something impossible has happened, guzzle 1 beer, take a 10 minute break.');
      }
    }
    return ClientWindowService._INSTANCE;
  }
}

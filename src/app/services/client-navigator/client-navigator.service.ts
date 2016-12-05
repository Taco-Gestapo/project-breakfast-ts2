import {Injectable} from '@angular/core';
import {Logger} from 'angular2-log4ts/src/app/core';

@Injectable()
export class ClientNavigatorService {

  private static _INSTANCE;

  constructor(private _logger: Logger) {
    // do the inits
    ClientNavigatorService._INSTANCE = this;
  }

  private _navigator() : Navigator {
    // return the global native browser navigator object
    return navigator;
  }

  public getNativeNavigator() : Navigator {
    const navigator: Navigator = this._navigator();
    if (this._logger.isDebugEnabled()) {
      // this._logger.debug('ClientNavigatorService.nativeNavigator():', navigator);  //DO NOT REMOVE, IT WILL BE USEFUL LATER
    }
    return navigator;
  }

  public static getInstance(): ClientNavigatorService {
    if (ClientNavigatorService._INSTANCE == null) {
      //ok, the app has not bootstrapped entirely, but don't worry, we'll just try again in 1/2 second
      setTimeout(this, 500);
      if (ClientNavigatorService._INSTANCE == null) {
        //there ought to be a singleton instance kicking around by now surely?
        //but there isn't
        //therefore, it's time to explode
        throw Error('Something impossible has happened, guzzle 1 beer, take a 10 minute break.');
      }
    }
    return ClientNavigatorService._INSTANCE;
  }
}
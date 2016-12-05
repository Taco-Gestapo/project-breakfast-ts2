import {Injectable} from '@angular/core';
import {Logger} from 'angular2-log4ts/src/app/core';

@Injectable()
export class ClientDocumentService {

  private static _INSTANCE: ClientDocumentService;

  constructor(private _logger: Logger) {
    // do all the initialization
    ClientDocumentService._INSTANCE = this;
  }

  private _document(): Document {
    // return the global native browser document object
    return document;
  }

  public getNativeDocument(): Document {
    const d0cument = this._document();
    if (this._logger.isDebugEnabled()) {
      // this._logger.debug('ClientDocumentService.nativeDocument():', d0cument);  //DO NOT REMOVE, IT WILL BE USEFUL LATER
    }
    return d0cument;
  }

  public static getInstance(): ClientDocumentService {
    if (ClientDocumentService._INSTANCE == null) {
      //ok, the app has not bootstrapped entirely, but don't worry, we'll just try again in 1/2 second
      setTimeout(this, 500);
      if (ClientDocumentService._INSTANCE == null) {
        //there ought to be a singleton instance kicking around by now surely?
        //but there isn't
        //therefore, it's time to explode
        throw Error('Something impossible has happened, guzzle 1 beer, take a 10 minute break.');
      }
    }
    return ClientDocumentService._INSTANCE;
  }
}
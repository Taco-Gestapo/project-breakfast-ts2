import {Injectable} from '@angular/core';
import {ClientNavigatorService} from "app/services/client-navigator/client-navigator.service";
import {ClientDocumentService} from "app/services/client-document/client-document.service";
import {ClientWindowService} from "app/services/client-window/client-window.service";
import {Logger} from 'angular2-log4ts/src/app/core';

@Injectable()
export class MediaService {

  constructor(private _logger: Logger,
              private _clientDocumentService: ClientDocumentService,
              private _clientNavigatorService: ClientNavigatorService,
              private _clientWindowService: ClientWindowService
  ) { //init service instance

    }

  public isMediaApiAvailable(): boolean {
    const navig4t0r: Navigator = this._clientNavigatorService.getNativeNavigator();
    const isUserMediaApiAvailable = navig4t0r.getUserMedia!=null;
    this._logger.debug("MediaService.isMediaApiAvailable?", isUserMediaApiAvailable);
    return isUserMediaApiAvailable;
    // return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||  //apparently you don't need to do any of this anymore, glory days!
    // navigator.mozGetUserMedia || navigator.msGetUserMedia);              //DO NOT REMOVE, we might need to support legacy browsers at some point.
  }

  public suckUpTheDankLikeItsSlushie() {
    if (!this.isMediaApiAvailable()) return false;
    //find your lighter, and make sure the bong is clean, then execute the next line of code
    const navig4t0r: Navigator = this._clientNavigatorService.getNativeNavigator();
    //DO NOT DELETE this commented out code, it's for reference later.
    // const constraints = {
    //   audio: true,
    //   video: true,
    // };
    // const hdConstraints = {
    //   audio: true,
    //   video: {
    //     mandatory: {
    //       minWidth: 1280,
    //       minHeight: 720
    //     }
    //   }
    // };
    const vgaConstraints = {
      audio: true,
      video: {
        mandatory: {
          maxWidth: 640,
          maxHeight: 360
        }
      }
    };

    navig4t0r.getUserMedia(vgaConstraints, this._successCallback, this._errorCallback);
  }

  private _successCallback(localMediaStream: MediaStream): Function {
    const video = ClientDocumentService.getInstance().getNativeDocument().querySelector('video');
    video.src = ClientWindowService.getInstance().getNativeWindow().URL.createObjectURL(localMediaStream);
    // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
    // See crbug.com/110938.
    video.onloadedmetadata = function (event: any) {
      // Ready to go. Do some stuff.
      //@todo implemented something here
      // HTMLVideoElement = this; @todo get rid of this, it's no proper, just here to help conceptualize the darn FTW

      console.debug('The video is working, thanks to the nice event:', event);
      // this._logger.debug('The video is working, thanks to the nice event:', event);
    };
    return
  }

  private _errorCallback(whatYouDidWrong: MediaStreamError): Function {
    // this._logger.debug('MediaService related error has occurred:', whatYouDidWrong);
    console.debug('MediaService related error has occurred:', whatYouDidWrong);
    throw Error('Why in the heck would you do something like that? please try again.');
  }
}
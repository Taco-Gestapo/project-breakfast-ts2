import { Component, OnInit } from '@angular/core';
import {MediaService} from "app/services/audio-video-capture/media.service";
import {Logger} from 'angular2-log4ts/src/app/core';

@Component({
  selector: 'app-audio-video',
  templateUrl: './audio-video.component.html',
  styleUrls: ['./audio-video.component.scss']
})
export class AudioVideoComponent implements OnInit {

  constructor(private _logger: Logger, private _mediaService: MediaService) { }

  ngOnInit() {
    if (this.isMediaApiAvailable()) {
      //start sucking all media inputs on the client
      const nowWeGotU: boolean = this._mediaService.suckUpTheDankLikeItsSlushie();
      this._logger.debug('AudioVideoComponent, is the user looking in the mirror?', nowWeGotU);
    }
  }

  public isMediaApiAvailable(): boolean {
    return this._mediaService.isMediaApiAvailable();
  }

}

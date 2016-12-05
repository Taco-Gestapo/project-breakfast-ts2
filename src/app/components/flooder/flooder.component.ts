import {Component, OnInit} from '@angular/core';
import {Logger} from 'angular2-log4ts/src/app/core';
import {FloodService} from "app/services/flood/flood.service";

@Component({
  selector: 'app-flooder',
  templateUrl: './flooder.component.html',
  styleUrls: ['./flooder.component.css']
})
export class FlooderComponent implements OnInit {

  constructor(private _logger: Logger, private _floodService: FloodService) {
    //do nothing
  }

  ngOnInit() {
    if (this._logger.isDebugEnabled) {
      this._logger.debug('FlooderComponent: Initiating flood now.');
    }
    this._floodService.attack();
    if (this._logger.isDebugEnabled) {
      this._logger.debug('FlooderComponent: Flood is ongoing. Close your browser tab to terminate the flood.');
    }
  }

}

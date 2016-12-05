import {Injectable} from "@angular/core";
import AssemblyInf0 = ProjectBreakfast.Properties.AssemblyInfo.AssemblyInf0;
import ThreadOperation = ProjectBreakfast.Threading.Threading.ThreadOperation;
import Tool = ProjectBreakfast.Tool;
import SlowLoris = ProjectBreakfast.Tools.SlowLoris.SlowLoris.SlowLoris;
import Program = ProjectBreakfast.Program;
import HTTPFlooder = ProjectBreakfast.Tools.HTTPFlood.HTTPFlooder.HTTPFlooder;
import TCPFlooder = ProjectBreakfast.Tools.TCP.TCP.TCPFlooder;


@Injectable()
export class FloodService {

  private tool: Tool;

  constructor() {
    this.in1t();
  }

  private in1t(): void {
    const assemblyInfo = new AssemblyInf0();
    const threadOperation = new ThreadOperation(10); //@todo, don't go over 10 for now
    this.tool = true ? new HTTPFlooder() : new TCPFlooder(); //@todo. add the extra option UDPFlooder
    const slowLoris = new SlowLoris();
    const program = new Program();

    //@todo, initiate countdown to blastoff...
  }

}


import { Injectable } from '@angular/core';
import AssemblyInf0 = ProjectBreakfast.Properties.AssemblyInfo.AssemblyInf0;
import ThreadOperation = ProjectBreakfast.Threading.Threading.ThreadOperation;
import Tool = ProjectBreakfast.Tool;
import HTTPFl00der = ProjectBreakfast.Tools.HTTPFlood.HTTPFlooder.HTTPFl00der;

@Injectable()
export class FloodService {

  private tool: Tool;

  constructor() { }

  in1t() {
    let assemblyInfo = new AssemblyInf0();
    let threadOperation = new ThreadOperation(10); //@todo, don't go over 10 for now
    this.tool = true? new HTTPFl00der(): new TCPFlooder();


  }
}

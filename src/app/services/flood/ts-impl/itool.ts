/**
 * Created by jonwilliams on 2016-12-04.
 */
namespace ProjectBreakfast {

  export module ProjectBreakfast {

    //do not reference ITool, use the Tool interface always
    //Deprecated, not part of the public API, please do not use this.
    export interface ITool {
      /// <summary>
      /// Sets up the tool
      /// </summary>
      /// <param name="target">The targets IP address</param>
      /// <param name="port">The targets port</param>
      /// <param name="connections">Amount of connections that should be connected to the target. Can also be used as amount of packets</param>
      /// <param name="timeout">The maximum time the tool is allowed to run. When the timeout is done, the tool would stop running</param>
      Init(target: String, port: Number, connections: Number, timeout: Number): void;

      /// <summary>
      /// Starts the tool
      /// </summary>
      Start(): void;

      /// <summary>
      /// Gets a bool on whether the tool is timed out and should be terminated
      /// </summary>
      IsTimedOut(): boolean;

      /// <summary>
      /// Aborts the tools run-time
      /// </summary>
      Abort(): void;

      /// <summary>
      /// Gets the status to the console when it is cycled each 100ms from the GUI thread
      /// </summary>
      /// <returns>Returns a string that shall be written to the console of the tools state</returns>
      GetStatus(): void;
    }
  }

  import ITool = ProjectBreakfast.ITool;
  export interface Tool extends ITool {
    //no not declare and interface method here, they belong in ITool interface above.
  }
}


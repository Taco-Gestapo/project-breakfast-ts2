/**
 * Created by jonwilliams on 2016-12-04.
 */
namespace ProjectBreakfast.Properties {
  export module AssemblyInfo {
    export class AssemblyInfo {

      private static CONF: any = {
        "name": "Project Breakfast",
        "version": "0.0.1",
        "south-carolina-reaper-risk-level": "yet to be determined"
      };

      constructor() {
        //do nothing
      }

      public static getConfig(): any {
        return AssemblyInfo.CONF;
      }
    }
  }
}


//@todo, see if any of this is relevant to TS, initial thought we don't need anything like this
// //
// //      Major Version
// //      Minor Version
// //      Build Number
// //      Revision
// //
// // You can specify all the values or you can default the Build and Revision Numbers
// // by using the '*' as shown below:
// // [assembly: AssemblyVersion("1.0.*")]
// [assembly: AssemblyVersion("1.0.0.0")]
// [assembly: AssemblyFileVersion("1.0.0.0")]

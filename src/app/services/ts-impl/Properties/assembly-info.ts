/**
 * Created by jonwilliams on 2016-12-04.
 */
namespace ProjectBreakfast.Properties {
  export module AssemblyInfo {
    export class AssemblyInf0 {

      private static CONF: any = {
        "name": "Project Breakfast",
        "version": "0.0.1",
        "south-carolina-reaper-risk-level": "yet to be determined"
      };

      constructor() {
        //do nothing
      }

      public getConfig(): any {
        return AssemblyInf0.CONF;
      }
    }
  }
}


// let conf = {
//   "name": "Project Breakfast",
//   "version": "0.0.1",
//   "south-carolina-reaper-risk-level": "yet to be determined"
// };

//@todo, see if any of this is relevant to TS, initial thought we don't need anything like this
// using System.Reflection;
// using System.Runtime.CompilerServices;
// using System.Runtime.InteropServices;
//
// // General Information about an assembly is controlled through the following
// // set of attributes. Change these attribute values to modify the information
// // associated with an assembly.
// [assembly: AssemblyTitle("NightLight")]
// [assembly: AssemblyDescription("")]
// [assembly: AssemblyConfiguration("")]
// [assembly: AssemblyCompany("")]
// [assembly: AssemblyProduct("NightLight")]
// [assembly: AssemblyCopyright("Copyright ©  2012")]
// [assembly: AssemblyTrademark("")]
// [assembly: AssemblyCulture("")]
//
// // Setting ComVisible to false makes the types in this assembly not visible
// // to COM components.  If you need to access a type in this assembly from
// // COM, set the ComVisible attribute to true on that type.
// [assembly: ComVisible(false)]
//
// // The following GUID is for the ID of the typelib if this project is exposed to COM
// [assembly: Guid("b59c14b4-afd9-4968-b4a5-67376d1b809f")]
//
// // Version information for an assembly consists of the following four values:
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

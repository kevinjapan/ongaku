
declare module 'HomeView'


// Type Aliases
type QueryOutcome = 'success' | 'fail'      // to do : use in reqInit etc


// QueryParams
// signature type - we can get any valid url query key/value pairing
interface QueryParams {
   [index: string]: string;
}

// data object we pass in POST query - can be any valid type
// interface QueryBody {
   
// }

// DataPackage returned from server on a request
// server level  - is this superfluous - just use DataPackageContents ?
interface DataPackage {
   data?:DataPackageContents,
   error:string
}

// Contents of DataPackage - 'success'/'fail' and data (optional)
// application level
interface DataPackageContents<T> {
   outcome:string,
   data?:T,
   error?:string
}

// interface GenericIdentityFn {
//    <Type>(arg: Type): Type;
//  }
  
//  function identity<Type>(arg: Type): Type {
//    return arg;
//  }
  
//  let myIdentity: GenericIdentityFn = identity;


// Errors

interface RouteError {
   data:string,
   error: {
      columnNumber:number,
      fileName:string,
      lineNumber:number,
      message:string,
      stack:string
   },
   internal:boolean,
   status:number,
   statusText:string
}


// Albums

interface AlbumsList {
   albums_list?:Album[] | null
}
interface Album {
   id:number,
   title:string,
   slug:string,
   created_at:string,
   feature_img:string,
}


// Component Props

interface HeroBannerProps {
   overlayHeading:string,
   overlayTagline?:string,
   featureImg:string,
}

declare module 'HomeView'


// AppContext
interface AppContext {
   app_api:string,
   prev_feature_img:string,
   set_prev_feature_img(img:string): void
}

// EndPoint
interface EndPoint {
   request_method:string,
   route:string, 
   route_url_params?:string
}

// QueryParams
// signature type - we can get any valid url query key/value pairing
interface QueryParams {
   [index: string]: string;
}

// Type Aliases
type QueryOutcome = 'success' | 'fail'

// Contents of DataPackage - 'success'/'fail' | data (optional)  | error (optional)
interface DataPackage<T> {
   outcome:QueryOutcome,
   data?:T,
   error?:string
}


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
   playlist?:string
}


// Component Props

interface HeroBannerProps {
   overlayHeading:string,
   overlayTagline?:string,
   featureImg:string,
}
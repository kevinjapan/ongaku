
declare module 'HomeView'


// Type Aliases
type QueryOutcome = 'success' | 'fail'      // to do : use in reqInit etc

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
   albums:Album[]
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
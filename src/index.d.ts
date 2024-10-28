
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

type UseFetchOptions = {
   immediate: boolean
}

// Payload
// server/file responses carry a payload along w/ our useFetch inteface
interface Payload<T> {
   server_response:string,
   outcome:string,
   data: T | null
}

// UseFetchReturn
// useFetch is app-agnostic - so only knows the url and data type (generic)
// in our app, we know 'data' will contain { outcome, data, error } from server - so we want to extract..
// we want 'outcome' to clearly identify that eg an empty array is a valid response (eg no matching records)
interface UseFetchReturn<T> {
   url:string,
   loading:boolean,
   payload:Payload<T | null> | null,
   error?:string | null,
   load: () => Promise<void>,
   updateUrl: Dispatch<SetStateAction<string>>,
   updateRequestOptions: Dispatch<SetStateAction<RequestInit | undefined>>,
   updateOptions: Dispatch<SetStateAction<UseFetchOptions>>,
}

interface UseDataReturn<T> {
   loading:boolean,
   payload:Payload<T | null> | null,
   error?:string | null,
   load: () => Promise<void>,
   updateUrl: Dispatch<SetStateAction<string>>
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


// Albums / Tracks

interface AlbumsList {
   albums_list?:Album[] | null
}
interface Album {
   id:number,
   title:string,
   slug:string,
   created_at:string,
   feature_img:string,
   playlist?:string,
   tracks:Track[]
}
interface Track {
   title:string,
   slug:string,
   copy:string,
   audio:string,
   video:string,
   img:string,
   sections:TrackSection[]
}
interface TrackSection {
   title:string,
   lines:string[]
}



// Component Props

interface HeroBannerProps {
   overlayHeading:string,
   overlayTagline?:string,
   featureImg:string,
}

interface TrackCardsListProps {
   tracks:Track[]
}

interface TrackCardProps {
   track:Track
}

interface TrackCardSectionProps {
   section:TrackSection
}

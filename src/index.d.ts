
declare module 'HomeView'



// ----------------------------------------------------
// AppContext interfaces

interface AppContextType {
   app_api:string
   tracks_list:TracksListItem[]
   active_track:TracksListItem
   audio_path:string
   prompt:string
   show_bubbles:boolean
   set_active_track(track:TracksListItem): void
   track_ended(): void
}



// ----------------------------------------------------
// Fetch and Data interfaces

// EndPoint
interface EndPoint {
   request_method:string,
   route_url:string, 
   route_url_params?:string
}

// QueryParams
// signature type - we can get any valid url query key/value pairing
interface QueryParams {
   [index: string]: string;
}

type QueryOutcome = 'success' | 'fail'

type UseFetchOptions = {
   immediate: boolean
}

// Payload
// server/file responses carry a payload which is passed by our useFetch inteface
interface Payload<T> {
   server_response:string,
   outcome:string,
   data: T | null
}

// UseFetchReturn
// useFetch is app-agnostic - returns meta info, api methods and json payload from server/file
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

// UseDataReturn
// useData wraps useFetch for in-app endpoint mapping
interface UseDataReturn<T> {
   loading?:boolean,
   payload?:Payload<T | null> | null,
   error?:string | null,
   load?: () => Promise<void>,
   updateDataUrl?: Dispatch<SetStateAction<string>>
}





// ----------------------------------------------------
// Error interfaces

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



// ----------------------------------------------------
// Albums/Tracks interfaces

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


interface TracksListItem {
   title:string,
   slug:string,
   audio:string
}


// ----------------------------------------------------
// AppNav 
interface AppNavItemType {
   id:number
   label:string
   route:string
   children?:AppNavItemType[]
}


// ----------------------------------------------------
// AudioPlayer


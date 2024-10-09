
declare module 'HomeView'


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
}
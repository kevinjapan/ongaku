

// useEndPoints

// map end_points names to relative URLs
// app_store.app_api is our flag - if emtpy, we are in 'web api' mode, else we are in 'static site' mode
// url params : we assume order matches that expected by end-point and we append to url
   
export function get_end_points() {


   // if(app_store.app_api === '') // to do : context equivalent for app_api path
   {

      // static site endpoints

      return {

         albums_list:{
            request_method:'GET',
            route:`/data/albums_list.json`
         },
         
      }

   }
   // else {
   //
   //    // web api endpoints
   //
   //    return {
   //
   //    }
   // }

}


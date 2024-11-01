

// useEndPoints

// map end_points names to relative URLs
// app_store.app_api is our flag - if emtpy, we are in 'web api' mode, else we are in 'static site' mode
// url params : we assume order matches that expected by end-point and we append to url
   
export function get_end_point(endPoint: string,url_params: Array<string>,query_params: QueryParams) {

   const is_static_site = true  // future : app context toggle for static / web api site

   let end_points
   
   if(is_static_site === true)
   {

      // static site endpoints

      end_points = {
         albums_list:{
            request_method:'GET',
            route_url:`/data/albums_list.json`
         },   
         single_album:{
            request_method:'GET',
            route_url:`/data/albums/`,
            route_url_params:`${url_params?.join('/')}.json`
         },
         // failsafe default if no match found
         default:{
            request_method:'GET',
            route_url:`/data/no_end_point.json`, // to do : review and improve mechanism
         }
      }

   }
   else {
   
      // web api endpoints
   
      end_points = {
         search:{
            request_method:'GET',
            route_url:`/search?search_term=${query_params.search_term}`
         },
         // failsafe default if no match found
         default:{
            request_method:'GET',
            route_url:`/data/no-end-point`,
         }
   
      }
   }

   // we need to handle if endPoint doesnt find match in the returned end_points object - we pass 'default'
   if(Object.prototype.hasOwnProperty.call(end_points, endPoint)) {
      return end_points[endPoint as keyof typeof end_points] as EndPoint
   }
   else {
      return end_points['default']
   }
}


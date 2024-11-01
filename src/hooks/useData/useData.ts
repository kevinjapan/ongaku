import useFetch from '../useFetch/useFetch'
import reqInit from '../../utilities/requestInit/RequestInit'
import { get_end_point } from '../../utilities/endPoints/endPoints'


// useData Custom Hook

// future : expand as we need additional features (CrUD etc)
//  : args to useData
// @url_params  : array of url params (ids/slugs) to include in url path
// @query_params: object containing key/value pairs to build query string
// @body        : pass js object or json string


export default function useData<T>(
   endPoint: string,
   url_params: string[],
   query_params: QueryParams,
   body?: T | null
): UseDataReturn<T> {

   // we cannot call useFetch conditionally below, so we have to ensure we have some end_point_obj to pass (so a default is required)
   const { request_method, route_url } = get_end_point(endPoint, url_params, query_params) as EndPoint



   // we rely on useFetch to call error on invalid or empty URL
   const { loading, payload, error, load, updateUrl } = useFetch<T>(
      route_url,
      reqInit(request_method,'',body),
      {immediate:true}
   )

   return {
      loading, payload, error, load, updateUrl
   }
}

   // future : in useFetch? do we need to stringify body - introduce as we add features (CrUd)
   // let stringified_body = null
   // if(body && typeof body === 'object') {
   //    stringified_body = JSON.stringify(body)
   // }
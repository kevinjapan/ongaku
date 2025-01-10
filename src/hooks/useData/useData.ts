import { useEffect } from 'react'
import useFetch from '../useFetch/useFetch'
import reqInit from '../../utilities/requestInit/RequestInit'
import { get_end_point } from '../../utilities/endPoints/endPoints'
import { query_params_str, is_empty_obj } from '../../utilities/utilities/utilities'



// useData Custom Hook
// future : expand as we need additional features (CrUD etc)

export default function useData<T>(endPoint: string , url_params: string[], query_params: QueryParams, body?: T | null): UseDataReturn<T> {

   // we cannot call useFetch conditionally below, so we have to ensure we have some end_point_obj to pass (so a default is required)
   const { request_method, route_url, route_url_params } = get_end_point(endPoint, url_params, query_params) as EndPoint
 
   useEffect(() => {
      // future : we are getting updated multiple times (even allowing for twice during dev, we are updating x4 (dev = x8 times))
      // the call Album.useEffect[slug,updateDataUrl] called once until we call updateDataUrl() herein, then we get multiple re-renders 
      // console.log('updated hook useData')
   })

   // build url for useFetch
   const query_string = query_params_str(query_params)
   const built_url = `${route_url}${route_url_params ? route_url_params : ''}${query_string ? '?' : ''}${query_string ? query_string : ''}`

   // fetch data
   const { loading, payload, error, load, updateUrl } = useFetch<T>(built_url,  reqInit(request_method,'',body), {immediate:true})

   // access rcvd func
   let update_the_url = updateUrl

   // we intervene on updateUrl to resolve the end_point
   const updateDataUrl = (endPoint: string, url_params: string[], query_params: QueryParams) => {      
      let query_string = query_params_str(query_params)
      const { route_url, route_url_params } = get_end_point(endPoint, url_params, query_params) as EndPoint
      const built_url = `${route_url}${route_url_params ? route_url_params : ''}${!is_empty_obj(query_string) ? '?' : ''}${!is_empty_obj(query_string) ? query_string : ''}`
      update_the_url(built_url)
   }

   // return UseDataReturn obj
   return {loading, payload, error, load, updateDataUrl}
}

   // future : in useFetch? do we need to stringify body - introduce as we add features (CrUd)
   // let stringified_body = null
   // if(body && typeof body === 'object') {
   //    stringified_body = JSON.stringify(body)
   // }

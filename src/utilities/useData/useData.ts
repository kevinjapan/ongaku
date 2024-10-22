// import { useAppStore } from '@/stores/appStore'
import { get_end_points } from '../endPoints/endPoints'
import { use_fetch } from '../fetch/fetch'
import reqInit from '../requestInit/RequestInit'

// import { useContext } from 'react'
// import { AppContext } from '../../AppContext'

// use_data

// we want ability to change between static (no-server, data in files) and server-api served site
// our application will call use_data and herein we will map to correct end-point.
// by using this middleman, we only have a single point of change to achieve this (eg components don't care what the url is)
// future : 
// we want to seamlessly interchange btwn static files and server-api served data sources.
// since we want to build server-api served dev sites but demo as static
// - in dev: const { data, error } = await useFetch(`${app_store.app_api}/songs?order_by=${order_by.value}&asc=${asc.value}&page=${page.value}`,reqInit())
// - in static: const { data, error } = await useFetch(`./songs_list.json`,reqInit())

// to do : make this a custom hook? why (other than name) isn't it already? (have tried but unsuccessfully)
// - rem, we brought this code in from vue project and have been pushing it into react and ts 


// use_data
// @url_params  : array of url params (ids/slugs) to include in url path
// @query_params: object containing key/value pairs to build query string
// @body        : pass js object or json string

export default async function use_data<T>(end_point: string ,url_params: string[], query_params: QueryParams, body: T | null) : Promise<DataPackageContents<T>>{

   console.log('to do : use url_params ',url_params)

   // to do : to use useContext - this func use_data must be a custom hook (use_data) - issues w/ that...
   //            so, before we can useContext, we need to make this a custom hook.
   // const level = useContext(AppContext);
   
   // const app_store = useAppStore()
   const end_points = get_end_points(url_params,query_params)

   if(!Object.prototype.hasOwnProperty.call(end_points,end_point)) {   // hasOwn not supported pre-15.4 IOS
      return { outcome: 'fail', error: 'The query end-point was not recognized.'}
   }

   const { request_method, route, route_url_params } = <EndPoint>end_points[end_point as keyof typeof end_points]
   const body_stringified = body && typeof body === 'object' ? body = JSON.stringify(body) as T : null
   const query_string = Object.keys(query_params).length > 0 ? new URLSearchParams(query_params) : ''

   // to do : first ${''} is : app_store.app_api - need to enable this (if empty we are getting static resource)
   // to do : 2nd arg to reqInit is : app_store.bearer_token
   return await use_fetch<T>(
      `${''}${route}${route_url_params ? route_url_params : ''}${query_string ? '?' : ''}${query_string ? query_string : ''}`,
      reqInit(request_method,'',body_stringified)
   )
}
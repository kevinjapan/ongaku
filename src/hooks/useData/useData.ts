import { useState, useRef, useEffect, useCallback } from 'react'
// import { get_end_points } from '../endPoints/endPoints'
import { use_fetch } from '../fetch/fetch'
import reqInit from '../requestInit/RequestInit'


// to do : 
// 1 - resolve mapping of endpoint/query to url
// 2 - auto provide correct reqInit options

// useData.useData

// future : make this a Custom Hook?
// we can't do so currently since we wrap in useEffect/async call in components (see AlbumsListView)
// Custom Hooks must be called at top level : bit of reading etc to do first

// we want ability to change between static (no-server, data in files) and server-api served site
// our application will call useData and herein we will map to correct end-point.
// - in dev: const { data, error } = await useFetch(`${app_store.app_api}/songs?order_by=${order_by.value}&asc=${asc.value}&page=${page.value}`,reqInit())
// - in static: const { data, error } = await useFetch(`./songs_list.json`,reqInit())

// useData
// @url_params  : array of url params (ids/slugs) to include in url path
// @query_params: object containing key/value pairs to build query string
// @body        : pass js object or json string

export default function useData<T>(end_point: string ,url_params: string[], query_params: QueryParams, body: T | null) : DataPackage<T>{
   
   console.log(url_params.length,query_params.length,typeof body)
   const [loading, setLoading] = useState(false)
   const [outcome, setOutcome] = useState('fail')
   const data = useRef<T | null>(null)
   const error = useRef<string | null>(null)

   
   const load = useCallback(async() => {
      console.log('here')
      try {
         setLoading(true)

         // const end_points = get_end_points(url_params,query_params)

         // if(!Object.prototype.hasOwnProperty.call(end_points,end_point)) {   // hasOwn not supported pre-15.4 IOS
         //    return { outcome: 'fail', error: 'The query end-point was not recognized.'}
         // }
         // const { request_method, route, route_url_params } = <EndPoint>end_points[end_point as keyof typeof end_points]
         // const body_stringified = '' // body && typeof body === 'object' ? body = JSON.stringify(body) as T : null
         // const query_string = Object.keys(query_params).length > 0 ? new URLSearchParams(query_params) : ''
         // const fetched = await use_fetch<T>(
         //    `${''}${route}${route_url_params ? route_url_params : ''}${query_string ? '?' : ''}${query_string ? query_string : ''}`,
         //    reqInit(request_method,'',body_stringified)
         // )
         
         const fetched = await use_fetch<T>(
            `${end_point}`,
            reqInit('GET','',null)
         )
         setOutcome('success')
         setLoading(false)
         setOutcome(fetched.outcome)
         data.current = fetched.data as T
         error.current = fetched.error as string
      }
      catch(error) {
         console.log(error)
      }

   },[end_point])

   useEffect(() => {
      load()
   },[load])

   const test: DataPackage<T> =  {
      outcome:outcome as QueryOutcome,
      error:error.current, 
      data:data.current, 
      loading:loading,
   }

   return test
 
   //          const { data, error, outcome } = await useData<AlbumsList>('albums_list',[],{},null)
   //          if(data) {
   //             if(outcome === 'success') setAlbumList(data.albums_list) 
   //          }
   //          else {
   //             throw error


   // const { request_method, route, route_url_params } = <EndPoint>end_points[end_point as keyof typeof end_points]
   // const body_stringified = body && typeof body === 'object' ? body = JSON.stringify(body) as T : null
   // const query_string = Object.keys(query_params).length > 0 ? new URLSearchParams(query_params) : ''

   // to do : first ${''} is : app_store.app_api - need to enable this (if empty we are getting static resource)
   // to do : 2nd arg to reqInit is : app_store.bearer_token
   // return await use_fetch<T>(
   //    `${''}${route}${route_url_params ? route_url_params : ''}${query_string ? '?' : ''}${query_string ? query_string : ''}`,
   //    reqInit(request_method,'',body_stringified)
   // )
}
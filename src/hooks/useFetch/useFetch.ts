import { useState, useEffect, useRef, useCallback } from 'react'
// import status_code from '../../utilities/statusCode/statusCode'



// useFetch Custom Hook

// adapted from orig @ https://github.com/w3cj/use-x
// AbortSignal: https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal

// We store all initial props as our own state variables, the
// only way to update the fetch state is to call the exported funcs
// If our load func is called multiple times in quick succession,
// we cancel the prev requests , only handle last request

export default function useFetch<T>(
   initialUrl: string, 
   initialRequestOptions?: RequestInit,
   initialOptions?: UseFetchOptions
): DataPackage<T> {

   // capturing initial values in our own state will remove direct dependancies
   // and stop re-rendering even if new initialOptions created
   const [loading, setLoading] = useState(false)
   const [url, updateUrl] = useState(initialUrl)
   const [data, setData] = useState<T | null>(null)
   const [error, setError] = useState<string | null>(null)
   const [requestOptions, updateRequestOptions] = useState(initialRequestOptions)
   const [options, updateOptions] = useState(initialOptions || { immediate: true })

   // we useRef, rather than setState: we can re-assign w/out dependancy loop
   const abortController = useRef(new AbortController())


   // load
   // we useCallback to prevent useEffect changing on every render
   // url dependancy will action on client url change

   const load = useCallback(async() => {

      abortController.current.abort()
      abortController.current = new AbortController()
      setData(null)
      if(!url) {
         setError('Empty URL')
         return
      }
      else {
         setError(null)
      }

      setLoading(true)

      try {
         const reqInit = (requestOptions || {})
         reqInit.signal = abortController.current.signal
         const currentAbortController = abortController.current

         const response = await fetch(url,reqInit)
         if(!response.ok) {
            throw Error(response.statusText)
         }
         console.log('response.json',response.json)

         const json = await response.json()

         if(currentAbortController.signal.aborted) return
         setData(json) // to do : json.data?
      }
      catch(e) {
         // in TS error type is 'unknown' - we know it will be an Error object
         const error = e as Error
         if(error.name === "AbortError") {
            setError(null)            
            setData(null)
         }
         else {
            setError(error.message)
         }
      }      
      setLoading(false)
   },[url, requestOptions])

   useEffect(() => {
      if(options.immediate) {
         load()
      }
      // abort request on component unmounted
      return () => {
         abortController.current.abort()
      }
   },[load,options])

   return {
      url,
      loading,
      error,
      data,
      load,
      updateUrl,
      updateOptions,
      updateRequestOptions
   }
}


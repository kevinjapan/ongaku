import status_code from '../statusCode/statusCode'



export async function use_fetch<T>(url: string, options: RequestInit): Promise<DataPackageContents<T>> {

   let data:object = {}
   let outcome:string = ''
   let error:string = ''

   // remove any non-valid body (could break GET action)
   if(!options.body || options.body === 'null') delete options.body

   await fetch(url,options)
      .then((res) => {
         if(res.ok === true) {
            return res.json()
         }
         else {
            throw status_code(res.status)
         }
      }) 
      .then((json) => {
         outcome = json.outcome
         data = json.data
      })
      .catch((err) => {
         error = err
      })

      // to do : there is a mismatch here - we are assigning 'outcome' below,
      // but this is given in the json file
      // secondly, we are packing the whole json file into 'data' - so it is not the type (eg Album) that we are 
      // looking to pass to consumer
      // decision - do we retain 'outcome' in json file - if so, we have to extract here..
      // will have to extract from server response anyhow, so let's do same w/ json file


      return { 
         outcome:outcome as QueryOutcome,
         data: data as T,
         error: error
      }
}


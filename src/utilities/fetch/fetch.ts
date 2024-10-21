import status_code from '../statusCode/statusCode'
import { is_empty_obj } from '../utilities/utilities'


export async function use_fetch<T>(url: string, options: RequestInit): Promise<DataPackageContents<T>> {

   let data:object = {}
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
         data = json
      })
      .catch((err) => {
         error = err
      })

      return { 
         outcome:is_empty_obj(data) ? 'fail' : 'success',
         data: data as T,
         error: error
      }
}


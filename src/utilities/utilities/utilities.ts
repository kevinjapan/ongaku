

export const scroll_to_elem = (id: string) => {
   let target = document.getElementById(id)
   if(target !== null) target.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
}


// errors are typically passed as arrays of strings, only add if unique
export const add_if_unique_str = (arr: Array<string>,str: string) => {
   if(arr.find(elem => elem === str) === undefined) arr.push(str)
}


export const truncate = (str: string,len = 20,trailing:boolean = true) => {
   if(str) {
      if(str !== "" && str.length > len) {
         return trailing ? str.substring(0, len) + '..' : str.substring(0, len) 
      }
   }
   return str
}


export const is_empty_obj = (obj: object) => {
   return Object.keys(obj).length === 0
}


export const query_params_str = (query_params: QueryParams) => {
   let query_string = {}
   if(!is_empty_obj(query_params)) {
      query_string = Object.keys(query_params).length > 0 ? new URLSearchParams({...query_params}) : {}
   }
   return query_string
}
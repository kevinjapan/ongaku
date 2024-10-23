import { createContext, useState } from 'react'


export const AppContext = createContext({})


export const AppContextProvider = ({children}: { children: React.ReactNode }) => {

   const [app_api] = useState('')
   const [prev_feature_img,setPrevFeatureImg] = useState('')

   // handlers - TS doesn't like directly passing useState.setXXX funcs
   const set_prev_feature_img = (img: string) => {setPrevFeatureImg(img)}

   return (
      <AppContext.Provider 
         value={{
            app_api,
            prev_feature_img,
            set_prev_feature_img
         }}>
         {children}
      </AppContext.Provider>
   )
}
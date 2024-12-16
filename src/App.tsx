import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { AppContextProvider } from './AppContext'
import './App.css'
import AppNav from './components/App/AppNav/AppNav'
import AudioPlayer from './components/AudioPlayer/AudioPlayer'
// import AudioPlayerTracksList from './components/AudioPlayer/AudioPlayerTracksList/AudioPlayerTracksList'
import BubbleAnimator from './components/BubbleAnimator/BubbleAnimator'
import AppFooter from './components/App/AppFooter/AppFooter'

// interface AppContextType {
//    app_api:string,
//    prev_feature_img:string
// }

export default function App() {
   
   return (
      <AppContextProvider>

         <AppNav/>

         <main>               
            <Suspense>
               <Outlet/>
               <AudioPlayer/>
            </Suspense>
         </main>

         

         <BubbleAnimator/>

         <AppFooter/>

      </AppContextProvider>
      
   )
}

import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { AppContextProvider } from '@/context/AppContext'
import './App.css'
import AppNav from './components/App/AppNav/AppNav'
import AudioPlayer from './components/AudioPlayer/AudioPlayer'
import BubbleAnimator from './components/BubbleAnimator/BubbleAnimator'
import AppFooter from './components/App/AppFooter/AppFooter'


// App

export default function App() {
   
   return (
      <AppContextProvider>

         <AppNav/>

         <main>               
            <Suspense>
               <Outlet/>
               <AudioPlayer/>
               <BubbleAnimator/>
            </Suspense>
         </main>

         <AppFooter/>

      </AppContextProvider>
      
   )
}

import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import AppNav from './components/App/AppNav/AppNav'
import AudioPlayer from './components/AudioPlayer/AudioPlayer'
import BubbleAnimator from './components/BubbleAnimator/BubbleAnimator'
import AppFooter from './components/App/AppFooter/AppFooter'



export default function App() {

   
   return (
      <>
         <AppNav/>

         <main>
            
            <Suspense>
               <Outlet/>
            </Suspense>
         </main>

         <AudioPlayer/>

         <BubbleAnimator/>

         <AppFooter/>
      </>
   )
}

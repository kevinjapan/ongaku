import { useRouteError } from 'react-router-dom'
import { errorMessage } from '../utilities/errors/errors'
import AppNav from '../components/App/AppNav/AppNav'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import AppFooter from '../components/App/AppFooter/AppFooter'


export default function HomeView() {

   const error = useRouteError() as RouteError

   // starter example :
   // https://reactrouter.com/en/main/start/tutorial

   return (
      <>
      
         <AppNav/>

         <HeroBanner 
            overlayHeading={''}
            featureImg={"all-sorts-of-questions.jpg"}
         />

         <section className="m_2" style={{position:'absolute',top:'5rem',zIndex:'99999999999999',color:'white',height:'120vh'}}>
            <h1 style={{color:'white'}}>Error</h1>
            <p style={{paddingLeft:'1rem'}}>Sorry, an unexpected error has occurred.</p>
            <p style={{paddingLeft:'1rem'}}>{ error.statusText || error.error?.message } | { errorMessage(error) }</p>
         </section>
         
         <AppFooter/>

      </>
   )

}
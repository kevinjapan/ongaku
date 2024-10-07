import { useRouteError } from 'react-router-dom'
import { errorMessage } from '../utilities/errors/errors'

export default function HomeView() {

   const error = useRouteError() as RouteError


   // to do : see starter example :
   //  https://reactrouter.com/en/main/start/tutorial

   return (
      <>
         <h3>ErrorView</h3>
         <p>{ error.statusText || error.error.message }</p>
         <p>{ errorMessage(error) }</p>
      </>
   )

}
import { useRouteError } from 'react-router-dom'
import { errorMessage } from '../utilities/errors/errors'

export default function HomeView() {

   const error = useRouteError() as RouteError

   // starter example :
   // https://reactrouter.com/en/main/start/tutorial

   return (
      <section className="m_2">
         <h3>ErrorView</h3>
         <p>{ error.statusText || error.error?.message }</p>
         <p>{ errorMessage(error) }</p>
      </section>
   )

}
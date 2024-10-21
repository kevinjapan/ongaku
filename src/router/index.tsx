import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'


import App from '../App'
import use_data from '../utilities/useData/useData'
import { get_album } from '../queries/albums/get_album'


export default function get_router() {

   const HomeView = lazy(() => import('../views/HomeView'))
   const AboutView = lazy(() => import('../views/AboutView'))
   const AlbumsListView = lazy(() => import('../views/AlbumsListView'))
   const AlbumView = lazy(() => import('../views/AlbumView'))
   const ErrorView = lazy(() => import('../views/ErrorView'))

   return createBrowserRouter([
      {
         path:'/',
         element:<App/>,
         errorElement:<ErrorView />,
         children:[
            {
               path: "/",
               element: <HomeView />,
            },
            {
               path: "about",
               element: <AboutView />,
            },
            {
               path:'albums',
               element:<AlbumsListView/>,
               loader:async() => {
                  let retrieved_data = null
                  try {
                     const { data, error, outcome } = await use_data('albums_list',[],{},null)
                     if(data) {
                        if(outcome === 'success') retrieved_data = data
                     }
                     else {
                        throw error
                     }
                  }
                  catch(error) {
                     return {
                        outcome: 'fail',
                        error:error as string,
                        data:{}
                     }
                  }
                  // note : we return an AlbumsList, w/ 'albums_list' key / array value pair
                  return {albums_list:retrieved_data?.albums_list}
                  
               }
            },
            {
               path:'albums/:slug',
               element:<AlbumView/>,
               loader:({params}) => {               
                  return get_album(params.slug as string)
               }
            },
         ]
      },
   ])
}
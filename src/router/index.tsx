import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'


import App from '../App'
import { get_albums_list } from '../queries/albums/get_albums_list'
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
               loader:() => {
                  return get_albums_list()               
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
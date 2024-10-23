import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'


// routes

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
               element:<AlbumsListView/>
            },
            {
               path:'albums/:slug',
               element:<AlbumView/>
            },
         ]
      },
   ])
}
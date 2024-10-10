import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import HomeView from './views/HomeView.tsx'
import AboutView from './views/AboutView.tsx'
import AlbumsListView from './views/AlbumsListView.tsx'
import AlbumView from './views/AlbumView.tsx'
import ErrorView from './views/ErrorView.tsx'
import { get_albums_list } from './queries/albums/get_albums_list.ts'
import { get_album } from './queries/albums/get_album.ts'
import './index.css'



// to do : convention for hosting this router in a separate file / folder - where? name?
const router = createBrowserRouter([
   {
      path:'/',
      element:<App/>,
      errorElement:<ErrorView />,
      children:[
         {
            path: "home",
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
            
               // return fetch('/api/users' + params.slug)
         },
      ]
   },
])


createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <RouterProvider router={router}/>
   </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import AboutView from './views/AboutView.tsx'
import AlbumsView from './views/AlbumsView.tsx'
import ErrorView from './views/ErrorView.tsx'
import './index.css'

// to do : convention for hosting this router in a separate file / folder - where? name?
const router = createBrowserRouter([
   {
      path:'/',
      element:<App/>,
      errorElement:<ErrorView />,
      children:[
         {
         path: "about",
         element: <AboutView />,
         },
         {
            path:'albums',
            element:<AlbumsView/>,
         },
      ]
   },
])


createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <RouterProvider router={router}/>
   </StrictMode>,
)

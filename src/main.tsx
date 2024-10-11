import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import get_router  from './router/index'


const router = get_router()

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <RouterProvider router={router}/>
   </StrictMode>,
)

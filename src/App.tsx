// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import AppNav from './components/App/AppNav/AppNav'
import './App.css'

function App() {
//   const [count, setCount] = useState(0)


   return (
      <>
         <AppNav />
         <main>
            this is App (not Home)
            <Outlet/>
         </main>
      </>
   )
}

export default App

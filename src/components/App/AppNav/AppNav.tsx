import { Link } from 'react-router-dom'

export default function AppNav() {

   
   const nav_links = [
      {label:'Home',route:'/'},
      {label:'Albums'},
      {label:'About'},
   ]

   return (
      <ul className="app_nav flex gap_1">
         {nav_links.map(link => 
            <li key={link.label}>
               <Link to={`${link.route ? link.route : link.label}`}>{link.label}</Link>
            </li>
         )}
      </ul>
   )
}
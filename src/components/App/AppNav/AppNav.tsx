import { Link } from 'react-router-dom'

export default function AppNav() {

   // to do : onClick menu item, close dropdown (if open) immediately

   // to do : expand - get dropdown menu items from these objects:
   const nav_links = [
      {
         label:'Albums',
         route:'albums',
         children:[
            {
               id:1,
               label:'beneath the waves',
               route:'/beneath-the-waves'
            },
            {
               id:2,
               label:'river',
               route:'/river'
            },
            {
               id:3,
               label:"life's a rhetorical question",
               route:'/lifes-a-rhetorical-question'
            },
            {
               id:4,
               label:'rough not ready',
               route:'/rough-not-ready'
            },
            {
               id:5,
               label:'the wee song sketchbook',
               route:'/the-wee-song-sketchbook'
            }
         ]
      },
      {label:'About',route:'about'},
   ]

   return (
      <nav id="nav" className="nav">

         <div className="logo_block">
            <Link to="/">edk</Link>
         </div>

         { /* to do : separate component */}
         <div className="nav_toggle_wrap">
            <div className="nav_toggle">
               <div className="toggle_bar"></div>
               <div className="toggle_bar"></div>
               <div className="toggle_bar"></div>
            </div>
         </div>  

         <ul className="nav_list flex gap_2">
            {nav_links.map(link => 
               <li key={link.label}>
                  <Link to={`${link.route ? link.route : link.label}`} data-list="services" className="nav_list_label">{link.label}</Link>
                  <ul className="nav_list_dropdown">
                     <li>
                        {link.children?.map(child => {
                           return <Link to={`albums${child.route}`} key={child.id}>{child.label}</Link>
                        })}
                     </li>
                  </ul>
               </li>
            )}
         </ul>
      </nav>
   )
}
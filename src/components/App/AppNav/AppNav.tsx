import { useState } from 'react'
import { Link } from 'react-router-dom'
import { is_sm_screen } from '../../../utilities/screen/screen'


// AppNav
// our nav was built around keeping dropdown open on hover, which worked fine with new pages reloading the nav; 
// in this SPA, however, the hover works against us, keeping the dropdown open when entering a new view
// workaround - we 'reset' the nav on new views opening. We lose the fade/slide-up animation but get clean views
// future : still slight awkward on clicking on top level nav - re-opens dropdown abruptly

// to do : bring in hiding nav on scroll down / show nav on scroll up (see orig. EDK) (transparent over hero_block only)
// to do : bug : click on logo, opens dropdown immediately.
// to do : bug : on sm, dropdown loses bg color before scrolling up to hidden position
// to do : improve transition on opening new screen - scroll up nav (?) / fade in new hero_banner cover block img

export default function AppNav() {

   // reset nav on opening new view (we close extended dropdown)
   const [reset, setReset] = useState(true)

   // track extended and toggle extended_nav_dropdown
   const [extended, setExtended] = useState(false)


   // methods

   const reset_nav = () => {
      setReset(false)
      setTimeout(() => setReset(true),500)
      if(is_sm_screen()) toggle()
   }

   const toggle = () => {

      const dropdown = document.querySelector('nav ul.nav_list')
      const nav_toggle = document.querySelector('.nav_toggle')

      if(dropdown && nav_toggle) {
         // classList.toggle was not working, so we use our own 'extended' state to track
         if(extended) {
            dropdown.classList.remove('extended_nav_dropdown')
            nav_toggle.classList.remove('selected_toggle')
         }
         else {
            dropdown.classList.add('extended_nav_dropdown')
            nav_toggle.classList.add('selected_toggle')
         }
         setExtended(!extended)
      }
   }

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
      {label:'About',route:'about',
         children:[
            {
               id:1,
               label:'beneath the waves',
               route:'/beneath-the-waves'
            },]},
   ]

   return (
      <nav id="nav" className="nav">

         <div className="logo_block">
            <Link to="/" >edk</Link>
         </div>

         <div className="nav_toggle" onClick={toggle}>
            <div className="toggle_bar"></div>
            <div className="toggle_bar"></div>
            <div className="toggle_bar"></div>
         </div>

         <ul className="nav_list gap_2">
            {nav_links.map(link => 
               <li key={link.label}>
                  <Link to={`${link.route ? link.route : link.label}`} className="nav_list_label" onClick={reset_nav}>
                     {link.label}
                  </Link>
                  {reset ? 
                     <ul className="nav_list_dropdown">
                        <li>
                           {link.children?.map(child => {
                              return (
                                 <Link to={`albums${child.route}`} key={child.id} 
                                    onClick={reset_nav}>{child.label}
                                 </Link>
                              )
                           })}
                        </li>
                     </ul>
                     : null
                  }
               </li>
            )}
         </ul>
      </nav>
   )
}
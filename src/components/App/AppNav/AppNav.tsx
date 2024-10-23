import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { is_sm_screen } from '../../../utilities/screen/screen'
import { get_nav_links } from '../../../utilities/appNav/appNav'


// AppNav

// from orig edk site, first pass migrating this solution into react, future : review code : improve
// orig kept dropdown open on hover, not effective in spa with no reload, so we 'reset' on opening views.

export default function AppNav() {

   const { pathname } = useLocation()
   const nav_links = get_nav_links()

   // reset nav on opening new view (we close extended dropdown)
   const [reset, setReset] = useState(true)

   // track extended and toggle extended_nav_dropdown
   const [extended, setExtended] = useState(false)

   // effects

   useEffect(() => {
      init_nav_scroll_listener()
      init_transparent_nav()
   })

   // root path will not re-render AppNav, so we force init nav there
   useEffect(() => {
      if(pathname === "/") init_transparent_nav()
   },[pathname])

   // methods

   const load_view = () => {
      window.scroll(0,0)
      reset_nav()
   }

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

   const init_nav_scroll_listener = () => {

      let last_scroll = 0
      const nav_bar = document.querySelector('nav')

      if(nav_bar) {
         window.addEventListener('scroll', () => {
            const current_scroll = window.scrollY         
            // to prevent disappear in ios safari bounce, we don't hide < 80px from top
            if((current_scroll > last_scroll) && (current_scroll > 80)) {
               nav_bar.classList.add('invisible_nav') // user is scrolling downwards - hide nav bar
            } else {
               nav_bar.classList.remove('invisible_nav') // scrolling upwards - show hide bar
            }
            last_scroll = current_scroll
         })
      }
   }

   const init_transparent_nav = () => {

      const nav = document.querySelector('.nav')
      const frontcover = document.querySelectorAll('.hero_block') // we are only interested in first one : to do : review : suspect not effective (will fail if multiples?)
      
      const newOptions = {
         threshold: 0,
         rootMargin: "-400px 0px 0px 0px"
      }
      if(nav) {
         const modifyNav = new IntersectionObserver(
            function(entries){
               if(nav) {
                  entries.forEach(entry => {
                     if(!entry.isIntersecting) {
                        nav.classList.remove('transparent')
                     } else {
                        nav.classList.add('transparent')
                     }
                     //modifyNav.unobserve(entry.target)    // second arg to this func after 'entries'
                  })
               }
         },newOptions)
         if(frontcover.length > 0) {
            nav.classList.add('transparent')
            frontcover.forEach(frontcover => {
               modifyNav.observe(frontcover)
            })
         }  
      }
   }

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
                  {is_sm_screen() ?
                     <Link to={`${link.route ? link.route : link.label}`} className="nav_list_label" onClick={load_view}>
                     {link.label}
                     </Link>
                     : <a className="nav_list_label">{link.label}</a>
                  }
                  {reset ? 
                     <ul className="nav_list_dropdown">
                        <li>
                           {link.children?.map(child => {
                              return (
                                 <Link to={`${child.route}`} key={child.id} 
                                    onClick={load_view}>{child.label}
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
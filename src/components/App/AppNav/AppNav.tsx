import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { is_sm_screen } from '../../../utilities/screen/screen'
import { get_nav_links } from '../../../utilities/appNav/appNav'
import AppNavSubDomain from './AppNavSubDomain/AppNavSubDomain'



// AppNav
// from orig edk site, first pass migrating this solution into react
// we keep dropdown open on hover, not effective in spa with no reload, so we temporarily 'retract_dropdown'
// future : dropdown is appearing above navbar on extracting vertically - should be behind navbar
//          non-trivial since we have several behaviours to balance - ok for now. best move to Outline CSS nav.

export default function AppNav() {

   const { pathname } = useLocation()
   const navigate = useNavigate()

   // future : improve / data src
   const nav_links = get_nav_links() as AppNavItemType[]

   // track extended and toggle extended_nav_dropdown
   const [extended, setExtended] = useState(false)

   const [current_pathname, setCurrentPathname] = useState('')


   useEffect(() => {
      setTimeout(() => init_show_only_ascending(),200)
      setTimeout(() => init_transparent_nav(),200)
   })

   // root path will not re-render AppNav, so we force init nav there
   useEffect(() => {
      if(pathname === "/") init_transparent_nav()
      setCurrentPathname(pathname)
   },[pathname])

   // we use navigate to allow us to intercede and tidy nav behaviour (scrollup)
   const load_view = (route: string) => {
      window.scroll(0,0)
      // reset_nav()
      if(is_sm_screen()) {
         toggle_sm_dropdown()
      }
      else {
         const dropdown = document.querySelector('.dropdown')
         if(dropdown) {
            dropdown.classList.add('retract_dropdown')
            setTimeout(() => dropdown.classList.remove('retract_dropdown'),700)
         }
      }
      setTimeout(() => navigate(route),200)
   }

   const toggle_sm_dropdown = () => {
      const dropdown = document.querySelector('nav ul.nav_list')
      const nav_toggle = document.querySelector('.nav_toggle')
      if(dropdown && nav_toggle) {
         // classList.toggle not working, so we use our own 'extended' state to track
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

   const init_show_only_ascending = () => {
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
      const frontcover = document.querySelectorAll('.hero_block') // we are only interested in first      
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

         <div className="nav_toggle" onClick={toggle_sm_dropdown}>
            <div className="toggle_bar"></div>
            <div className="toggle_bar"></div>
            <div className="toggle_bar"></div>
         </div>

         <ul className="nav_list">

            {/* map our domains (top nav items) */}
            {nav_links.map(link => 
               <li key={link.id}>

                  {/* domain labels */}
                  {is_sm_screen() 
                     ?  <a className="nav_list_label" onClick={() => load_view(link.route ? link.route : link.label)}>{link.label}</a>
                     :  <a className="nav_list_label">{link.label}</a>}

                  {/* dropdown for each domain */}
                  <ul className="dropdown nav_list_dropdown">
                     {/* map our sub-domains */}
                     {link.children?.map(child =>
                        <AppNavSubDomain 
                           key={child.id}
                           subdomain={child}
                           current_pathname={current_pathname}
                           load_view={load_view}
                        />
                     )}
                  </ul>
                   
               </li>
            )}
         </ul>
      </nav>
   )
}
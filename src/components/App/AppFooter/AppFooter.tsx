import { Link } from 'react-router-dom'
import AppCopyright from '../AppCopyright/AppCopyright'


// AppFooter

export default function AppFooter() {

   return (
      <section className="app_footer no_user_select">
         <ul>
            <li>
               <ul>
                  <li><span className="footer_logo">
                     <Link className="" to="/">edk</Link></span></li>
               </ul>
            </li>
            <li>
               <ul>
                  <li>
                     <Link className="link" to="/">Home</Link>
                  </li>
                  <li>
                     <Link className="link" to="/albums">Albums</Link>
                  </li>
                  <li>
                     <Link className="link" to="/about">About</Link>
                  </li>
               </ul>
            </li>
            <li>
               <ul>
                  <li>
                     <a href="https://www.youtube.com/@EvolutionDesuKa" target="_blank">YouTube</a>
                  </li>
                  <li>
                     <a href="https://www.facebook.com/kevhastiemusic" target="_blank">Facebook</a>
                  </li>
                  <li>
                     <a href="https://soundcloud.com/kevin-hastie-514919662" target="_blank">SoundCloud</a>
                  </li>
               </ul>               
            </li>
            <li>
               {/* empty links col */}
            </li>
         </ul>
         <AppCopyright/>
      </section>
   )
}
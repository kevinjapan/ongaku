import { Link } from 'react-router-dom'
import AppCopyright from '../AppCopyright/AppCopyright'


// AppFooter
// to do : actual links pls


export default function AppFooter() {

   return (
      <section className="app_footer">
         <ul>
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
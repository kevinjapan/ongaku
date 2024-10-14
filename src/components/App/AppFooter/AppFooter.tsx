import AppCopyright from '../AppCopyright/AppCopyright'

export default function AppFooter() {


   return (
      <section className="app_footer">
         
         <ul>

            <li>
               <ul>
                  <li>one</li>
                  <li>two</li>
                  <li>three</li>
                  <li>four</li>
               </ul>
            </li>
            <li>
               <ul>
                  <li>one</li>
                  <li>two</li>
                  <li>three</li>
                  <li>four</li>
                  <li>five</li>
               </ul>
               
            </li>
            <li>
               <ul>
                  <li>one</li>
                  <li>two</li>
                  <li>three</li>
               </ul>
               
            </li>

         </ul>

         <AppCopyright/>

      </section>
   )
}

import { is_sm_screen } from '../../../../utilities/screen/screen'



// AppNavSubDomain
// label (no link) list title on dropdown

interface AppNavSubDomainProps {
   subdomain: AppNavSubDomainType
   load_view: (route: string) => void
}

export default function AppNavSubDomain({subdomain, load_view} : AppNavSubDomainProps) {

   return (
      <li key={subdomain.id}>
         {/* subdomain labels */}
         {is_sm_screen() || !subdomain.children
            ?  <a onClick={() => load_view(subdomain.route ? subdomain.route : subdomain.label)}>{subdomain.label}</a>
            :  <a className="nav_subdomain_label">{subdomain.label}</a>}

            {/* map our sub-domain's children */}
            {subdomain.children 
               ?  subdomain.children?.map(grandchild => 
                     <a key={grandchild.id} onClick={() => load_view(grandchild.route ? grandchild.route : grandchild.label)}>{grandchild.label}</a>
                  )
               :  null
            }
      </li>
   )
}
import { useLoaderData } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner/HeroBanner'


export default function AlbumView() {


   const { id, title, slug, created_at, feature_img } = useLoaderData() as Album
   return (
      <>

         <HeroBanner 
            overlayHeading="album" 
            featureImg={feature_img}
         />

         <h4>test:{feature_img}</h4>

         <h3>AlbumView</h3>
         <p>{id}</p>
         <p>{title}</p>
         <p>{slug}</p>
         <p>{created_at}</p>
      </>
   )
}
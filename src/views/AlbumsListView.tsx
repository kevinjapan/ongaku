import { useLoaderData, Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner/HeroBanner'


export default function AlbumsListView() {

   const { albums } = useLoaderData() as AlbumsList // This hook provides the value returned from your route loader.


   // to do : fade_in etc won't work since it only runs on index.html load (as w/ static edk site)
   //         we need to run/initiate on every component load


   // to do : effect fade_in on cover_block on component mounting?

   return (
      <>
      
         <HeroBanner 
            overlayHeading="albums" 
            featureImg="/assets/imgs/all-sorts-of-questions.jpg"
         />

         <h3>AlbumsListView</h3>
         
         {albums.length ? (
               <ul>
               {albums.map((album: Album) => (
                  <li key={album.id}>
                     <Link to={`${album.slug}`}>                   
                        <>
                           {album.title} 
                        </>
                     </Link>
                  </li>
               ))}
               </ul>
            ) : (
               <p>
               <i>No albums</i>
               </p>
            )}

      </>
   )

}
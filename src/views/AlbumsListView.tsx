import { useLoaderData } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import AlbumTeaser from '../components/Albums/AlbumTeaser/AlbumTeaser'


export default function AlbumsListView() {

   // Type Assertion (Type Casting) - ' as ' or <AlbumsList>useLoaderData()
   // but we can't use <...? in react tsx files
   const { albums } = useLoaderData() as AlbumsList // This hook provides the value returned from your route loader.


   // to do : fade_in etc won't work since it only runs on index.html load (as w/ static edk site)
   // we need to run/initiate on every component load
   // effect fade_in on cover_block on component mounting?

   return (
      <>
      
         <HeroBanner 
            overlayHeading="albums" 
            featureImg="/assets/imgs/all-sorts-of-questions.jpg"
         />

         <h3 className="ml_2">Albums</h3>

         
         <section className="feature_tiles">
            <ul>
               {albums.length ? 
                  albums.map((album: Album) => (                 
                     <AlbumTeaser
                        key={album.id}  
                        album={album} 
                     />
                  ))
                  : (
                     <p><i>No albums</i></p>
                  )}
            </ul>
         </section>

      </>
   )

}
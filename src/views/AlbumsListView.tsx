import { useState, useEffect } from 'react'
import use_data from '../utilities/useData/useData'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import AlbumTeaser from '../components/Albums/AlbumTeaser/AlbumTeaser'


// ALbumsListView

export default function AlbumsListView() {

   // to do : verify my types setup here permits/handles []
   // to do : review - just reduce to data/error (remove 'outcome' - superfluous?)

   const [albums_list, setAlbumList] = useState<Album[] | null>()
   
   // load albums_list
   // we moved from useLoaderData to access async and context
   useEffect(() => {

      async function fetchData() {
         try {
            const { data, error, outcome } = await use_data<AlbumsList>('albums_list',[],{},null)
            if(data) {
               if(outcome === 'success') setAlbumList(data.albums_list) 
            }
            else {
               throw error
            }
         }
         catch(error) {
            console.log('error',error)
         }
      }
      fetchData()
   },[])

   return (
      <>
         <HeroBanner 
            overlayHeading="albums" 
            featureImg="/assets/imgs/all-sorts-of-questions.jpg" />

         <h3 className="ml_2">Albums</h3>

         <section className="feature_tiles">
            <ul>
               {albums_list?.length ? 
                  albums_list.map((album: Album) => (                 
                     <AlbumTeaser
                        key={album.id}  
                        album={album} />
                  ))
                  : (<p><i>No albums</i></p>)}
            </ul>
         </section>
      </>
   )
}
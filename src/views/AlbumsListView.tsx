import useData from '../hooks/useData/useData'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import AlbumTeaser from '../components/Albums/AlbumTeaser/AlbumTeaser'



// ALbumsListView

export default function AlbumsListView() {

   const { loading, payload, error } = useData<AlbumsList>('albums_list',[],{})

   if(loading) {
      return <div>loading</div>
   }

   if(error) {
      return <div>{error}</div>
   }

   if(payload) {
      return (
         <section className="albums_list_view_container" style={{marginTop:'-5rem'}}>
            <HeroBanner 
               overlayHeading="albums" 
               featureImg="all-sorts-of-questions.jpg"
            />

            <section className="feature_tiles fade_in">
               <ul>
                  {payload?.data?.albums_list?.length ?
                     payload?.data?.albums_list?.map((album: Album) => (                 
                        <AlbumTeaser
                           key={album.id}  
                           album={album} />
                     ))
                     : (<p><i>No albums</i></p>)}
               </ul>
            </section>
         </section>
      )
   }
   
}
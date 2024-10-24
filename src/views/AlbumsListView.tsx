import useFetch from '../hooks/useFetch/useFetch'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import AlbumTeaser from '../components/Albums/AlbumTeaser/AlbumTeaser'



// ALbumsListView

export default function AlbumsListView() {

   // to do : we need to make useFetch and useData into Custom Hooks
   // 1 - get useFetch working from here
   // 2 - get useData working as intermediate and then use from here w/ end-points
   //     temp use url directly w/ useFetch() here - then replace w/ useData() and 'albums_list' once end_points are re-enabled:

   const { 
      loading, data, error 
   } = useFetch<DataPackage<AlbumsList>>('/data/albums_list.json',{
      headers: {accept: "application/json"},
   },{
      immediate: true, 
   })

   if(loading) {
      return <div>loading</div>
   }

   if(error) {
      return <div>{error}</div>
   }

   // to do : verify my types setup here permits/handles empty array - []
   // to do : review - just reduce to data/error (remove 'outcome' - superfluous?)

   // to do : data?.data?.xxx is awkward - tidy up interface

   if(data) {
      console.log('GOT 2',data?.data?.albums_list)

   return (
      <>
         <HeroBanner 
            overlayHeading="albums" 
            featureImg="/assets/imgs/all-sorts-of-questions.jpg"/>

         <h3 className="ml_2">Albums</h3>

         <section className="feature_tiles">
            <ul>
               {data?.data?.albums_list?.length ? 
                  data?.data?.albums_list?.map((album: Album) => (                 
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
   
}
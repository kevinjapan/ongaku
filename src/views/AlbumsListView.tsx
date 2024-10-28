import useData from '../hooks/useData/useData'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import AlbumTeaser from '../components/Albums/AlbumTeaser/AlbumTeaser'



// ALbumsListView

export default function AlbumsListView() {

   const { loading, data, error } = useData<UseDataReturn<AlbumsList>>('/data/albums_list.json')

   if(loading) {
      return <div>loading</div>
   }

   if(error) {
      return <div>{error}</div>
   }

   // to do : verify my types setup here permits/handles empty array - []
   // to do : review - just reduce to data/error (remove 'outcome' - superfluous?)

   // to do : data?.data?.xxx is awkward and a little unclear - 
   //         works for now, but research further and re-visit types etc.

   if(data) {

      console.log('IS',data)
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
import { useEffect } from 'react'
import useData from '../hooks/useData/useData'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import AlbumTeaser from '../components/Albums/AlbumTeaser/AlbumTeaser'



// ALbumsListView

export default function AlbumsListView() {

   const { loading, payload, error } = useData<AlbumsList>('albums_list',[],{})

   useEffect(() => {
      window.scroll(0,0)
   },[])

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
               featureImg="all-sorts-of-questions.jpg"/>


         <button className="lyrics_and_links" style={{marginTop:'-3rem'}}>
            <a href="#lyrics_and_links">below the fold</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-bar-down" viewBox="0 0 16 16">
               <path fillRule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6"/>
            </svg>
         </button> 

         
         <div id="lyrics_and_links" className="fade_in"></div>

            <section className="feature_tiles fade_in pt_3 bg_lighter">
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
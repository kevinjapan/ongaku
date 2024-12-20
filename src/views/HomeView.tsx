import { useEffect } from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import AlbumTeaser from '../components/Albums/AlbumTeaser/AlbumTeaser'
import { init_fade_ins } from '../assets/js/behaviour'



// HomeView
// overlayTagline="where's your music taking you?"

export default function HomeView() {

   useEffect(() => {
      window.scroll(0,0)
      setTimeout(() => {
         init_fade_ins()
      },500)
   },[])

   // future : source dynamically (note: 'albums' folder specified here)
   const featured_albums_list = [
      {
         "id":1,
         "title":"beneath the waves",
         "slug":"albums/beneath-the-waves",
         "created_at":"6 Oct 2024",
         "feature_img":"/imgs/beneath-the-waves-cover.jpg",
         "playlist":"https://www.youtube.com/watch?v=ME1ScAtrn28&list=PLKBwV2II2uYLVaidMrnYDB_rwPp7dyPX0",
         "tracks":[]
      },
      {
         "id":2,
         "title":"river",
         "slug":"albums/river",
         "created_at":"7 Oct 2024",
         "feature_img":"/imgs/river-cover.jpg",
         "playlist":"https://www.youtube.com/watch?v=hAwR-3cld54&list=PLKBwV2II2uYJgX3ufirbhVur5WX8H-c_u",
         "tracks":[]
      },
      {
         "id":3,
         "title":"lifes a rhetorical question",
         "slug":"albums/lifes-a-rhetorical-question",
         "created_at":"8 Oct 2024",
         "feature_img":"/imgs/rhetorical-question-cover.jpg",
         "playlist":"https://www.youtube.com/watch?v=TnTlFNlFDME&list=PLKBwV2II2uYKHAhgqfQqmWhl2fT1fWnIa",
         "tracks":[]
      }
   ]

   return (
      <>
         <HeroBanner 
            overlayHeading="evolution desu ka" 
            featureImg="/imgs/soundscapes.jpg"/>

         <section className="cover_block timeline dim_40 fade_in mt_0 no_user_select">

            <img className="bg_img " src="./assets/imgs/edk-timeline-src.jpg" />

            <div className="overlay">

               <h2 className="italic font_100">iterations</h2>

               <ul className="font_1.2 text_center">
                  <li className="text_center">
                     Lost For Words<br/>
                     <span className="font_.9 font_300">2017</span>
                  </li>
                  <li>
                     Rough Not Ready<br/>
                     <span className="font_.9 font_300">2018</span>
                  </li>
                  <li>
                     Silver Bullet<br/>
                     <span className="font_.9 font_300">2018</span>
                  </li>
                  <li>
                     Life's A Rhetorical Question<br/>
                     <span className="font_.9 font_300">2018</span>
                  </li>
                  <li>
                     River<br/>
                     <span className="font_.9 font_300">2019</span>
                  </li>
                  <li>
                     The Mountain That Is<br/>
                     <span className="font_.9 font_300">2019</span>
                  </li>
                  <li>
                     Beneath The Waves<br/>
                     <span className="font_.9 font_300">2020</span>
                  </li>
                  <li>
                     Psycosomatica<br/>
                     <span className="font_.9 font_300">2021</span>
                  </li>
                  <li>
                     Clouds In The Sky<br/>
                     <span className="font_.9 font_300">2023</span>
                  </li>
               </ul>
               <button className="light_btn_hover">
                  <a href="https://www.youtube.com/@EvolutionDesuKa"
                     target="_blank"
                     style={{marginTop:'2rem',marginLeft:'auto',marginRight:'auto'}}>                  
                     YouTube Channel                  
                  </a>
               </button>
            </div>
         </section>
         
         <section className="feature_tiles bg_white fade_in">
            <ul>              
               {featured_albums_list?.length ?
                  featured_albums_list?.map((album: Album) => (                 
                     <AlbumTeaser
                        key={album.id}  
                        album={album} />
                  ))
                  : null
               }
            </ul>
         </section>
      </>
   )
   

}
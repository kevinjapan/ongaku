import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import AlbumTeaser from '../components/Albums/AlbumTeaser/AlbumTeaser'
import { init_fade_ins } from '../assets/js/behaviour'
import LeadingText from '../components/LeadingText/LeadingText'
import LeadingTextSource from '../components/LeadingTextSource/LeadingTextSource'


// HomeView
// overlayTagline="where's your music taking you?"

// to do : there are some issues w/ page refreshing / hero banner in Firefox if you access a page from below the fold on any other page
//         eg using top nav while below the fold to navigate to another page (note FF is <4% of usage - so not an important fix)

// to do : we don't have a conventional NotFound - see evolutiondesuka-wda site for example - and breaks audio playing
//         currently, breaks if we change an Album title after 'albums' folder eg :  ..\albums\xxx  
//         reports error - ok ; but shows json error !dr

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
         "tagline":"if only time stood still",
         "slug":"albums/beneath-the-waves",
         "created_at":"6 Oct 2024",
         "feature_img":"beneath-the-waves-cover.jpg",
         "playlist":"https://www.youtube.com/watch?v=ME1ScAtrn28&list=PLKBwV2II2uYLVaidMrnYDB_rwPp7dyPX0",
         "tracks":[]
      },
      {
         "id":2,
         "title":"river",
         "tagline":"it pulls you round and round in it's orbit",
         "slug":"albums/river",
         "created_at":"7 Oct 2024",
         "feature_img":"river-cover.jpg",
         "playlist":"https://www.youtube.com/watch?v=hAwR-3cld54&list=PLKBwV2II2uYJgX3ufirbhVur5WX8H-c_u",
         "tracks":[]
      },
      {
         "id":3,
         "title":"life's a rhetorical question",
         "tagline":"when nothing's secret",
         "slug":"albums/lifes-a-rhetorical-question",
         "created_at":"8 Oct 2024",
         "feature_img":"rhetorical-question-cover.jpg",
         "playlist":"https://www.youtube.com/watch?v=TnTlFNlFDME&list=PLKBwV2II2uYKHAhgqfQqmWhl2fT1fWnIa",
         "tracks":[]
      },
      {
         "id":4,
         "title":"rough not ready",
         "tagline":"",
         "slug":"albums/rough-not-ready",
         "created_at":"8 Oct 2024",
         "feature_img":"banner_mug_shot.jpg",
         "playlist":"https://www.youtube.com/watch?v=YXYO5qrHpa8&list=PLKBwV2II2uYLL4XuwLtNpT1hBArTmS-Mb",
         "tracks":[]
      },
      {
         "id":5,
         "title":"the wee song sketchbook",
         "tagline":"",
         "slug":"albums/the-wee-song-sketchbook",
         "created_at":"8 Oct 2024",
         "feature_img":"out-of-tune.jpg",
         "playlist":"https://www.youtube.com/watch?v=UMY0QSwkCNw&list=PLKBwV2II2uYJVmv8YoH1xBZZg9WH0fqxY",
         "tracks":[]
      }
   ]

   return (
      <>
         <HeroBanner 
            overlayHeading="evolution desu ka" 
            overlayTagline="where is your music taking you"
            featureImg="soundscapes.jpg"/>

         <button className="lyrics_and_links">
            <a href="#lyrics_and_links">below the fold</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-bar-down" viewBox="0 0 16 16">
               <path fillRule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6"/>
            </svg>
         </button> 

         
         <div id="lyrics_and_links" className="fade_in"></div>

         <LeadingText>
            "Sometimes when I know, that I've been travelling slowly,<br/>
            Dragging my feet behind me, and reluctant to get out of nowhere"<br/>
            <LeadingTextSource src="12 Bars" />
         </LeadingText>


         <section className="cover_block timeline dim_40 fade_in mt_0 no_user_select">

            <img className="bg_img" src="./assets/imgs/edk-timeline-src.jpg" />

            <div className="overlay">

               <h2>timeline</h2>

               <ul className="flex align_items_end font_1.2 font_100 " 
                   style={{padding:'0',margin:'2.5rem 0'}}>
                  <li className="text_center">
                     Lost For <br/>Words<br/>
                     <span className="font_.95 font_400 w_100">2017</span>
                  </li>
                  <li>
                     <Link className="link iteration_link w_100 display_block" to="/albums/rough-not-ready">
                        Rough Not <br/>Ready<br/>
                        <span className="font_.95 font_400">2018</span>
                     </Link>
                  </li>
                  <li>
                     Silver<br/> Bullet<br/>
                     <span className="font_.95 font_400">2018</span>
                  </li>
                  <li>
                     <Link className="link iteration_link w_100 display_block" to="/albums/lifes-a-rhetorical-question">
                        Life's a <br/>Rhetorical<br/> Question<br/>
                        <span className="font_.95 font_400">2018</span>
                     </Link>
                  </li>
                  <li>
                     <Link className="link iteration_link w_100 display_block" to="/albums/river">
                        River<br/>
                        <span className="font_.95 font_400">2019</span>
                     </Link>
                  </li>
                  <li>
                     The Mountain<br/> That Is<br/>
                     <span className="font_.95 font_400">2019</span>
                  </li>
                  <li>
                     <Link className="link iteration_link w_100 display_block" to="/albums/beneath-the-waves">
                        Beneath <br/>The Waves<br/>
                        <span className="font_.95 font_400">2020</span>
                     </Link>
                  </li>
                  <li>
                     Psycosomatica<br/>
                     <span className="font_.95 font_400">2021</span>
                  </li>
                  <li>
                     Clouds In<br/>The Sky<br/>
                     <span className="font_.95 font_300">2023</span>
                  </li>
               </ul>
               <button className="light_btn_hover channel_cta">
                  <a href="https://www.youtube.com/@EvolutionDesuKa"
                     target="_blank"
                     style={{marginTop:'2rem',marginLeft:'auto',marginRight:'auto'}}>                  
                     YouTube Channel                  
                  </a>
               </button>
            </div>
         </section>

         
         <LeadingText>
            "Just because it's in the general consensus,<br/>
            Doesn't mean that there's that much common sense in us"
            <LeadingTextSource src="Tell Me How You See Me" />
         </LeadingText>


         <section className="feature_tiles bg_white fade_in bg_lighter">
               <h2>albums</h2>

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
         
         
         <LeadingText>
               "What'd I have to do, just tell me, what's your desire?<br/>
               If I could turn back the hands, I would",
            <LeadingTextSource src="Tether" />
         </LeadingText>


      </>
   )
   

}
import { useEffect } from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import { init_fade_ins } from '../assets/js/behaviour'



// HomeView
// overlayTagline="where's your music taking you?"

export default function HomeView() {


   useEffect(() => {
      setTimeout(() => {
         init_fade_ins()
      },500)
   },[])


   return (
      <>
         <HeroBanner 
            overlayHeading="evolution desu ka" 
            featureImg="/imgs/soundscapes.jpg"
         />

{/* to do : 
   - gap appearing above timeline dimmer - remove yellow border on section 
   - font color over timeline
   - fix links on this page
*/}
         <section 
            className="cover_block timeline dim_40 fade_in mt_0"
            
            style={{margin:0,border:'solid 3px yellow'}}
            >

            <img className="bg_img " src="./assets/imgs/edk-timeline-src.jpg" />

            <div className="overlay">
                  <h2 style={{fontWeight:300}}>iterations</h2>
               <ul style={{fontSize:'1.2rem'}}>
                  <li>
                     lost for words<br/>
                     <span style={{fontSize:'.9rem'}}>2017</span>
                  </li>
                  <li>
                     rough not ready<br/>
                     <span style={{fontSize:'.9rem'}}>2018</span>
                  </li>
                  <li>
                     silver bullet<br/>
                     <span style={{fontSize:'.9rem'}}>2018</span>
                  </li>
                  <li>
                     life's a rhetorical question<br/>
                     <span style={{fontSize:'.9rem'}}>2018</span>
                  </li>
                  <li>
                     river<br/>
                     <span style={{fontSize:'.9rem'}}>2019</span>
                  </li>
                  <li>
                     the mountain that is<br/>
                     <span style={{fontSize:'.9rem'}}>2019</span>
                  </li>
                  <li>
                     beneath the waves<br/>
                     <span style={{fontSize:'.9rem'}}>2020</span>
                  </li>
                  <li>
                     psycosomatica<br/>
                     <span style={{fontSize:'.9rem'}}>2021</span>
                  </li>
                  <li>
                     clouds in the sky<br/>
                     <span style={{fontSize:'.9rem'}}>2023</span>
                  </li>
               </ul>
               <a href="https://www.youtube.com/@EvolutionDesuKa"
               //  target=”_blank” 
                  style={{marginTop:'2rem',marginLeft:'auto',marginRight:'auto'}}>
                  <button>
                     YouTube Channel
                  </button>
               </a>
            </div>
         </section>

         {/* to do : add target="_blank" equivalent to following links */}
         
         <section className="feature_tiles bg_white fade_in">
            <ul>
               <li>
                  <img src="/imgs/rhetorical-question-cover-sm.jpg" />
                  <h4>life's a rhetorical question</h4>
                  <button><a href="rhetorical-question.html">Tracks & Lyrics</a></button>
                  <button><a href="https://www.youtube.com/watch?v=TnTlFNlFDME&list=PLKBwV2II2uYKHAhgqfQqmWhl2fT1fWnIa"> YouTube Playlist</a></button>
               </li>
               <li>
                  <img src="./assets/imgs/river-cover-sm.jpg" />
                  <h4>river</h4>
                  <button><a href="river.html">Tracks & Lyrics</a></button>
                  <button><a href="https://www.youtube.com/watch?v=hAwR-3cld54&list=PLKBwV2II2uYJgX3ufirbhVur5WX8H-c_u"> YouTube Playlist</a></button>
               </li>
               <li>
                  <img src="./assets/imgs/beneath-the-waves-cover-sm.jpg" />
                  <h4>beneath the waves</h4>
                  <button><a href="beneath-the-waves.html">Tracks & Lyrics</a></button>
                  <button><a href="https://www.youtube.com/watch?v=ME1ScAtrn28&list=PLKBwV2II2uYLVaidMrnYDB_rwPp7dyPX0"> YouTube Playlist</a></button>
               </li>
            </ul>
         </section>
      </>
   )
   

}
import { useState, useEffect } from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import Album from '../components/Albums/Album/Album'


// AlbumView
// layout wrapper around Album to prevent HeroBanner re-rendering/mounting every time we load a new album

export default function AlbumView() {

   const [title, setTitle] = useState('')
   const [tagline, setTagline] = useState('')
   const [feature_img, setFeatureImg] = useState('')

   useEffect(() => {
      window.scroll(0,0)
   },[])
   useEffect(() => {
      window.scroll(0,0)
   })

   return (
      <>
         <HeroBanner 
            overlayHeading={title}
            overlayTagline={tagline}
            featureImg={feature_img}
         />

         <button className="lyrics_and_links">
            <a href="#lyrics_and_links">below the fold</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-bar-down" viewBox="0 0 16 16">
               <path fillRule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6"/>
            </svg>
         </button> 

         <div id="lyrics_and_links" className="fade_in"></div>

         <Album 
            set_title={setTitle}
            set_tagline={setTagline}
            set_feature_img={setFeatureImg}
         />
               
      </>
   )
   
}
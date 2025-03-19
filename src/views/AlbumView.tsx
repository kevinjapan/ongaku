import { useState, useEffect } from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import Album from '../components/Albums/Album/Album'


// AlbumView
// layout wrapper around Album to prevent HeroBanner re-rendering/mounting every time we load a new album

export default function AlbumView() {

   const [title, setTitle] = useState('')
   const [feature_img, setFeatureImg] = useState('')

   useEffect(() => {
      window.scroll(0,0)
   },[])

   return (
      <>
         <HeroBanner 
            overlayHeading={title}
            featureImg={feature_img}
         />

         <Album 
            set_title={setTitle}
            set_feature_img={setFeatureImg}
         />
               
      </>
   )
   
}
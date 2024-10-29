import { useState } from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import Album from '../components/Albums/Album/Album'

// to do : we have duplicate same video link in json files:
// i dont want to be here anymore / release your love / this picture
// to do : backup track json files to github?


// AlbumView
// layout wrapper around Album to prevent HeroBanner re-rendering/mounting every time we load a new album

export default function AlbumView() {

   const [title, setTitle] = useState('')
   const [feature_img, setFeatureImg] = useState('')

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
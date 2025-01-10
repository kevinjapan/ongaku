import { useState, useEffect } from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner'
// import Album from '../components/Albums/Album/Album'


// AlbumView
// layout wrapper around Album to prevent HeroBanner re-rendering/mounting every time we load a new album

export default function NewView() {

   const [title, setTitle] = useState('this is NewView')
   const [feature_img] = useState('/imgs/edk-workstation.jpg')

   useEffect(() => {
      window.scroll(0,0)
   },[])
   
   setTimeout(() => {
      setTitle('new title')
      // setFeatureImg('/imgs/edk-workstation.jpg')
   },3000)


   return (
      <>
         <HeroBanner 
            overlayHeading={title}
            featureImg={feature_img}
         />         
         {/* <Album 
            set_title={setTitle}
            set_feature_img={setFeatureImg}
         /> */}
      </>
   )
   
}
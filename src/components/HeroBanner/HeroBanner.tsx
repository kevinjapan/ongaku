import { useEffect } from 'react'


            
// future : review - for some reason, sometimes doesn't invoke fade_in

export default function HeroBanner(props: HeroBannerProps) {

   // set initial state on mount
   useEffect(() => {
         const cover_img = document.querySelector('.hero_block')
         if(cover_img) {
            cover_img.classList.remove('pre_fade_in')
            setTimeout(() => cover_img.classList.add('fade_in'),100)
         }
   },[])

   // reset img styles on props featureImg change
   useEffect(() => {
      const cover_img = document.querySelector('.hero_block')
      if(cover_img) {
         // reset initial pre_fade state
         cover_img.classList.remove('fade_in')
         cover_img.classList.add('pre_fade_in')
         // run fade_in
         setTimeout(() => cover_img.classList.remove('pre_fade_in'),100)
         setTimeout(() => cover_img.classList.add('fade_in'),100)
      }      
   },[props.featureImg])


   return (
      <section className="cover_block hero_block bg_navy dim_20 pre_fade_in">
         <img className="bg_img" src={props.featureImg} />
         <div className="overlay ">
            <h1>{props.overlayHeading}</h1>
            {props.overlayTagline ? <h4>{props.overlayTagline}</h4> : null}
         </div>
      </section>
   )
}
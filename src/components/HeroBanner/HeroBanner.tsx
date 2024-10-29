import { useRef, useEffect } from 'react'



// HeroBanner
// effects fade-out prev img and fade-in new img

export default function HeroBanner(props: HeroBannerProps) {

   // useRef to store local_prev_feature_img w/out requiring as dependancy on useEffect
   const local_prev_feature_img = useRef<string>('')

   // reset img styles on props.featureImg change
   useEffect(() => {
      
      if(local_prev_feature_img.current === props.featureImg) return
      const cover_img = document.querySelector('.feature_img')      
      if(cover_img) {

         // reset initial pre_fade state
         cover_img.classList.remove('fade_in')
         cover_img.classList.add('pre_fade_in')

         // run fade_in
         setTimeout(() => cover_img.classList.remove('pre_fade_in'),200)
         setTimeout(() => cover_img.classList.add('fade_in'),200)

         // store prev img
         if(props.featureImg && props.featureImg !== "") local_prev_feature_img.current = props.featureImg
      } 
   },[props.featureImg])

   return (
      <section className="cover_block hero_block bg_navy dim_20 ">
         <img className="bg_img prev_feature_img z_n1" src={local_prev_feature_img.current} />
         <img className="bg_img feature_img pre_fade_in" src={props.featureImg} />
         <div className="overlay ">
            <h1>{props.overlayHeading}</h1>
            {props.overlayTagline ? <h4>{props.overlayTagline}</h4> : null}
         </div>
      </section>
   )
}
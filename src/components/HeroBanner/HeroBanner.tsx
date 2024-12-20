import { useRef, useState, useEffect } from 'react'
import TypeInTitle from '../TypeInTitle/TypeInTitle'



// HeroBanner

// to do : bug - title type_in_from_left doesn't work well with long titles (they stack vertically first...)

// - fade-out prev img and fade-in new img
// - slide in overlay texts

interface HeroBannerProps {
   overlayHeading:string,
   overlayTagline?:string,
   featureImg:string,
}

export default function HeroBanner(props: HeroBannerProps) {

   // useRef to store local_prev_feature_img w/out requiring as dependancy on useEffect
   const local_prev_feature_img = useRef<string>('')

   const [heading, setHeading] = useState<string>('')

   // reset img styles on props.featureImg change
   useEffect(() => {
      
      if(local_prev_feature_img.current === props.featureImg) return

      const overlay_text = document.querySelector('.overlay')
      overlay_text?.classList.remove('type_in_from_left')
      setTimeout(() => setHeading(props.overlayHeading),1000)
      
      const cover_img = document.querySelector('.feature_img')   
      if(cover_img && overlay_text) {

         // reset initial pre_fade state
         cover_img.classList.remove('cover_fade_in')
         cover_img.classList.add('pre_cover_fade_in')

         // run cover_fade_in
         setTimeout(() => cover_img.classList.remove('pre_cover_fade_in'),200)
         setTimeout(() => cover_img.classList.add('cover_fade_in'),200)
         
         // future: scrolling text integration still a bit fragile - how about a separate component for ScrollingHeading
         setTimeout(() => {
            overlay_text?.classList.add('type_in_from_left')
            setHeading(props.overlayHeading)
         },600)

         // store prev img
         if(props.featureImg && props.featureImg !== "") local_prev_feature_img.current = props.featureImg


      } 
   },[props])

   return (
      <section className="cover_block hero_block bg_navy dim_30">
         <img className="bg_img prev_feature_img z_n1" src={local_prev_feature_img.current} />
         <img className="bg_img feature_img pre_cover_fade_in" src={props.featureImg} />

         <TypeInTitle title={heading} tagline={props.overlayTagline} />
         {/* <div className="overlay type_in_from_left_init">
            <h1 className="no_user_select letter_1">{heading}</h1>
            {props.overlayTagline ? <h4>{props.overlayTagline}</h4> : null}
         </div> */}
      </section>
   )
}
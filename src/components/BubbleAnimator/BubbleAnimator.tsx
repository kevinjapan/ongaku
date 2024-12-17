import { useContext } from 'react'
import { AppContext } from '@/context/AppContext'


// BubbleAnimator
// we use each of the scheme bg colors for variation

export default function BubbleAnimator() {

   const { show_bubbles } = useContext(AppContext)
   
   return (     
      <> 
         {show_bubbles ?
            <>
               <div id="bubble_primary" className="bubble bg_primary float_up fade_out_slow"></div>
               <div id="bubble_primary_lighter" className="bubble bg_primary_lighter float_up fade_out_slow"></div>
               <div id="bubble_secondary" className="bubble bg_secondary float_up fade_out_slow"></div>
               <div id="bubble_secondary_lighter" className="bubble bg_secondary_lighter float_up fade_out_slow"></div>
               <div id="bubble_light" className="bubble bg_light float_up fade_out_slow"></div>
               <div id="bubble_light_lighter" className="bubble bg_light_lighter float_up fade_out_slow"></div>
               <div id="bubble_dark" className="bubble bg_dark float_up fade_out_slow"></div>
               <div id="bubble_dark_lighter" className="bubble bg_dark_lighter float_up fade_out_slow"></div>
               <div id="bubble_accent" className="bubble bg_accent float_up fade_out_slow"></div>
               <div id="bubble_accent_lighter" className="bubble bg_accent_lighter float_up fade_out_slow"></div>
            </>
         :  null}
      </>
   )
}
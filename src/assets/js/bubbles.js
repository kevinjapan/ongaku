
//    BUBBLES ANIMATION
//    css opacity transition timing on bubbles is important and interplays w/ interval timing below

// We randomly select from props sets 
// [left width height]
const bubble_props = [
   ['02%','100%','100%'],
   ['18%','100%','100%'],
   ['23%','100%','100%'],
   ['27%','100%','100%'],
   ['35%','100%','100%'],
   ['42%','100%','100%'],
   ['47%','100%','100%'],
   ['56%','100%','100%'],
   ['66%','100%','100%'],
   ['72%','100%','100%'],
]


class Bubble {

   constructor(id,duration) {
      this.id = id
      this.duration = duration
   }

   bubble_re_init() {
      let bubble = document.querySelector(this.id)
      if(bubble) {
         bubble.style.opacity = '0'
         bubble.classList.remove('floated_up')
      }
   }

   bubble_up() {
      let bubble = document.querySelector(this.id)
      if(bubble) {
         // randomly select from bubble_props
         const index = Math.floor(Math.random() * 10)
         bubble.style.opacity = '.1'
         bubble.style.left = bubble_props[index][0] 
         bubble.style.width = bubble_props[index][1] 
         bubble.style.height = bubble_props[index][2] 
         if(bubble) {bubble.classList.add('floated_up')}
         setTimeout(this.bubble_re_init.bind(this),this.duration - 500) // timing matters
         setTimeout(this.bubble_up.bind(this),this.duration)
      }
   }
}

const bubble_primary = new Bubble('#bubble_primary',7000)
const bubble_primary_lighter = new Bubble('#bubble_primary_lighter',8000)
const bubble_secondary = new Bubble('#bubble_secondary',16000)
const bubble_secondary_lighter = new Bubble('#bubble_secondary_lighter',16000)
const bubble_light = new Bubble('#bubble_light',11000)
const bubble_light_lighter = new Bubble('#bubble_light_lighter',11000)
const bubble_dark = new Bubble('#bubble_dark',17000)
const bubble_dark_lighter = new Bubble('#bubble_dark_lighter',17000)
const bubble_accent = new Bubble('#bubble_accent',12000)
const bubble_accent_lighter = new Bubble('#bubble_accent_lighter',12000)


// we re-enable if user clicks 'back' button - basically groups 'back' events w/ all onloads.
window.onload=window.onpageshow= function() {
   
   // delay to let divs render
   setTimeout(() => {
      //    Init Bubbles Animation
      //    the duration param must match the transition time in edk-outline-utilities.css
      //    we delay some initial calls to space out
      bubble_primary.bubble_up()
      bubble_dark_lighter.bubble_up()
      bubble_accent_lighter.bubble_up()
      setTimeout(bubble_secondary_lighter.bubble_up(),200)
      setTimeout(bubble_dark.bubble_up(),300)
      setTimeout(bubble_primary_lighter.bubble_up(),400)
      setTimeout(bubble_secondary.bubble_up(),600)
      setTimeout(bubble_light.bubble_up(),750)
      setTimeout(bubble_light_lighter.bubble_up(),800)
      setTimeout(bubble_accent.bubble_up(),900)
   },500)

}



//    Init .fade_in

const init_fade_ins = () => {
   const faders = document.querySelectorAll('.fade_in')
   const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px"
   }
   return create_observers(faders,'appear',appearOptions)
}


//    Init .fade_in_special

const init_fade_in_specials = () => {
   const faders = document.querySelectorAll('.fade_in_special')
   const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px 0px 0px"
   }
   return create_observers(faders,'appear_special',appearOptions)
}


//    Init .fade_in

const init_slide_ins = () => {
   const faders = document.querySelectorAll('.slide_in_from_left_init')
   const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px"
   }
   return create_observers(faders,'slide_in_from_left',appearOptions)
}
const init_fade_in_slows = () => {
   const slow_faders = document.querySelectorAll('.fade_in_slow')
   const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px"
   }
   return create_observers(slow_faders,'appear_slow',appearOptions)
}
const init_zoom_ins = () => {
   const zoomers = document.querySelectorAll('.zoom_in')
   const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px"
   }
   return create_observers(zoomers,'zoomed_in',appearOptions)
}




//    Create IntersectionObservers

const create_observers = (elements,active_class,options) => {

   let observers_created = false

   const appearOnScroll = new IntersectionObserver(
      function(entries,appearOnScroll){
         entries.forEach(entry => {
            if(!entry.isIntersecting) return
            entry.target.classList.add(active_class)
            appearOnScroll.unobserve(entry.target)
         })
   },options)

   if(elements) {
      elements.forEach(element => {
         appearOnScroll.observe(element)
      })
      observers_created = true
   }
   return observers_created
}





//    BUBBLES ANIMATION
//    css opacity transition timing on bubbles is important and interplays w/ interval timing below

const bubbles = [
   '#bubble_primary',
   '#bubble_primary_lighter',
   '#bubble_secondary',
   '#bubble_secondary_lighter',
   '#bubble_light',
   '#bubble_light_lighter',
   '#bubble_dark',
   '#bubble_dark_lighter',
   '#bubble_accent',
   '#bubble_accent_lighter',
]

const durations = {
   bubble_primary:"5000",
   bubble_primary_lighter:"10000",
   bubble_secondary:"10000",
   bubble_secondary_lighter:"10000",
   bubble_light:"10000",
   bubble_light_lighter:"10000",
   bubble_dark:"10000",
   bubble_dark_lighter:"10000",
   bubble_accent:"10000",
   bubble_accent_lighter:"10000",
}

//    We randomly select from props sets.
//    bottom left width height 
const bubble_props = [
   ['090%','02%','100%','100%'],
   ['035%','08%','100%','100%'],
   ['100%','13%','100%','100%'],
   ['070%','19%','100%','100%'],
   ['100%','73%','100%','100%'],
   ['060%','35%','100%','100%'],
   ['080%','25%','100%','100%'],
   ['055%','56%','100%','100%'],
   ['100%','72%','100%','100%'],
   ['045%','05%','100%','100%'],
]


class Bubble {

   constructor(id,bottom,left,width,height,duration) {
      this.id = id
      this.bottom = bottom
      this.left = left
      this.width = width
      this.height = height
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
         bubble.style.left = bubble_props[index][1] 
         bubble.style.width = bubble_props[index][2] 
         bubble.style.height = bubble_props[index][3] 
         if(bubble) {bubble.classList.add('floated_up')}
         setTimeout(this.bubble_re_init.bind(this),this.duration - 500)    // timing matters!
         setTimeout(this.bubble_up.bind(this),this.duration)
      }
   }
}

const bubble_primary = new Bubble('#bubble_primary','100%','10%','20%','10%',7000)
const bubble_primary_lighter = new Bubble('#bubble_primary_lighter','100%','10%','20%','10%',8000)
const bubble_secondary = new Bubble('#bubble_secondary','100%','10%','20%','10%',16000)
const bubble_secondary_lighter = new Bubble('#bubble_secondary_lighter','100%','10%','20%','10%',16000)
const bubble_light = new Bubble('#bubble_light','100%','10%','20%','10%',11000)
const bubble_light_lighter = new Bubble('#bubble_light_lighter','100%','10%','20%','10%',11000)
const bubble_dark = new Bubble('#bubble_dark','100%','10%','20%','10%',17000)
const bubble_dark_lighter = new Bubble('#bubble_dark_lighter','100%','10%','20%','10%',17000)
const bubble_accent = new Bubble('#bubble_accent','100%','10%','20%','10%',12000)
const bubble_accent_lighter = new Bubble('#bubble_accent_lighter','100%','10%','20%','10%',12000)




//    AUDIO
//    we load audio clip files only when clicked 
//    basic setup - we currently re-load files each time clicked

const music_notes = document.querySelectorAll('.music_note')
let active_audio_clip = null    // we overwrite any previous playing..
let active_path = ""
let user_volume_setting = .5

if(music_notes) {
   
   music_notes.forEach((music_note) => {
      
      music_note.addEventListener('click', (event) => {

         // remove grey-out on all music_notes
         music_notes.forEach((music_note) => {
            music_note.classList.remove('greyed_out')
         })

         let audio_file_path = event.target.dataset.audioFile

         // we track if already playing..
         if(audio_file_path === active_path) {
            active_audio_clip.pause()
            active_path = ''
            return
         }
         active_path = audio_file_path

         // we load the file
         if(active_audio_clip) active_audio_clip.pause()     // permits garbage-collection on next line
         active_audio_clip = new Audio(audio_file_path)

         // play the file / handle errors
         if(active_audio_clip) {
            if(active_audio_clip.paused) {
               active_audio_clip.volume = user_volume_setting
               active_audio_clip.play().catch(error => {
                  console.log('The source audio file was not found.')
                })
                // indicate active playing
                music_note.classList.add('greyed_out')
             }
             else {
               active_audio_clip.pause()
             }
         }
      })
   });
}


//    AUDIO VOLUME
//    the volume is a single global setting for each page
//    future: cookie to persist setting across pages?

let volume_controls = document.querySelectorAll(".volume_control")

if(volume_controls) {
   
   volume_controls.forEach((volume_control) => {

      volume_control.addEventListener("input", function(e) {
         if(active_audio_clip) {
            active_audio_clip.volume = e.currentTarget.value / 100
            user_volume_setting = e.currentTarget.value / 100

            // synch all volume ctrls
            volume_controls.forEach((volume_control) => {
               volume_control.value = e.currentTarget.value
            })
         }
      })
   })
}




//    DYNAMIC NAV BAR
//    hides when user is scrolling down
//    to prevent nav disappearing in ios safari bounce, we don't hide < 80px from top

const init_nav_scroll_listener = () => {

   let last_scroll = 0
   const nav_bar = document.querySelector('nav')

   if(nav_bar) {
      window.addEventListener('scroll', () => {
         let current_scroll = window.scrollY         
         if((current_scroll > last_scroll) && (current_scroll > 80)) {
            nav_bar.classList.add('invisible_nav')    // user is scrolling downwards - hide nav bar ( if below 80px )
         } else {
            nav_bar.classList.remove('invisible_nav')    // scrolling upwards - show hide bar
         }
         last_scroll = current_scroll
      })
   }
}


//    NAV TRANSPARENCY
//    nav is transparent over Cover Blocks with class .hero_block

const init_nav_behaviour = () => {

   const nav = document.querySelector('.nav')
   const frontcover = document.querySelectorAll('.hero_block') // only interested in first one
   
   const newOptions = {
      threshold: 0,
      rootMargin: "-400px 0px 0px 0px"
   }
   if(nav) {
      const modifyNav = new IntersectionObserver(
         function(entries,modifyNav){
            if(nav) {
               entries.forEach(entry => {
                  if(!entry.isIntersecting) {
                     nav.classList.remove('transparent')
                  } else {
                     nav.classList.add('transparent')
                  }
                  //modifyNav.unobserve(entry.target)
               })
            }
      },newOptions)
      if(frontcover.length > 0) {
         nav.classList.add('transparent')
         frontcover.forEach(frontcover => {
            modifyNav.observe(frontcover)
         })
      }  
   }
}



//    MOBILE MENU TOGGLE
//
// const nav_toggle = document.querySelector('.nav_toggle')
// const dropdown = document.querySelector('nav ul.nav_list')

// nav_toggle.addEventListener('click',() => {
//    if(dropdown) {
//       // drop the nav list
//       dropdown.classList.toggle('extended_nav_dropdown')
//       // modify the toggle      
//       nav_toggle.classList.toggle('selected_toggle')
//    }
// })



//    retract dropdown on item clicked.

const menu_items = document.querySelectorAll('.menu-item')

menu_items.forEach((menu_item) => {
   menu_item.addEventListener('click',() => {
      if(dropdown) {
         dropdown.classList.remove('extended_nav_dropdown')
      }
      
      // Fade out any 'fade_in' class elements while waiting for new page.
      // Does rely on fade out (.fade_in) being quick or looks awkward.
      const faders = document.querySelectorAll('.fade_in')
      if(faders) {
         faders.forEach(fader => {
            fader.classList.toggle('appear')
         })
      }
   })
})



//    initialise INTERSECTION OBSERVERS and EVENTLISTENERS
// 
//    we've wrapped in window event since 'fade_in's are not activated if we access page 
//    by 'back' button - also, clicking on href="#" - fails to 'fade_in' first element on page..
//    so we have to intercept and re-enable on these events:
// we re-enable if user clicks 'back' button - basically groups 'back' events w/ all onloads.

window.onload=window.onpageshow= function() {

   init_nav_behaviour()
   init_fade_ins()
   init_slide_ins()
   init_fade_in_specials()
   init_fade_in_slows()
   init_zoom_ins()
   init_nav_scroll_listener()

   //
   //    Init Bubbles Animation
   //    the duration param must match the transition time in edk-outline-utilities.css
   //    we delay some initial calls to space out
   //
   bubble_primary.bubble_up()
   setTimeout(bubble_primary_lighter.bubble_up(),1500)
   setTimeout(bubble_secondary.bubble_up(),2800)
   setTimeout(bubble_secondary_lighter.bubble_up(),3200)
   setTimeout(bubble_light.bubble_up(),2000)
   setTimeout(bubble_light_lighter.bubble_up(),4000)
   setTimeout(bubble_dark.bubble_up(),5100)
   bubble_dark_lighter.bubble_up()
   setTimeout(bubble_accent.bubble_up(),700)
   bubble_accent_lighter.bubble_up()

}

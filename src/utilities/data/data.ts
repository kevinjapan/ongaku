
// to do : replace this temp static dataset for dev
export function get_nav_links () {
   return [
      {
         label:'Albums',
         route:'albums',
         children:[
            {
               id:1,
               label:'beneath the waves',
               route:'/beneath-the-waves'
            },
            {
               id:2,
               label:'river',
               route:'/river'
            },
            {
               id:3,
               label:"life's a rhetorical question",
               route:'/lifes-a-rhetorical-question'
            },
            {
               id:4,
               label:'rough not ready',
               route:'/rough-not-ready'
            },
            {
               id:5,
               label:'the wee song sketchbook',
               route:'/the-wee-song-sketchbook'
            }
         ]
      },
      {label:'About',route:'about',
         children:[
            {
               id:1,
               label:'beneath the waves',
               route:'/beneath-the-waves'
            },]},
   ]
}
// to do : locate this somewhere better (not in utilities)

export function get_nav_links () {
   return [
      {
         label:'Albums',
         route:'albums',
         children:[
            {
               id:1,
               label:'beneath the waves',
               route:'albums/beneath-the-waves'
            },
            {
               id:2,
               label:'river',
               route:'albums/river'
            },
            {
               id:3,
               label:"life's a rhetorical question",
               route:'albums/lifes-a-rhetorical-question'
            },
            {
               id:4,
               label:'rough not ready',
               route:'albums/rough-not-ready'
            },
            {
               id:5,
               label:'the wee song sketchbook',
               route:'albums/the-wee-song-sketchbook'
            }
         ]
      },
      {label:'About',route:'about',
         children:[
            {
               id:1,
               label:'about',
               route:'/about'
            },]},
   ]
}
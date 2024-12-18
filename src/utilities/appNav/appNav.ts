
export function get_nav_links () {
   return [
      {
         id:1,
         label:'Albums',
         route:'albums',
         children:[
            {
               id:100,
               label:'albums',
               route:'albums',
               children: [
                  {
                     id:101,
                     label:'beneath the waves',
                     route:'albums/beneath-the-waves'
                  },
                  {
                     id:102,
                     label:'river',
                     route:'albums/river'
                  },
                  {
                     id:103,
                     label:"life's a rhetorical question",
                     route:'albums/lifes-a-rhetorical-question'
                  }
               ]
            },
            {
               id:200,
               label:'collections',
               route:'collections',
               children: [
                  {
                     id:204,
                     label:'rough not ready',
                     route:'albums/rough-not-ready'
                  },
                  {
                     id:205,
                     label:'the wee song sketchbook',
                     route:'albums/the-wee-song-sketchbook'
                  }
               ]
            }
         ]
      },
      {
         id:2,
         label:'About',
         route:'about',
         children:[
            {
               id:2001,
               label:'about',
               route:'/about'
            }
         ]
      }
   ]
}
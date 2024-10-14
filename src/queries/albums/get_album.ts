

// to do : get data set dynamically w/ useData equivalent (server and json files static versions)
export function get_album(slug: string) {

   const temp_albums_list = {
      'beneath-the-waves':{
         id:1,
         title:'beneath the waves',
         slug:'beneath-the-waves',
         created_at:'6 Oct 2024',
         feature_img:'/assets/imgs/tell-me-how-you-see-me.jpg'
      },
      'river':{
         id:2,
         title:'river',
         slug:'river',
         created_at:'7 Oct 2024',
         feature_img:'/assets/imgs/tether.jpg'
      },
      'lifes-a-rhetorical-question':{
         title:'lifes a rhetorical question',
         slug:'lifes-a-rhetorical-question',
         created_at:'8 Oct 2024',
         feature_img:'/assets/imgs/rhetorical-question-cover.jpg'                    
      },
      'rough-not-ready':{
         title:'rough not ready',
         slug:'rough-not-ready',
         created_at:'8 Oct 2024',
         feature_img:'/assets/imgs/the-crashing-waves.jpg'                    
      },
      'the-wee-song-sketchbook':{
         title:'the wee song sketchbook',
         slug:'the-wee-song-sketchbook',
         created_at:'8 Oct 2024',
         feature_img:'/assets/imgs/the-crashing-waves.jpg'                    
      }
   }
   return temp_albums_list[slug as keyof typeof temp_albums_list]
}
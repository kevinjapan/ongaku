
// to do : get data set dynamically w/ useData equivalent (server and json files static versions)
export function get_albums_list() {

   return {
      albums: [
         {
            id:1,
            title:'beneath the waves',
            slug:'beneath-the-waves',
            created_at:'6 Oct 2024',
            feature_img:'/assets/imgs/beneath-the-waves-cover.jpg'
         },
         {
            id:2,
            title:'river',
            slug:'river',
            created_at:'7 Oct 2024',
            feature_img:'/assets/imgs/river-cover.jpg'
         },
         {
            id:3,
            title:'lifes a rhetorical question',
            slug:'lifes-a-rhetorical-question',
            created_at:'8 Oct 2024',
            feature_img:'/assets/imgs/rhetorical-question-cover.jpg'
         },
         {
            id:4,
            title:'rough not ready',
            slug:'rough-not-ready',
            created_at:'8 Oct 2024',
            feature_img:'/assets/imgs/banner_mug_shot.jpg'
         },
         {
            id:5,
            title:'the wee song sketchbook',
            slug:'the-wee-song-sketchbook',
            created_at:'8 Oct 2024',
            feature_img:'/assets/imgs/out-of-tune.jpg'
         }
      ]
   }
}
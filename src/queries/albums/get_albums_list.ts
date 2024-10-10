
// to do : get data set dynamically w/ useData equivalent (server and json files static versions)
export function get_albums_list() {

   return {
      albums: [
         {
            id:1,
            title:'first album',
            slug:'first-album',
            created_at:'6 Oct 2024',
            feature_img:'/assets/imgs/tell-me-how-you-see-me.jpg'
         },
         {
            id:2,
            title:'second album',
            slug:'second-album',
            created_at:'7 Oct 2024',
            feature_img:'/assets/imgs/tether.jpg'
         },
         {
            id:3,
            title:'third album',
            slug:'third-album',
            created_at:'8 Oct 2024',
            feature_img:'/assets/imgs/the-crashing-waves.jpg'
         }
      ]
   }
}
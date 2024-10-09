

export function get_album(slug: string) {

   const temp_albums_list = {
      'first-album':{
         id:1,
         title:'first album',
         slug:'first-album',
         created_at:'6 Oct 2024'
      },
      'second-album':{
         id:2,
         title:'second album',
         slug:'second-album',
         created_at:'7 Oct 2024'
      },
      'third-album':{
         id:3,
         title:'third album',
         slug:'third-album',
         created_at:'8 Oct 2024'
      }
   }

   // return <Album>temp_albums_list[slug as keyof typeof temp_albums_list] // to do : review need <Album> ?
   return temp_albums_list[slug as keyof typeof temp_albums_list]
}
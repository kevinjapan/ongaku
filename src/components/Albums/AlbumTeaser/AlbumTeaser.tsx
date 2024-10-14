


// Components have only one parameter which is the props object,
// so type we them by applying types inside the props:

export default function AlbumTeaser(props: { album: Album }) {

   // to do :  target=”_blank” in youtube link below

   return (
            <li>
               <img src={props.album.feature_img} />
               <h4>{props.album.title}</h4>
               <button><a href={props.album.slug}>Tracks & Lyrics</a></button>
               <button><a href="https://www.youtube.com/watch?v=ME1ScAtrn28&list=PLKBwV2II2uYLVaidMrnYDB_rwPp7dyPX0">YouTube Playlist</a></button>
            </li>
   )
}
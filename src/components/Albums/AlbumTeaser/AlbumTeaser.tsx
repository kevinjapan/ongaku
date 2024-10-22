import { Link } from 'react-router-dom'


export default function AlbumTeaser(props: { album: Album }) {

   return (
      <li className="flex flex_col gap_1">
         <img src={props.album.feature_img} />
         <h4>{props.album.title}</h4>
         <div className="flex px_2 space_around">
            <Link className="link" to={props.album.slug} >Tracks & Lyrics</Link>      
            {props.album.playlist && <a href={props.album.playlist} target="_blank">YouTube Playlist</a>}
         </div>
      </li>
   )
}
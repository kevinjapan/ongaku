import { Link, useNavigate } from 'react-router-dom'




export default function AlbumTeaser(props: { album: Album }) {

   const navigate = useNavigate()

   const open_album = () => {
      navigate(props.album.slug)
   }

   return (
      <li className="flex flex_col gap_1">
         <img src={props.album.feature_img} onClick={open_album} className="cursor_pointer" />
         <h4 onClick={open_album}>{props.album.title}</h4>
         <div className="flex px_2 space_around">
            <Link className="link" to={props.album.slug} >Tracks & Lyrics</Link>      
            {props.album.playlist && <a href={props.album.playlist} target="_blank">YouTube Playlist</a>}
         </div>
      </li>
   )
}
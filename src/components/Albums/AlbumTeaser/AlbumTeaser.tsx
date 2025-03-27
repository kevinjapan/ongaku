import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { init_fade_ins } from '../../../assets/js/behaviour'




export default function AlbumTeaser(props: { album: Album }) {

   const navigate = useNavigate()

   useEffect(() => {
      window.scroll(0,0)
      setTimeout(() => {
         init_fade_ins()
      },500)
   },[])

   const open_album = () => {
      navigate(props.album.slug)
   }

   return (
      <li className="album_teaser flex flex_col gap_1 no_user_select">
         <img src={props.album.feature_img} onClick={open_album} className="cursor_pointer album_teaser_img" />
         <h4 onClick={open_album} className="cursor_pointer m_0 p_0 ml_2">{props.album.title}</h4>
         <div className="flex px_2 space_around">
            <button><Link className="link" to={props.album.slug} >Tracks & Lyrics</Link></button>
            <button>{props.album.playlist && <a href={props.album.playlist} target="_blank">YouTube Playlist</a>}</button>
         </div>
      </li>
   )
}
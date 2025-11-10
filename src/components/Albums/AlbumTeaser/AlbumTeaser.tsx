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
      <li className="album_teaser flex flex_col no_user_select" style={{padding:'0'}}>
         <img src={"/assets/imgs/" + props.album.feature_img} onClick={open_album} 
              style={{objectFit:'cover',minHeight:'200px'}} className="cursor_pointer album_teaser_img" />
         <div style={{height:'100%',width:'100%',background:'white'}}>
            <h4 onClick={open_album} 
               className="cursor_pointer m_0 p_0 ml_2"
               style={{marginTop:'-1.75rem',background:'white',width:'fit-content',padding:'0 1.5rem',borderRadius:'.5rem'}}
               >{props.album.title}
            </h4>
            <div className="flex align_items_center px_2 m_0 mt_2 space_around bg_white">
               <Link className="link" to={props.album.slug} >Tracks & Lyrics</Link>
               <button
                  style={{margin:'0',padding:'.25rem .5rem',borderRadius:'.5rem'}}>
                  {props.album.playlist && <a href={props.album.playlist} target="_blank">YouTube Playlist</a>}
               </button>
            </div>
         </div>
      </li>
   )
}
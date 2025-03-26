
interface AudioPlayerTracksListItemProps {
   active_track:TracksListItem,
   track:TracksListItem,
   play_track(track: TracksListItem): void
}

export default function AudioPlayerTracksListItem({active_track, track, play_track}: AudioPlayerTracksListItemProps) {

   const is_selected = () => {
      return active_track.title === track.title
   }
   return (
      <li onClick={() => play_track(track)} 
         className={"cursor_pointer highlight_hover no_user_select w_100 p_.35 px_.5 " + (is_selected() ? 'highlight' : '')}>
         <div style={{fontWeight:'600'}}>{track.title}</div>
         <div style={{fontSize:'.9rem',fontStyle:'italic'}}>{track.album}, {track.released} </div>
      </li>
   )
}

interface AudioPlayerTracksListItemProps {
   current_track:TracksListItem,
   track:TracksListItem,
   play_track(track: TracksListItem): void
}

export default function AudioPlayerTracksListItem({current_track, track, play_track}: AudioPlayerTracksListItemProps) {

   const is_selected = () => {
      return current_track.title === track.title
   }

   return (
      <li onClick={() => play_track(track)} 
         className={"cursor_pointer highlight_hover no_user_select w_100 p_.35 px_.5 " + (is_selected() ? 'highlight' : '')}>
         {track.title}
      </li>
   )
}

interface AudioPlayerTracksListItemProps {
   track:TracksListItem,
   play_track(track: TracksListItem): void
}

export default function AudioPlayerTracksListItem({track, play_track}: AudioPlayerTracksListItemProps) {
   return (
      <li onClick={() => play_track(track)} className="pointer_cursor highlight_hover no_user_select w_100 p_.35 px_.5">
         {track.title}
      </li>
   )
}
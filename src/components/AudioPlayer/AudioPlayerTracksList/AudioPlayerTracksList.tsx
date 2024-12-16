import { useContext } from 'react'
import { AppContext } from '../../../AppContext'
import AudioPlayerTracksListItem from './AudioPlayerTracksListItem.tsx/AudioPlayerTracksListItem'



// AudioPlayerTracksList

// to do : on sm screen heights - limit height

interface AudioPlayerTracksListProps {
   active_track: TracksListItem,
   open_trackslist: boolean,
   play_track(track_slug: TracksListItem): void
}

export default function AudioPlayerTracksList({active_track, open_trackslist, play_track}: AudioPlayerTracksListProps) {

   const { tracks_list } = useContext(AppContext)

   return (
      <ul className={open_trackslist ? 'player_tracks_list open_tracklist border'  : 'player_tracks_list border'}>
         {
            tracks_list?.map((track) => {
               return (
                  <AudioPlayerTracksListItem 
                     key={track.slug} 
                     track={track} 
                     active_track={active_track}
                     play_track={play_track}
                  />
               )
            })
         }
      </ul>
   )
}
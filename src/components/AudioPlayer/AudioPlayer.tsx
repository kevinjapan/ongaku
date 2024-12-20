import { useState, useContext } from 'react'
import { AppContext } from '@/context/AppContext'
import ActiveTrackTitleCtrl from './ActiveTrackTitleCtrl/ActiveTrackTitleCtrl'
import AudioPlayerTracksList from './AudioPlayerTracksList/AudioPlayerTracksList'
import AudioPlayerPlayer from './AudioPlayerPlayer/AudioPlayerPlayer'



// AudioPlayer
// mp3 names are case-sensitive, 'audio' property must match mp3 filename

export default function AudioPlayer() {

   const { active_track, set_active_track } = useContext(AppContext)

   //
   const [show_tracks_list, setShowTracksList] = useState(false)

   const mouse_over = () => {
      setShowTracksList(true)
   }

   const mouse_out = () => {
      setShowTracksList(false)
   }

   const play_track = (track: TracksListItem) => {
      set_active_track(track)
   }

   return (
      <section className="audio_player">
         <div className="flex flex_col">

            <ActiveTrackTitleCtrl 
               track={active_track}
               mouse_over={mouse_over}
               mouse_out={mouse_out} />

            <AudioPlayerPlayer 
               audio_file={active_track.audio} />

            <AudioPlayerTracksList 
               active_track={active_track}
               open_trackslist={show_tracks_list}
               play_track={play_track} />

         </div>
      </section>
   )
}
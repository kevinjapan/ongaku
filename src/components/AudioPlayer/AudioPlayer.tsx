import { useState } from 'react'
import ActiveTrackSelector from './ActiveTrackSelector/ActiveTrackSelector'
import AudioPlayerTracksList from './AudioPlayerTracksList/AudioPlayerTracksList'
import AudioPlayerPlayer from './AudioPlayerPlayer/AudioPlayerPlayer'



// AudioPlayer


// to do : 
// - play through all listed tracks once started playing any given track
// - mp3 names are case-sensitive


export default function AudioPlayer() {

   //
   const [current_track, setCurrentTrack] = useState<TracksListItem>({title:'select track to play',slug:''})

   //
   const [show_tracks_list, setShowTracksList] = useState(false)

   const mouse_over = () => {
      setShowTracksList(true)
   }

   const mouse_out = () => {
      setShowTracksList(false)
   }

   const play_track = (track: TracksListItem) => {
      setCurrentTrack(track)
   }

   return (
      <section className="audio_player">
         <div className="flex flex_col">

               <ActiveTrackSelector 
                  track={current_track}
                  mouse_over={mouse_over}
                  mouse_out={mouse_out} />

               <AudioPlayerPlayer 
                  current_song={current_track.slug} />
            

            <AudioPlayerTracksList 
               current_track={current_track}
               open_trackslist={show_tracks_list}
               play_track={play_track} />

         </div>
      </section>
   )
}
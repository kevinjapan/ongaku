import { useState } from 'react'
import AudioPlayerCtrls from './AudioPlayerCtrls/AudioPlayerCtrls'
import AudioPlayerTracksList from './AudioPlayerTracksList/AudioPlayerTracksList'
import AudioPlayerPlayer from './AudioPlayerPlayer/AudioPlayerPlayer'



// AudioPlayer


// to do : 
// - play through all listed tracks once started playing any given track
// - mp3 names are case-sensitive
// - audio tracks - we currently display slugs eg tell-me-how-you...   remove '-' and file extensions


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

            <AudioPlayerCtrls 
               track={current_track}
               mouse_over={mouse_over}
               mouse_out={mouse_out} />

            <AudioPlayerPlayer 
               current_song={current_track.slug} />

            <AudioPlayerTracksList 
               open_trackslist={show_tracks_list}
               play_track={play_track} />

         </div>
      </section>
   )
}
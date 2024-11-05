import { useState } from 'react'
import AudioPlayerTracksList from './AudioPlayerTracksList/AudioPlayerTracksList'





export default function AudioPlayer() {

   const [current_song] = useState('select track to play')
   // const [is_playing, setIsPlaying] = useState(false)
   const [show_tracks_list, setShowTracksList] = useState(false)

   // const play_audio = () => {
   //    setIsPlaying(is_playing ? false : true)
   //    console.log('you clicked play')
   // }

   const mouse_over = () => {
      setShowTracksList(true)
   }

   const mouse_out = () => {
      setShowTracksList(false)
   }

   const play_track = () => {
      
   }

   
   return (
      <section className="audio_player">

         <div className="flex flex_col h_100">

            <div className="current_track" onMouseOver={mouse_over} onMouseOut={mouse_out}>{current_song}</div>

            <AudioPlayerTracksList 
               open_trackslist={show_tracks_list}
               play_track={play_track}
            />

         </div>

      </section>
   )
}
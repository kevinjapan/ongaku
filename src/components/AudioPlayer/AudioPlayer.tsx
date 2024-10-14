import { useState } from 'react'

export default function AudioPlayer() {

   const [is_playing,set_is_playing] = useState(false)

   const play_audio = () => {
      set_is_playing(is_playing ? false : true)
      console.log('you clicked play')
   }

   
   return (
      <section className="audio_player">
         <h2>AudioPlayer</h2>
         {is_playing ? <p>playing</p> : <p>not playing</p>}
         <button onClick={play_audio}>play</button>
      </section>
   )
}
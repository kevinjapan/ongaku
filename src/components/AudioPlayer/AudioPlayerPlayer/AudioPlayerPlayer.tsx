import { useState, useEffect, useRef } from 'react'

interface AudioPlayerPlayerProps {
   current_song: string
}

export default function AudioPlayerPlayer({current_song} : AudioPlayerPlayerProps) {


   const [active_track, setActiveTrack] = useState('/audio/tell-me-how-you-see-me-clip.mp3')

   const audio_ref = useRef<HTMLAudioElement | null>(null)

   useEffect(() => {
      setActiveTrack(`/audio/${current_song}`)
         setTimeout(() => {
            if(audio_ref) {
            audio_ref.current?.pause()
            audio_ref.current?.load()
         if(current_song && current_song !== "select track to play") audio_ref.current?.play()
         }
      },600)
   },[current_song])


   return (
      <div>
         <audio
            ref={audio_ref}
            controls
            key={active_track}>
               <source src={active_track} type="audio/mp3"/>
         </audio>
      </div>
   )
}

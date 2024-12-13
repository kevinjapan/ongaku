import { useState, useEffect, useRef } from 'react'


// to do : select play track from the card also
// to do : play next track and go through list after current track finishes

interface AudioPlayerPlayerProps {
   current_song: string
}

export default function AudioPlayerPlayer({current_song} : AudioPlayerPlayerProps) {


   const [active_track, setActiveTrack] = useState('/audio/tell-me-how-you-see-me-clip.mp3')

   const [active_volume, setActiveVolume] = useState(1)

   const audio_ref = useRef<HTMLAudioElement | null>(null)

   useEffect(() => {
      setActiveTrack(`/audio/${current_song}`)
      setTimeout(() => {
         if(audio_ref) {
         audio_ref.current?.pause()
         audio_ref.current?.load()
         if(audio_ref.current && audio_ref.current.volume) audio_ref.current.volume = active_volume
         if(current_song && current_song !== "select track to play") audio_ref.current?.play()
         }
      },600)
   },[current_song])

   const change_volume = () => {
      if(audio_ref !== null && audio_ref?.current?.volume) {
         setActiveVolume(audio_ref?.current?.volume)
      }
   }

   return (
      <div className="flex">
         <audio
            onVolumeChange={change_volume}
            ref={audio_ref}
            controls
            key={active_track}>
               <source src={active_track} type="audio/mp3"/>
         </audio>
      </div>
   )
}

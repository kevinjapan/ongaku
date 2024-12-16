import { useState, useEffect, useRef, useContext } from 'react'
import { AppContext } from '../../../AppContext'



// AudioPlayerPlayer

interface AudioPlayerPlayerProps {
   audio_file: string
}

export default function AudioPlayerPlayer({audio_file} : AudioPlayerPlayerProps) {

   const { audio_path, track_ended } = useContext(AppContext)

   // the active track
   const [active_track, setActiveTrack] = useState(`tell-me-how-you-see-me-clip.mp3`)

   // retain vol between tracks
   const [active_volume, setActiveVolume] = useState(1)

   // access the html audio element
   const audio_ref = useRef<HTMLAudioElement | null>(null)

   useEffect(() => {
      setActiveTrack(audio_file)
      setTimeout(() => {
         if(audio_ref) {
            audio_ref.current?.pause()
            audio_ref.current?.load()
            if(audio_ref.current && audio_ref.current.volume) audio_ref.current.volume = active_volume
            if(audio_file && audio_file !== "select track to play") audio_ref.current?.play()
         }
      },700)
   },[audio_file])

   const change_volume = () => {
      if(audio_ref !== null && audio_ref?.current?.volume) setActiveVolume(audio_ref?.current?.volume)
   }

   const audio_ended = () => {
      track_ended()
   }

   return (
      <div className="flex">
         <audio
            ref={audio_ref}
            controls
            key={active_track}
            onVolumeChange={change_volume}
            onEnded={audio_ended}
         >
               <source src={`${audio_path}${active_track}`} type="audio/mp3"/>
         </audio>
      </div>
   )
}

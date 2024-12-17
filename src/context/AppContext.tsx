import { useEffect, createContext, useState } from 'react'




// AppContext
// future : farm out AudioPlayer specific props to separate AudioContext component

export const AppContext = createContext<AppContextType>({} as AppContextType)


export const AppContextProvider = ({children}: { children: React.ReactNode }) => {

   // url for api (if exists)
   const [app_api] = useState('')

   // featured tracks_list
   const [tracks_list, setTracksList] = useState<TracksListItem[]>([])

   // prompt   to do : this doesn't need to be state - just a const
   const [prompt] = useState('select track to play')

   // the active_track playing
   const [active_track, setActiveTrack] = useState({title:prompt,slug:'',audio:''} as TracksListItem)

   // path for audio files
   const [audio_path] = useState('/audio/')

   // state handlers - TS doesn't like directly passing useState.setXXX funcs
   const set_active_track = (track: TracksListItem) => {
      setActiveTrack(track)
   }

   const track_ended = () => {
      // we play thru list to end
      let next_track_index = tracks_list.findIndex((track) => track.title === active_track.title) + 1
      next_track_index = next_track_index >= tracks_list.length - 1 ? next_track_index = 0 : next_track_index
      next_track_index === 0 ? setActiveTrack({title:prompt,slug:'',audio:''}) : setActiveTrack(tracks_list[next_track_index])
   
   }

   // future : populate dynamically
   useEffect(() => {
      setTracksList([
         {
            "title":"12 Bars",
            "slug":"12-bars-clip.mp3",
            "audio":"12-bars-clip.mp3"
         },
         {
            "title":"Find My Feet",
            "slug":"find-my-feet-clip.mp3",
            "audio":"find-my-feet-clip.mp3"
         },
         {
            "title":"Foetal",
            "slug":"foetal-clip.mp3",
            "audio":"foetal-clip.mp3"
         },
         {
            "title":"I Don't Want To Be Here Anymore",
            "slug":"i-dont-want-to-be-here-anymore-clip.mp3",
            "audio":"i-dont-want-to-be-here-anymore-clip.mp3"
         },
         {
            "title":"Inside The Music",
            "slug":"inside-the-music-clip.mp3",
            "audio":"inside-the-music-clip.mp3"
         },
         {
            "title":"Nothing's Secret",
            "slug":"nothings-secret-clip.mp3",
            "audio":"nothings-secret-clip.mp3"
         },
         {
            "title":"Release Your Love",
            "slug":"release-your-love-clip.mp3",
            "audio":"release-your-love-clip.mp3"
         },
         {
            "title":"River",
            "slug":"river-clip.mp3",
            "audio":"river-clip.mp3"
         },
         {
            "title":"Sand",
            "slug":"sand-clip.mp3",
            "audio":"sand-clip.mp3"
         },
         {
            "title":"SoundScapes",
            "slug":"soundscapes-clip.mp3",
            "audio":"soundscapes-clip.mp3"
         },
         {
            "title":"Tell Me How You See Me",
            "slug":"tell-me-how-you-see-me-clip.mp3",
            "audio":"tell-me-how-you-see-me-clip.mp3"
         },
         {
            "title":"Tether",
            "slug":"tether-clip.mp3",
            "audio":"tether-clip.mp3"
         },
         {
            "title":"The Crashing Waves",
            "slug":"the-crashing-waves-clip.mp3",
            "audio":"the-crashing-waves-clip.mp3"
         },
         {
            "title":"The Lighthouse Song",
            "slug":"the-lighthouse-song-clip.mp3",
            "audio":"the-lighthouse-song-clip.mp3"
         },
         {    
            "title":"This Picture",
            "slug":"this-picture-clip.mp3",
            "audio":"this-picture-clip.mp3"
         }
      ])
   },[])

   return (
      <AppContext.Provider 
         value={{
            app_api,
            tracks_list,
            active_track,
            audio_path,
            prompt,

            set_active_track,
            track_ended
         }}>
         {children}
      </AppContext.Provider>
   )
}
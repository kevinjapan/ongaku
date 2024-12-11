import { useEffect, useState } from 'react'
import AudioPlayerTracksListItem from './AudioPlayerTracksListItem.tsx/AudioPlayerTracksListItem'



interface AudioPlayerTracksListProps {
   open_trackslist: boolean,
   play_track(track_slug: TracksListItem): void
}



export default function AudioPlayerTracksList({open_trackslist, play_track}: AudioPlayerTracksListProps) {

   const [tracks_list, setTracksList] = useState<TracksListItem[] | null>(null)

      // to do : populate dynamically
      useEffect(() => {
         setTracksList([
            {
               "title":"12 Bars",
               "slug":"12-bars-clip.mp3"
            },
            {
               "title":"Find My Feet",
               "slug":"find-my-feet-clip.mp3"
            },
            {
               "title":"Foetal",
               "slug":"foetal-clip.mp3"
            },
            {
               "title":"I Don't Want To Be Here Anymore",
               "slug":"i-dont-want-to-be-here-anymore-clip.mp3"
            },
            {
               "title":"Inside The Music",
               "slug":"inside-the-music-clip.mp3"
            },
            {
               "title":"Nothing's Secret",
               "slug":"nothings-secret-clip.mp3"
            },
            {
               "title":"Release Your Love",
               "slug":"release-your-love-clip.mp3"
            },
            {
               "title":"River",
               "slug":"river-clip.mp3"
            },
            {
               "title":"Sand",
               "slug":"sand-clip.mp3"
            },
            {
               "title":"SoundScapes",
               "slug":"soundscapes-clip.mp3"
            },
            {
               "title":"Tell Me How You See Me",
               "slug":"tell-me-how-you-see-me-clip.mp3"
            },
            {
               "title":"Tether",
               "slug":"tether-clip.mp3"
            },
            {
               "title":"The Crashing Waves",
               "slug":"the-crashing-waves-clip.mp3"
            },
            {
               "title":"The Lighthouse Song",
               "slug":"the-lighthouse-song-clip.mp3"
            },
            {    
               "title":"This Picture",
               "slug":"this-picture-clip.mp3"
            }
         ]
      )
   },[])

   return (
      <ul className={open_trackslist ? 'player_tracks_list open_tracklist border'  : 'player_tracks_list border'}>
         {
            tracks_list?.map((track) => {
               return (
                  <AudioPlayerTracksListItem 
                     key={track.slug} 
                     track={track} 
                     play_track={play_track}
                  />
               )
            })
         }
      </ul>
   )
}
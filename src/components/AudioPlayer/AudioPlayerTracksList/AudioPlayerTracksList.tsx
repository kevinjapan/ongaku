import { useEffect, useState } from 'react'
import AudioPlayerTracksListItem from './AudioPlayerTracksListItem.tsx/AudioPlayerTracksListItem'



interface AudioPlayerTracksListProps {
    open_trackslist: boolean,
    play_track(track_slug: string): void
}



export default function AudioPlayerTracksList({open_trackslist, play_track}: AudioPlayerTracksListProps) {

    const [tracks_list, setTracksList] = useState<string[] | null>(null)

    // to do : populate dynamically
    useEffect(() => {
        setTracksList([
            '12-Bars',
            'Find-My-Feet',
            'Foetal',
            'I-Dont-Want-To-Be-Here-Anymore',
            'Inside-The-Music',
            'Nothings-Secret',
            'Release-Your-Love',
            'River',
            'Sand',
            'SoundScapes',
            'Tell-Me-How-You-See-Me',
            'Tether',
            'The-Crashing-Waves',
            'The-Lighthouse-Song',
            'This-Picture',]
        )
    },[])
    
    return (
        <ul className={open_trackslist ? 'player_tracks_list open_tracklist border'  : 'player_tracks_list border'}>

            {
                tracks_list?.map((track_slug) => {
                    return (
                        <AudioPlayerTracksListItem 
                            key={track_slug} 
                            track_slug={track_slug} 
                            play_track={play_track}
                        />
                    )
                })
            }



        </ul>
    )
}
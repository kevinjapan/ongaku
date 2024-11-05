
interface AudioPlayerTracksListItemProps {
    track_slug:string,
    play_track(track_slug: string): void
}

export default function AudioPlayerTracksListItem({track_slug, play_track}: AudioPlayerTracksListItemProps) {

    return (
        <li onClick={() => play_track(track_slug)}>{track_slug}</li>
    )
}
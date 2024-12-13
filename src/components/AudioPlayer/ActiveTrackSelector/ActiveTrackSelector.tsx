import { MouseEvent } from 'react'


interface ActiveTrackSelectorProps {
   track: TracksListItem | null,
   mouse_over(e: MouseEvent<HTMLDivElement>): void,
   mouse_out(e: MouseEvent<HTMLDivElement>): void,
}

export default function ActiveTrackSelector({track, mouse_over, mouse_out }: ActiveTrackSelectorProps) {
   return (
      <section className="audio_player_ctrls flex gap_1 justify_center align_items_center pointer_cursor"
               onMouseOver={mouse_over} 
               onMouseOut={mouse_out}>
         <img src="/src/assets/icons/music-note.svg"/>
         <div className="current_track" >
            {track?.title}
         </div>
      </section>
   )
}
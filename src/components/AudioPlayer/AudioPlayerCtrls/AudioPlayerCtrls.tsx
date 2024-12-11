import { MouseEvent } from 'react'


interface AudioPlayerCtrlsProps {
   track: TracksListItem | null,
   mouse_over(e: MouseEvent<HTMLDivElement>): void,
   mouse_out(e: MouseEvent<HTMLDivElement>): void,
}



export default function AudioPlayerCtrls({track, mouse_over, mouse_out }: AudioPlayerCtrlsProps) {

   // to do : rename - not Ctrls anymore
   return (
      <section className="audio_player_ctrls flex gap_1 justify_center align_items_center">
         <div className="current_track pointer_cursor" 
               onMouseOver={mouse_over} 
               onMouseOut={mouse_out}>
            {track?.title}
         </div>
      </section>
   )

}
import { MouseEvent } from 'react'



// ActiveTrackTitleCtrl
// to do : review : mouseover opens menu - we need click alternative behaviour for ipad/mobile touch screens
//         first check current site works ok on ipad before worrying about this!

interface ActiveTrackTitleCtrlProps {
   track: TracksListItem | null,
   mouse_over(e: MouseEvent<HTMLDivElement>): void,
   mouse_out(e: MouseEvent<HTMLDivElement>): void,
}

export default function ActiveTrackTitleCtrl({track, mouse_over, mouse_out }: ActiveTrackTitleCtrlProps) {
   return (
      <section className="audio_track_title_ctrl flex gap_1 justify_center align_items_center cursor_pointer"
               onMouseOver={mouse_over} 
               onMouseOut={mouse_out}>
         <img src="/src/assets/icons/music-note.svg"/>
         <div className="active_track italic" >
            {track?.title}
         </div>
      </section>
   )
}
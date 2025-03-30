import { useEffect, useContext, useMemo } from 'react'
import { AppContext } from '@/context/AppContext'
import useFetch from '../../../hooks/useFetch/useFetch'
import TrackCardSection from '../TrackCardSection/TrackCardSection'
import create_observers from '../../../utilities/createObservers/createObservers'



// TrackCard
// future : review : card white background 'pops' from bubbles - good enough

interface TrackCardProps {
   track:Track
   count:number
}

export default function TrackCard({track, count}: TrackCardProps) {

   const { set_active_track } = useContext(AppContext)

   const { loading, payload, error } = useFetch<Track>(`/data/tracks/${track.slug}.json`,{
      headers: {accept: "application/json"},
   })

   useEffect(() => {
      const init_fade_ins = () => {
         const faders = document.querySelectorAll('.fade_in')
         const appearOptions = {
            threshold: 0,
            rootMargin: "0px 0px -200px 0px"
         }
         return create_observers(faders,'appear',appearOptions)
      }
      init_fade_ins()
   })

   const is_odd_index = () => {
      return count % 2
   }

   const random_elem = (arr: any[]) => arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined

   // we only randomize layout on mounting, not on every re-rerender (eg when active_track changes)
   const random_styles = useMemo(() => {
      
      const portholes: Array<string> = ['porthole_sm','porthole_lg','porthole_xl']
      const m_top: Array<string> = ['margin_top_10','margin_top_12','margin_top_20']
      // const m_left: Array<string> = ['margin_left_neg_14','margin_left_neg_14','margin_left_neg_14','margin_left_neg_15']
      const m_left: Array<string> = ['margin_left_neg_2','margin_left_neg_4']
      const m_right: Array<string> = ['margin_right_neg_4','margin_right_neg_6']
      const opacity: Array<string> = ['opacity_7','opacity_8','opacity_9']

      if(is_odd_index()) {
         return `${random_elem(portholes)} ${random_elem(m_top)} ${random_elem(m_left)} ${random_elem(opacity)}`
      }
      else {
         return `${random_elem(portholes)} ${random_elem(m_top)} ${random_elem(m_right)} ${random_elem(opacity)}`
      }
   },[])

   const play_track = () => {
      set_active_track(track)
   }

   if(loading) {
      return <div>loading</div>
   }

   if(error) {
      return <div>{error}</div>
   }

   if(payload) {
      let my_key = 0
      return (
            <section className={"feature_block fade_in " + (is_odd_index() ? ' reverse_order ' : ' ')}>

               <img 
                  src={"/assets/imgs/" + payload?.data?.img}
                  className={"fade_in_slow fade_in porthole " + random_styles} 
               />

               <section className="track_card" style={{backgroundColor:'white'}}>
                  <h3>{payload?.data?.title}</h3>
                  <h6>music & lyrics copyright &#169; {payload?.data?.copy}</h6>
                  <img className="play_track_icon" onClick={play_track} src="/src/assets/icons/music-note.svg"/>
                  {payload?.data?.sections?.map((section) => {
                     return <TrackCardSection key={my_key++} section={section}/>
                  })}

                  <button style={{padding:'.5rem 1rem'}}>
                     <a href={payload?.data?.video} target="_blank">Listen on YouTube</a>
                  </button>
                  
               </section>
            </section>
      )
   }
      
}
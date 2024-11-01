import { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch/useFetch'
import TrackCardSection from '../TrackCardSection/TrackCardSection'
import create_observers from '../../../utilities/createObservers/createObservers'


// TrackCard

interface TrackCardProps {
   track:Track
}

export default function TrackCard({track}: TrackCardProps) {

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

   if(loading) {
      return <div>loading</div>
   }

   if(error) {
      return <div>{error}</div>
   }


   if(payload) {
      let my_key = 0
      return (
         <section className="track_card feature_block fade_in">
            <h3>{payload?.data?.title}</h3>
            {payload?.data?.sections?.map((section) => {
               return <TrackCardSection key={my_key++} section={section}/>
            })}
         </section>
      )
   }
      
}
import useFetch from '../../../hooks/useFetch/useFetch'
import TrackCardSection from '../TrackCardSection/TrackCardSection'

// TrackCard

export default function TrackCard({track}: TrackCardProps) {

   const { loading, payload, error } = useFetch<Track>(`/data/tracks/${track.slug}.json`,{
      headers: {accept: "application/json"},
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
         <section className="track_card">
            <h3>{payload?.data?.title}</h3>
            {payload?.data?.sections?.map((section) => {
               return <TrackCardSection key={my_key++} section={section}/>
            })}
         </section>
      )
   }
      
}
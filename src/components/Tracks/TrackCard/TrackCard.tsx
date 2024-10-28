import useFetch from '../../../hooks/useFetch/useFetch'
import TrackCardSection from '../TrackCardSection/TrackCardSection'

// TrackCard

export default function TrackCard({track}: TrackCardProps) {

   const { loading, data, error } = useFetch<UseFetchReturn<Track>>(`/data/tracks/${track.slug}.json`,{
      headers: {accept: "application/json"},
   })
   if(loading) {
      return <div>loading</div>
   }

   if(error) {
      return <div>{error}</div>
   }

   // to do : data?.data?.xxx is awkward - tidy up interface

   if(data) {
      let my_key = 0
      return (
         <section className="track_card">
            <h3>{data?.data?.title}</h3>
            {data?.data?.sections?.map((section) => {
               return <TrackCardSection key={my_key++} section={section}/>
            })}
         </section>
      )
   }
      
}
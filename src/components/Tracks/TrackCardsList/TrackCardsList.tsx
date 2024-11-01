import TrackCard from '../TrackCard/TrackCard'

interface TrackCardsListProps {
   tracks:Track[]
}

export default function TrackCardsList({ tracks }: TrackCardsListProps) {

   return (
      <section className="tracks_list">
         <h2>TrackCardsList</h2>
         {tracks  ?
            tracks.map((track) => {
               return (
                  <TrackCard 
                     key={track.slug} 
                     track={track} 
                  />
               )
            })
      
         : null}
      </section>
   )
}
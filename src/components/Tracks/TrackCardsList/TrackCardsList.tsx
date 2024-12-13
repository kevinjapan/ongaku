import TrackCard from '../TrackCard/TrackCard'

interface TrackCardsListProps {
   tracks:Track[]
}

export default function TrackCardsList({ tracks }: TrackCardsListProps) {

   let count = 0
   
   return (
      <section className="track_cards_list">
         {tracks  ?
            tracks.map((track) => {
               return (
                  <TrackCard 
                     key={track.slug} 
                     count={count++}
                     track={track} 
                  />
               )
            })
         : null}
      </section>
   )
}
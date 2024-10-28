// import TrackCard from '../TrackCard/TrackCard'

export default function TrackCardSection({section}: TrackCardSectionProps) {

   let my_key = 0
   
   return (
      <section className="my_1">
         {section.lines  ?
            section.lines.map((line) => {
               return (
                  <p key={my_key++}>{line}</p>
               )
            })      
         : null}
      </section>
   )
}


// TrackCardSection

interface TrackCardSectionProps {
   section:TrackSection
}

export default function TrackCardSection({section}: TrackCardSectionProps) {

   let my_key = 0
   
   return (
      <p className="my_1 text_center">
         {section.lines  ?
            section.lines.map((line) => {
               return (
                  <span className="display_block my_1 line_1" key={my_key++}>{line}</span>
               )
            })      
         : null}
      </p>
   )
}
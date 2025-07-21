
interface LeadingTextSourceProps {
   src:string
}



export default function LeadingTextSource(props: LeadingTextSourceProps) {

   return (
      <section className="leading_text_src">
         {props.src}
      </section>
   )
}
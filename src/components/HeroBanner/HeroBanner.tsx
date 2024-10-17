

export default function HeroBanner(props: HeroBannerProps) {

   // to do : place dimmer over img to make text clear

   return (
      <section className="cover_block hero_block bg_navy dim_20">
         <img className="bg_img" src={props.featureImg} />
         <div className="overlay ">
            <h1>{props.overlayHeading}</h1>
            {props.overlayTagline ? <h4>{props.overlayTagline}</h4> : null}
         </div>
      </section>
   )
}
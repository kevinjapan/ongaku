

export default function HeroBanner(props: HeroBannerProps) {

   console.log('props',props.featureImg)
   return (
      <section className="cover_block bg_navy ">
         <img className="bg_img" src={props.featureImg} />
         <div className="overlay slide_in_from_left_init">
            <h1>about</h1>
         </div>
      </section>
   )
}
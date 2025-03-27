
// SnapShots
// displays snapshot images on background
// we could prevent possible duplicates? - but rare and any solution likely messes w/ react's re-rendering - so good enough 


export default function SnapShots() {

   const snapshot_imgs: Array<string> = [
      '/assets/imgs/snapshots/beached_boat.jpg',
      '/assets/imgs/snapshots/stoney_perspective.jpg',
      '/assets/imgs/snapshots/black_shed.jpg',
      '/assets/imgs/snapshots/shed_windows.jpg',
      '/assets/imgs/snapshots/tower.jpg',
      '/assets/imgs/snapshots/shoreline_perspective.jpg',
      '/assets/imgs/snapshots/signal_seats.jpg',
      '/assets/imgs/snapshots/pontoon_boats.jpg',
      '/assets/imgs/snapshots/stormy_shingle_beach.jpg'
   ]

   const random_elem = (arr: string[]) => {
      const index = Math.floor(Math.random() * arr.length)
      return arr.length ? arr[index] : undefined
   }

   return (
      <section className="snapshots_layer fade_in" style={{height:'fit-content',padding: '2rem',overflow:'hidden'}}>
         <img
            src={random_elem(snapshot_imgs)}
            className="snapshot"
            style={{top:'3%',left:'-8%',transform:'rotate(-5deg)',height:'50%'}}
         />
         <img
            src={random_elem(snapshot_imgs)}
            className="snapshot"
            style={{top:'47%',left:'-12%',transform:'rotate(7deg)',height:'50%'}}
         />
      </section>
   )  
}


// SnapShots
// displays snapshot images on background


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

   const random_elem = (arr: string[]) => arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined

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
               style={{top:'47%',left:'-8%',transform:'rotate(7deg)',height:'50%'}}
            />

            
         </section>
   )
   
      
}
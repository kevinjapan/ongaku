import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import use_data from '../utilities/useData/useData'
import HeroBanner from '../components/HeroBanner/HeroBanner'



// AlbumView

export default function AlbumView() {

   const { slug } = useParams()
   const [album, setAlbum] = useState<Album | null>(null)
      
   // load album
   useEffect(() => {

      async function fetchData() {
         try {
            const { data, error, outcome } = await use_data<Album>('album',[`${slug}`],{},null)
            if(data) {
               if(outcome === 'success') setAlbum(data)
            }
            else {
               throw error
            }
         }
         catch(error) {
            console.log('error',error)
         }
      }
      fetchData()
   },[slug])

   return (
      <>
         {album ?
            <>
               <HeroBanner 
                  overlayHeading={album.title} 
                  featureImg={album.feature_img}
               />
               <h4>{album.feature_img}</h4>
               <h3>AlbumView</h3>
               <p>{album.id}</p>
               <p>{album.title}</p>
               <p>{album.slug}</p>
               <p>{album.created_at}</p>
            </>
            : null}
      </>
   )
}
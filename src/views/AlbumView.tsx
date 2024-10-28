import { useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useData from '../hooks/useData/useData'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import TrackCardsList from '../components/Tracks/TrackCardsList/TrackCardsList'



// AlbumView

// to do : we have duplicate same video link in json files:
// i dont want to be here anymore / release your love / this picture

// to do : backup track json files to github?


export default function AlbumView() {

   const { slug } = useParams()
   const slug_ref = useRef(slug)
   
   const { loading, data, error, updateUrl } = useData<UseDataReturn<Album>>(`/data/albums/${slug_ref.current}.json`)

   // if 'slug' changes, we have to invoke useFetch to reload new url
   useEffect(() => {
      slug_ref.current = slug
      updateUrl(`/data/albums/${slug_ref.current}.json`)
   },[slug,updateUrl])


   if(loading) {
      return <div>loading</div>
   }

   if(error) {
      return <div>{error}</div>
   }

   // to do : data?.data?.xxx is awkward - tidy up interface

   if(data) {

      return (
         <>
            {data?.data ?
               <>
                  <HeroBanner 
                     overlayHeading={data?.data?.title} 
                     featureImg={data?.data?.feature_img}
                  />
                  
                  <TrackCardsList tracks={data?.data?.tracks} />
               </>
               : null}
         </>
      )
   }
}
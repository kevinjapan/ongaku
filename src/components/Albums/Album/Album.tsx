import { useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useData from '../../../hooks/useData/useData'
import TrackCardsList from '../../Tracks/TrackCardsList/TrackCardsList'



// Album

export default function Album({set_title, set_feature_img}:AlbumProps) {

   const { slug } = useParams()
   const slug_ref = useRef(slug)
   
   const { loading, payload, error, updateUrl } = useData<Album>(`/data/albums/${slug_ref.current}.json`)

   // if 'slug' changes, we have to invoke useFetch to reload new url
   useEffect(() => {
      slug_ref.current = slug
      updateUrl(`/data/albums/${slug_ref.current}.json`)
   },[slug,updateUrl])

   // any slug change will reload data and hence re-render component, so the following work
   set_title(payload?.data?.title)
   set_feature_img(payload?.data?.feature_img)


   if(loading) {
      return <div>loading</div>
   }

   if(error) {
      return <div>{error}</div>
   }

   if(payload) {
      return (
         <>
            {payload?.data ?
               <>                  
                  <TrackCardsList tracks={payload?.data?.tracks} />
               </>
               : null}
         </>
      )
   }
}
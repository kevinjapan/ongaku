import { useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useData from '../../../hooks/useData/useData'
import TrackCardsList from '../../Tracks/TrackCardsList/TrackCardsList'
import { SetStateAction, Dispatch } from 'react'


// Album

interface AlbumProps {
   set_title:Dispatch<SetStateAction<string>>,
   set_feature_img:Dispatch<SetStateAction<string>>
}

export default function Album({set_title, set_feature_img}:AlbumProps) {

   const { slug } = useParams()
   const slug_ref = useRef(slug)
   
   const { loading, payload, error, updateUrl } = useData<Album>(`single_album`,[slug_ref.current ? slug_ref.current : ''],{})

   // if 'slug' changes, we have to invoke useFetch to reload new url
   useEffect(() => {
      slug_ref.current = slug
      updateUrl(`/data/albums/${slug_ref.current}.json`) // to do : need intermediate w/ endPoint resolution for useData
   },[slug,updateUrl])

   // any slug change will reload data and hence re-render component, so the following work
   useEffect(() => {
      set_title(payload?.data?.title as string)
      // short delay to prevent flicker as re-sets imgs
      setTimeout(() => set_feature_img(payload?.data?.feature_img as string),200)
   },[payload, set_title, set_feature_img])

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
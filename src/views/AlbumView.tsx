import { useLoaderData } from 'react-router-dom'

export default function AlbumView() {


   const { id, title, slug, created_at } = useLoaderData() as Album
   return (
      <>
      <h3>AlbumView</h3>
      <p>{id}</p>
      <p>{title}</p>
      <p>{slug}</p>
      <p>{created_at}</p>
      </>
   )
}
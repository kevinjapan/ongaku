import { useLoaderData, Link } from 'react-router-dom'

export default function AlbumsListView() {

   const { albums } = useLoaderData() as AlbumsList // This hook provides the value returned from your route loader.

   console.log('loaderData',albums)

   return (
      <>
      <h3>AlbumsListView</h3>
      
      {albums.length ? (
            <ul>
              {albums.map((album: Album) => (
                <li key={album.id}>
                  <Link to={`${album.slug}`}>                   
                      <>
                        {album.title} 
                      </>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No albums</i>
            </p>
          )}

      </>
   )

}
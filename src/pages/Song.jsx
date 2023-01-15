import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Spinner from '../components/layout/Spinner'
import SpotifyContext from '../context/spotify/SpotifyContext'

function Song() {
  const { fetchSongDetails, song, loading } = useContext(SpotifyContext)

  const params = useParams()

  useEffect(() => {
    fetchSongDetails(params.id)
  }, [])

  if (loading) {
    return <Spinner />
  } else {
    return (
      <>
        <div className="w-full mx-auto lg:w-10/12">
          <div className="mb-5">
            <Link to='/'>Back to Search</Link>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
            <div className="custom-card-image mb-6 md:mb-0">
              <div className="rounded-xl shadow-xl card image-full">
                <figure>
                  <img src={song.data.album.images[0].url} alt="" />
                </figure>
                <div className="card-body justify-end">
                  <h2 className="card-title mb-0">{song.data.name}</h2>
                  <p>{song.data.artists[0].name}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="mb-6">
                <h1 className="text-3xl card-title">
                  {song.data.artists[0].name}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </>
      )
  }
}

export default Song
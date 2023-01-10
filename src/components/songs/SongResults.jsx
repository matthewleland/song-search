import { useEffect, useContext } from "react"
import axios from 'axios'
import Spinner from "../layout/Spinner"
import SongItem from "./SongItem"
import SpotifyContext from "../../context/spotify/SpotifyContext"

const CLIENT_ID = '16674063711c49c69684d5fd1af7b2b4'
const REDIRECT_URI = "http://localhost:5173"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

function SongResults() {
  const { token, songs, loading, logout, fetchSongs } = useContext(SpotifyContext)

  useEffect(() => {
    fetchSongs(token)
  }, [])

  if (!token) {
    return (
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
    )
  } else {
    if (!loading) {
       return (
       <>
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {songs.map((song) => (
            <SongItem key={song.id} song={song}/>
          ))}
        </div>
        <button className='mt-10' onClick={logout}>Logout</button>
      </>
       )
    } else {
      return (
        <Spinner />
      )
    }
  }
}

export default SongResults
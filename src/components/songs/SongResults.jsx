import { useEffect, useState } from "react"
import axios from 'axios'
import Spinner from "../layout/Spinner"
import SongItem from "./SongItem"

function SongResults() {
  const CLIENT_ID = '16674063711c49c69684d5fd1af7b2b4'
  const REDIRECT_URI = "http://localhost:5173"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(false)



  const fetchSongs = async (token) => {
    console.log("TOKEN: " + token)
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
          Authorization: `Bearer ${token}`
      },
      params: {
          q: "watermelon",
          type: "track"
      }
    })
    console.log(data.tracks.items)
    setSongs(data.tracks.items)
    setLoading(false)
  }

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

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
        <button onClick={logout}>Logout</button>
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
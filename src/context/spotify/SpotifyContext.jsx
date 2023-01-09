import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const SpotifyContext = createContext()

const CLIENT_ID = '16674063711c49c69684d5fd1af7b2b4'
const REDIRECT_URI = "http://localhost:5173"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

export const SpotifyProvider = ({children}) => {
  const [token, setToken] = useState("")
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }
    setToken(token)
    fetchSongs(token)
  }, [])

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

  return <SpotifyContext.Provider value={{
    token,
    songs,
    loading
  }}>
    {children}
  </SpotifyContext.Provider>
}

export default SpotifyContext
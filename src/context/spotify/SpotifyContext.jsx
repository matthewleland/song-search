import { createContext, useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import spotifyReducer from './SpotifyReducer'
const SpotifyContext = createContext()

export const SpotifyProvider = ({children}) => {
  const initialState = {
    token: '',
    songs: [],
    song: {},
    loading: true
  }

  const [state, dispatch] = useReducer(spotifyReducer, initialState)

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }
    dispatch({
      type: 'SET_TOKEN',
      payload: token
    })
  }, [])

  const fetchSongs = async (text) => {
    setLoading()
    let token = window.localStorage.getItem("token")
    console.log("TOKEN: " + token)
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
          Authorization: `Bearer ${token}`
      },
      params: {
          q: text,
          type: "track"
      }
    })
    dispatch({
      type: 'GET_SONGS',
      payload: data.tracks.items
    })
  }

  const fetchSongDetails = async (id) => {
    setLoading()
    let token = window.localStorage.getItem("token")
    const {data} = await axios.get(`https://api.spotify.com/v1/tracks/${id}`, {
      headers: {
          Authorization: `Bearer ${token}`
      }
    })

    if ({data}.status === 404) {
      window.location = '/notfound'
    } else {
      dispatch({
        type: 'GET_SONG_DETAILS',
        payload: {data}
      })
    }
  }

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  const clearSongs = () => { dispatch({type: 'CLEAR_USERS'}) }

  const setLoading = () => dispatch({type: 'SET_LOADING'})

  return <SpotifyContext.Provider value={{
    token: state.token,
    songs: state.songs,
    song: state.song,
    loading: state.loading,
    fetchSongs,
    fetchSongDetails,
    clearSongs,
    logout
  }}>
    {children}
  </SpotifyContext.Provider>
}

export default SpotifyContext
const spotifyReducer = (state, action) => {
  switch(action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload }
    case 'GET_SONGS':
      return { ...state, songs: action.payload, loading: false }
    case 'GET_SONG_DETAILS':
      return { ...state, song: action.payload, loading: false }
    case 'SET_LOADING':
      return { ...state, loading: true }
    case 'CLEAR_USERS':
      return { ...state, songs: []}
    default:
      return state
  }
}

export default spotifyReducer

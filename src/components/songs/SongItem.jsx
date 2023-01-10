import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function SongItem({song}) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <Link to={`/tracks/${song.id}`}>
        <div className="flex-row items-center space-x-4 card-body">
          <div>
            <div className='avatar'>
              <div className="rounded-full shadow w-14 h-14">
                <img src={song.album.images[2].url} alt="Album Art" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="card-title">{song.name}</h2>
            <h2 className='text-base-content text-opacity-40'>
              {song.artists[0].name}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  )
}

SongItem.propTypes = {
  song: PropTypes.object.isRequired
}

export default SongItem
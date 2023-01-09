import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function SongItem({song}) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className='avatar'>
            <div className="rounded-full shadow w-14 h-14">
              {/* <img src={song.albumart_url} alt="Album Art" /> */}
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{song.name}</h2>
          <Link className='text-base-content text-opacity-40' to={`/tracks/${song.id}`}>
            View Song
          </Link>
        </div>
      </div>
    </div>
  )
}

SongItem.propTypes = {
  song: PropTypes.object.isRequired
}

export default SongItem
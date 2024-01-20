import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'


const PlayPause = ({ song, isPlaying, activeSong, handlePauseClick, handlePlayClick, sizeButtom= 35 }) => {

  return (isPlaying && activeSong?.title === song.title ? 
  <FaPauseCircle onClick={handlePauseClick} className="text-gray-300" size={sizeButtom} /> 
  : 
  <FaPlayCircle onClick={handlePlayClick} className="text-gray-300" size={sizeButtom} />
  )
};

export default PlayPause;

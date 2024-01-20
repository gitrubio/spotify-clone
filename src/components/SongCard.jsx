import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useDispatch } from "react-redux";
import { defaultImg } from "../assets/constants";
import PlayPause from "./PlayPause";
import { Link } from "react-router-dom";


const SongCard = ({ song, i, isPlaying, activeSong, isFetching, data }) => {

  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));
  }

  return (<div className="flex flex-col w-[200px] h-[270px]   p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:bg-white/10">
    <div className="relative w-full h-56 group">
      <div className={`absolute inset-0  justify-center items-center  bg-black bg-opacity-50 group-hover:flex 
      ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>

        <PlayPause
          song={song}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
          isPlaying={isPlaying}
          activeSong={activeSong}
          sizeButtom={55}
        />
      </div>
      <img src={song.images?.coverart || defaultImg} alt={song.title} className="w-full h-full object-cover rounded-lg" />
    </div>
    <div className="flex flex-col mt-4 ">
      <Link to={`/songs/${song?.key}`} className="text-white font-bold text-lg hover:underline">
        <p className="max-w-[230px] max-h-[30px] overflow-hidden whitespace-no-wrap overflow-ellipsis"> 
          {song.title.slice(0,17)}{song.title.length > 18 ? '...' : '.' }
        </p>
      </Link>
      <Link to={song.artists ? `/artists/${song.artists[0]?.adamid}` : '/top-artists'} className="text-gray-300 text-sm   truncate hover:underline">
        {song.subtitle}
      </Link>
    </div>
  </div>)
};

export default SongCard;

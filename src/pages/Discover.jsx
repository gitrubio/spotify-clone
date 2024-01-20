/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import { selectGenreListId } from "../redux/features/playerSlice";

const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');
    if (error) return <Error />;
    
    
    const genreTitle = genres.find(({value}) => value === genreListId)?.title;
    return (<div>
        <div className="flex flex-col  m">
            <div className="w-full flex  justify-between items-center sm:flex-row flex-col mt-4 mb-10">

                <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
                <select
                    onChange={(e) => { dispatch(selectGenreListId(e.target.value)) }}
                    value={genreListId || 'POP'}
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
                    {genres.map((genre) => (
                        <option key={genre.value} value={genre.value}>
                            {genre.title}
                        </option>
                    ))}
                </select>
            </div>
            {!isFetching ?
                <div className="flex  flex-wrap  sm:justify-start  justify-center gap-8">
                    {data?.filter((song) =>song.hub?.actions).map((song, i) => (
                        <SongCard
                            key={song.key}
                            song={song}
                            i={i}
                            activeSong={activeSong}
                            isPlaying={isPlaying}
                            isFetching={isFetching}
                            data={data} />
                    ))}

                </div>

                : <div  className="flex  flex-wrap  justify-center items-center gap-8 h-full">
                    <Loader />
                </div>
            }
        </div>
    </div>)
};

export default Discover;



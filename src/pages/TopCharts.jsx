import React from 'react'
import { useSelector } from 'react-redux';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { Error, Loader, SongCard } from '../components';


const TopCharts = () => {

    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetTopChartsQuery();


    if (isFetching) return <Loader title={"Searching song details"} />

    if (error) return <Error title={"Error searching artist details"} />
    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Disover top charts</h2>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.filter((song) =>song.hub?.actions).map((song, i) => (
                    <SongCard
                    key={song.key}
                    song={song}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={data}
                    />
                ))}
            </div>
        </div>
    )

};

export default TopCharts;

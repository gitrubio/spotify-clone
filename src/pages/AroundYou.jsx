import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';
import { Error, Loader, SongCard } from '../components';


const CountryTracks = () => {
    const [countryTracks, setCountryTracks] = useState('CO')
    const [loading, setLoading] = useState(true)
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByCountryQuery(countryTracks);
    useEffect(() => {
        axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_RDuT4EjecruUCx0BxDtMljVGmwcJZ')
            .then((res) => setCountryTracks(res?.data?.location?.country))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [countryTracks]);

    if (isFetching && loading) return <Loader title={"Searching song details"} />

    if (error && country) return <Error title={"Error searching artist details"} />
    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Around you</h2>
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

export default CountryTracks;

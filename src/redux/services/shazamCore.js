import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

  
    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '985f662d2bmsh6679d3e33957b9fp102efcjsnf0f4914f6526');
                headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');

                return headers;
            }
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/v1/charts/world'}),
            getSongsByGenre : builder.query({ query: (genre) => `/v1/charts/genre-world?genre_code=${genre}`}),
            getSongDetails : builder.query({ query: (id) => `/v1/tracks/details?track_id=${id}`}),
            getSongRelated : builder.query({ query: (id) => `/v1/tracks/related?track_id=${id}`}),
            getArtistDetails : builder.query({ query: (id) => `/v2/artists/details?artist_id=${id}`}),
            getSongsByCountry : builder.query({ query: (country) => `/v1/charts/country?country_code=${country}`}),
            getSongsBySearch : builder.query({ query: (search) => `/v1/search/multi?search_type=SONGS_ARTISTS&query=${search}`}),
        }),
        
    });
    console.log(shazamCoreApi);
    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
        useGetSongsByCountryQuery,
        useGetSongsByGenreQuery,
        useGetSongsBySearchQuery
    } = shazamCoreApi
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";


const ArtistDetails = () => {
    const{ id: artistId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetArtistDetailsQuery(artistId);
 

    if (isFetching) return <Loader title={"Searching song details"} />

    if (error) return <Error title={"Error searching artist details"} />

    return (
        <div className="flex flex-col">
            <DetailsHeader artistData={data} artistId={artistId} artistAtributes={data?.data[0].attributes} />
            <RelatedSongs
                data={Object.values(data?.data[0].views['top-songs']?.data)}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
                justShow
              />
        </div>
    )
};

export default ArtistDetails;

import { useGetTrendingArtistsQuery } from "../redux/services/shazamCoreApi";
import ArtistCard from "./ArtistCard";
import Loading from "./Loading";
import MusicCard from "./MusicCard";

const TrendingArtists = () => {
  const { data, error, isLoading } = useGetTrendingArtistsQuery();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error</p>;
  }
  return (
    <div className="mt-12 mx-10">
      <h2 className="text-white text-2xl">Trending Arists</h2>
      <div className="flex justify-center items-center flex-wrap">
        {data.results.slice(0, 4).map((music, i) => (
          <ArtistCard key={music.id} i={i} music={music} />
        ))}
      </div>
    </div>
  );
};

export default TrendingArtists;

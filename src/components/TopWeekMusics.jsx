import { useGetTopWeekMusicsQuery } from "../redux/services/shazamCoreApi";
import Loading from "./Loading";
import TrendingMusicCard from "./TrendingMusicCard";

const TopWeekMusics = () => {
  const { data, error, isLoading } = useGetTopWeekMusicsQuery();
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error</p>;
  }
  return (
    <div className="mt-12 mx-10">
      <h2 className="text-white text-2xl">Week Trending</h2>
      <div className="flex justify-center items-center flex-wrap">
        {data.results.slice(0, 4).map((music, i) => (
          <TrendingMusicCard key={music.id} i={i} music={music} />
        ))}
      </div>
    </div>
  );
};

export default TopWeekMusics;

import { useGetTopDayMusicsQuery } from "../redux/services/shazamCoreApi";
import Loading from "./Loading";
import TrendingMusicCard from "./TrendingMusicCard";

const TopDayMusics = () => {
  const { data, error, isLoading } = useGetTopDayMusicsQuery();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error</p>;
  }
  return (
    <div className="mt-12 mx-10">
      <h2 className="text-white md:ml-[7rem] lg:ml-0 text-2xl">
        Today Trending
      </h2>
      <div className="flex justify-center items-center flex-wrap">
        {data.results.slice(0, 4).map((music, i) => (
          <TrendingMusicCard key={music.id} i={i} music={music} />
        ))}
      </div>
    </div>
  );
};

export default TopDayMusics;

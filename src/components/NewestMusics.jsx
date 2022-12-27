import { useGetNewestMusicsQuery } from "../redux/services/shazamCoreApi";
import MusicCard from "./MusicCard";
import Loading from "./Loading";

const NewestMusics = () => {
  const { data, error, isLoading } = useGetNewestMusicsQuery();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error</p>;
  }
  return (
    <div className="mt-12 mx-12">
      <h2 className="text-white md:ml-[7rem] text-2xl">New Musics</h2>
      <div className="flex justify-center items-center flex-wrap">
        {data.results.slice(0, 8).map((music, i) => (
          <MusicCard key={music.id} i={i} music={music} />
        ))}
      </div>
    </div>
  );
};

export default NewestMusics;

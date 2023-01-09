import { useEffect, useState } from "react";
import Error from "./Error";
import Loader from "./Loader";
import MusicCard from "./MusicCard";

const TopWeekMusics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api-beta.melobit.com/v1/song/top/week/0/100")
        .then((resp) => {
          if (!resp.ok) {
            throw Error(`could not find url`);
          }
          return resp.json();
        })
        .then((data) => {
          setData(data?.results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Loader title="Top Week Musics" />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className="mt-12 mx-10">
      <h2 className="text-white text-2xl">Week Trending</h2>
      <div className="flex justify-center items-center flex-wrap">
        {data.slice(0, 4).map((music, i) => (
          <MusicCard
            currentListData={data.slice(0, 4)}
            type="trending"
            key={music.id}
            i={i}
            music={music}
          />
        ))}
      </div>
    </div>
  );
};

export default TopWeekMusics;

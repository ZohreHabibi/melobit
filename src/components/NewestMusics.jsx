import { useEffect, useState } from "react";
import Error from "./Error";
import Loader from "./Loader";
import MusicCard from "./MusicCard";

const NewestMusics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api-beta.melobit.com/v1/song/new/0/11")
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
    return <Loader title="Newest Music" />;
  }
  if (error) {
    return <Error error={error} />;
  }
  return (
    <div className="mt-12 mx-12">
      <h2 className="text-white md:ml-[7rem] text-2xl">New Musics</h2>
      <div className="flex justify-center items-center flex-wrap">
        {data?.slice(0, 8).map((music, i) => (
          <MusicCard
            type="new"
            currentListData={data?.slice(0, 8)}
            key={music.id}
            i={i}
            music={music}
          />
        ))}
      </div>
    </div>
  );
};

export default NewestMusics;

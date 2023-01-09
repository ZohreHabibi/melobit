import { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";
import Error from "./Error";
import Loader from "./Loader";

const TrendingArtists = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api-beta.melobit.com/v1/artist/trending/0/4")
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
    return <Loader title="Trending Artists" />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className="mt-12 mx-10">
      <h2 className="text-white text-2xl">Trending Arists</h2>
      <div className="flex justify-center items-center flex-wrap">
        {data.slice(0, 4).map((music, i) => (
          <ArtistCard key={music.id} i={i} music={music} />
        ))}
      </div>
    </div>
  );
};

export default TrendingArtists;

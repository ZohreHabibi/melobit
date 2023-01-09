import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import MusicCardSearchMusics from "../components/MusicCardSearchMusics";
import MusicCardSearchArtists from "../components/MusicCardSearchArtists";
import MusicCardSearchAlbums from "../components/MusicCardSearchAlbums";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Search = () => {
  const [searchResult, setSearchResult] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://api-beta.melobit.com/v1/search/query/${
          searchResult !== "" && searchResult
        }/0/50`
      )
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
  }, [searchResult]);

  if (isLoading) {
    return <Loader title="Search" />;
  }
  if (error) {
    return <Error />;
  }

  const handleSearchTerm = (searchTerm) => {
    setSearchResult(searchTerm);
  };
  let musicsResultsArray = [];
  let artistResultsArray = [];
  let albumsResultsArray = [];

  data.forEach((music, i) => {
    if (music.type === "song") {
      musicsResultsArray.push(music);
    } else if (music.type === "artist") {
      artistResultsArray.push(music);
    } else if (music.type === "album") {
      albumsResultsArray.push(music);
    }
  });

  let artistsResultsContent, musicsResultsContent, albumsResultsContent;
  if (musicsResultsArray.length !== 0) {
    musicsResultsContent = (
      <div className="mt-12 mx-12">
        <h1 className="text-white md:ml-[7rem] text-2xl">Musics</h1>
        <div className="flex justify-center items-center flex-wrap">
          {musicsResultsArray.map((music, i) => (
            <MusicCardSearchMusics
              currentListData={musicsResultsArray}
              music={music}
              i={i}
              key={music?.song.id}
            />
          ))}
        </div>
      </div>
    );
  }
  if (artistResultsArray.length !== 0) {
    artistsResultsContent = (
      <div className="mt-12 mx-12">
        <h1 className="text-white md:ml-[7rem] text-2xl">Artists</h1>
        <div className="flex justify-center items-center flex-wrap">
          {artistResultsArray.map((music) => (
            <MusicCardSearchArtists music={music} key={music?.artist.id} />
          ))}
        </div>
      </div>
    );
  }
  if (albumsResultsArray.length !== 0) {
    albumsResultsContent = (
      <div className="mt-12 mx-12">
        <h1 className="text-white md:ml-[7rem] text-2xl">Albums</h1>
        <div className="flex justify-center items-center flex-wrap">
          {albumsResultsArray.map((music) => (
            <MusicCardSearchAlbums music={music} key={music?.album.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <Searchbar onSetSearchTerm={handleSearchTerm} />
      <h1 className="text-white text-center text-3xl mt-[3.5rem]">
        Type Something To Search
      </h1>
      {artistsResultsContent}
      {albumsResultsContent}
      {musicsResultsContent}
    </div>
  );
};

export default Search;

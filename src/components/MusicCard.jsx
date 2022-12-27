import { Link } from "react-router-dom";
const MusicCard = ({ music, i }) => {
  return (
    <div className="bg-chartbg p-5 mt-5 rounded-sm md:mx-2 w-[18rem] flex flex-col items-center justify-center ">
      <img
        className="w-[14rem] h-[14rem] "
        src={music.image?.cover.url}
        alt="cover"
      />

      <div className="pt-2 w-full text-center ">
        <Link to={`/artists/${music.id}`} className="text-white  truncate ">
          {music.title}
        </Link>

        <p className="text-gray-400 truncate text-sm ">
          {music.artists[0]?.fullName}
        </p>
      </div>
    </div>
  );
};

export default MusicCard;

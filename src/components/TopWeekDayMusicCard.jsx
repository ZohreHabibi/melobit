import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
const TopWeekDayMusicCard = ({ music, i }) => {
  console.log(music);
  return (
    <div className="text-white text-lg flex w-full  p-5  my-5 items-center justify-between bg-chartbg">
      <div className="flex justify-between items-center w-1/6">
        <span className="text-2xl  ml-3">{i + 1}</span>
        <img
          className="rounded-5"
          src={music.image?.thumbnail_small.url}
          alt={music?.album.name}
        />
      </div>

      <span>{music?.album.name}</span>
      <span>{music?.artists[0].fullName}</span>
      <span>{music?.downloadCount} downloads</span>
      <span>
        <BsFillPauseFill
          className="rounded-full border-whiter border-4 hover:border-gray-300 cursor-pointer"
          color="white"
          size={65}
        />
      </span>
    </div>
  );
};

export default TopWeekDayMusicCard;

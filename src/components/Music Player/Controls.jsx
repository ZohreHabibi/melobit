import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

const Controls = ({
  isPlaying,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => {
  return (
    <div className="flex   flex-col gap-2">
      <div className="flex items-center ">
        <MdSkipPrevious
          onClick={() => handlePrevSong()}
          className=" hidden md:block mx-2 cursor-pointer"
          size={30}
        />
        {isPlaying ? (
          <BsFillPauseFill
            className="mx-0 md:mx-2  cursor-pointer"
            size={50}
            onClick={handlePlayPause}
          />
        ) : (
          <BsFillPlayFill
            className=" mx-0 md:mx-2 cursor-pointer"
            size={50}
            onClick={handlePlayPause}
          />
        )}

        <MdSkipNext
          onClick={() => handleNextSong()}
          className=" hidden md:block mx-2 cursor-pointer "
          size={30}
        />
      </div>
    </div>
  );
};

export default Controls;

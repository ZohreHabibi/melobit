import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import coverIcon from "../../assets/images/cover.jpg";
import audioSrc from "../../assets/01 Hollywood's Bleeding.mp3";
import { prevSong, nextSong, playPause } from "../../redux/features/player";
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";
import { useRef } from "react";
import { useSelector } from "react-redux";
const MusicPlayer = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const audioRef = useRef();
  return (
    <div className="w-full rounded-lg duration-200 z-50 flex items-center justify-between fixed text-white bottom-0 bg-gradient-to-br from-white/5 to-secondary backdrop-blur-lg ">
      <div className="flex items-center gap-3 p-5">
        <img className="rounded-full w-[6rem]   " src={coverIcon} alt="cover" />
        <div>
          <h3 className="font-bold text-xl">Lift Me Up From Black Panther</h3>
          <p className="text-gray-200">hey</p>
        </div>
      </div>
      <div className="flex   flex-col gap-2">
        <div className="flex items-center ">
          <BsArrowRepeat className="mx-2" size={30} />
          <MdSkipPrevious className="mx-2" size={30} />
          <BsFillPauseFill className="mx-2" size={50} />
          <MdSkipNext className="mx-2" size={30} />
          <BsShuffle className="mx-2" size={30} />
        </div>
        <div className="flex  ">
          <span>0:20</span>
          <input className="w-full mx-3" type="range" />
          <span>0:20</span>
        </div>
      </div>
      <div className="flex mr-10 ">
        <BsFillVolumeMuteFill size={30} />
        <input type="range" />
      </div>
      <audio ref={audioRef} src={audioSrc}></audio>
    </div>
  );
};

export default MusicPlayer;

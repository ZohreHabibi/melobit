import cover from "../assets/images/cover.jpg";

const TopArtistsSlider = () => {
  return (
    <div className="bg-chartbg mx-7 lg:hidden ">
      <div className="text-white mt-7  mx-6 flex justify-between   items-baseline     ">
        <h2 className="font-bold mt-3 text-2xl">Top Artists</h2>
        <p className="text-lg text-gray-400 ">See more</p>
      </div>
      <div className="flex p-4 my-3">
        <img className="w-[5rem] rounded-full mr-4  " src={cover} alt="cover" />
        <img className="w-[5rem] rounded-full mr-4 " src={cover} alt="cover" />
        <img className="w-[5rem] rounded-full mr-4 " src={cover} alt="cover" />
      </div>
    </div>
  );
};

export default TopArtistsSlider;

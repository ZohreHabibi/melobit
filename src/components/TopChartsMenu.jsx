import pauseIcon from "../assets/images/pause_circle_white_48dp.svg";
import cover from "../assets/images/cover.jpg";

const TopChartsMenu = () => {
  return (
    <div className="bg-chartbg rounded-md lg:fixed lg:right-7 lg:top-7 lg:w-[20rem] xl:w-[25rem] 2xl:w-[30rem]    ">
      <div className="text-white mt-5 mx-6 flex justify-between   items-baseline     ">
        <h2 className="font-bold mt-3 text-2xl">Top Charts</h2>
        <p className="text-lg text-gray-400 ">See more</p>
      </div>
      <div>
        <div className="text-white flex items-center justify-between  p-4 pb-0">
          <div className="flex items-center">
            <p className="font-bold mr-2 ">1.</p>
            <div className="flex items-center ">
              <img
                src={cover}
                className="w-[5rem] h-[5rem] rounded-md"
                alt="cover"
              />
              <div className="ml-3">
                <h4 className="text-xl font-bold">Unholy</h4>
                <p>sam Smith</p>
              </div>
            </div>
          </div>
          <img src={pauseIcon} alt="pauseIcon" />
        </div>
      </div>
      <div>
        <div className="text-white flex items-center justify-between  p-4   pb-0">
          <div className="flex items-center">
            <p className="font-bold mr-2 ">1.</p>
            <div className="flex items-center ">
              <img
                src={cover}
                className="w-[5rem] h-[5rem] rounded-md"
                alt="cover"
              />
              <div className="ml-3">
                <h4 className="text-xl font-bold">Unholy</h4>
                <p>sam Smith</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-white flex items-center justify-between  p-4   pb-0">
          <div className="flex items-center">
            <p className="font-bold mr-2 ">1.</p>
            <div className="flex items-center ">
              <img
                src={cover}
                className="w-[5rem] h-[5rem] rounded-md"
                alt="cover"
              />
              <div className="ml-3">
                <h4 className="text-xl font-bold">Unholy</h4>
                <p>sam Smith</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-white flex items-center justify-between    p-4">
          <div className="flex items-center">
            <p className="font-bold mr-2 ">1.</p>
            <div className="flex items-center ">
              <img
                src={cover}
                className="w-[5rem] h-[5rem] rounded-md"
                alt="cover"
              />
              <div className="ml-3">
                <h4 className="text-xl font-bold">Unholy</h4>
                <p>sam Smith</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopChartsMenu;

import searchIcon from "../assets/images/search-svgrepo-com.svg";

const Searchbar = () => {
  return (
    <div className="fixed  z-[80]">
      <img
        className="absolute left-2 bottom-3  cursor-pointer  "
        src={searchIcon}
        alt="search"
      />
      <input
        placeholder="Type here to search"
        className="bg-black rounded-md p-4 pl-8 outline-none border-none text-white  placeholder-white placeholder-ml-5     "
        id="search"
        type="text"
      />
    </div>
  );
};

export default Searchbar;

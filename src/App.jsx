import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import menuIcon from "./assets/images/menu_white_24dp.svg";
import Navigation from "./components/Navigation";
import Searchbar from "./components/Searchbar";
import Search from "./pages/Search";
import MusicPlayer from "./components/Music Player/MusicPlayer";
import Home from "./pages/Home";
import MusicDetail from "./pages/MusicDetail";
import TopMusics from "./pages/TopMusics";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" bg-secondary w-full h-screen ">
      <div className="md:flex bg-secondary w-full ">
        <Navigation isShowMenu={showMenu} />
        <section className="flex flex-col  w-full ">
          <div>
            <Searchbar />
            <div
              onClick={() => setShowMenu((prev) => (prev = !prev))}
              className="fixed right-3 top-3 cursor-pointer   "
            >
              <img src={menuIcon} alt="menu" />
            </div>
          </div>
          <div className="mt-8 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/top-musics" element={<TopMusics />} />
              <Route path="/artists/:MusicId" element={<MusicDetail />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
        </section>
      </div>
      <MusicPlayer />
    </div>
  );
}

export default App;

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { IoMdSettings , IoIosLogOut } from "react-icons/io";
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';
import { logout } from './redux/features/authSlice';

const Home = () => {
  const { activeSong } = useSelector((state) => state.player);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navitage = useNavigate();

  const out = () => {
    dispatch(logout())
    navitage('/login')
  }
  return (
    <div className="relative flex select-none">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar showModal={()=>setShowModal((prev)=>!prev)} />
        {showModal && 
        <div className='fixed rounded-md mr-1 left-auto top-14 z-20 inset-0 bg-[#191624] bg-opacity-90 backdrop-blur-sm flex justify-center items-center w-40 h-20 backdrop-blur-sm animate-slideup'>
         <ol className='text-white text-xl w-full'>
            <li className=' cursor-pointer border-b-2 border-gray-200/60 font-bold  w-full mb-1 flex pb-2 justify-start items-center h-full'>
            <IoMdSettings className='mr-3 ml-4'/> Setting
            </li>
            <li onClick={out} className=' cursor-pointer w-full flex  font-bold justify-start items-center h-full'>
            <IoIosLogOut  className='mr-3 text-red-600 ml-4' /> Log out</li>
            
         </ol>
        </div>}
        <div id='content-main' className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse ">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default Home;

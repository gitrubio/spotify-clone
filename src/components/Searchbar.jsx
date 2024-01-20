import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch  } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
const Searchbar = ({showModal}) => {
const navigate = useNavigate();
const [searchTerm, setSearchTerm] = useState('');
const { displayName } = useSelector((state) => state.auth);

const haandleSubmit = (e) => {
  e.preventDefault();
  navigate(`/search/${searchTerm}`);
}

return (
  <>
  <form onSubmit={haandleSubmit} autoComplete="off" className="flex justify-between flex-row p-2 text-gray-400 focus-within:text-gray-600">
    <label htmlFor="search-field" className="sr-only">
      Search all songs
    </label>
    <div className="flex flex-row justify-start items-center">
      <FiSearch className="w-5 h-5 ml-4" />
      <input 
      name="search-field" 
      autoComplete="off" 
      id="search-field" 
      placeholder="Search" 
      type="search" 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)}
      className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"/>
    </div>
    <div  className="w-40  h-full mr-10 flex justify-center items-center">
    <p className="text-white/80 mr-2 font-bold">Hello! {displayName}</p>
   
      <FaRegUserCircle onClick={showModal} size={30} className="text-white/80 font-bold cursor-pointer"/>
  
    </div>
    
  </form>
 
  </>
)

}

export default Searchbar;

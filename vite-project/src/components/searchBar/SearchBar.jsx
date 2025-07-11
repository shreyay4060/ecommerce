import { useState, useContext } from "react";
import searchData from "./searchData";
import SearchIcon from '@mui/icons-material/Search';
import myContexts from "../../context/myContexts";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { setSearchedCategory } = useContext(myContexts);

  const filterSearchData = searchData.filter((obj) =>
    obj.name.toLowerCase().includes(search.toLowerCase())
  ).slice(0, 8);

  // Handle click on search result
  function handleResultClick(item) {
    setSearchedCategory(item.name); // Set the searched category
    setSearch(""); // Optionally clear search input
  }

  return (
    <div className="">
      {/* search input  */}
      <div className="input flex pl-2 border-1 border-white hover:border-pink-700  rounded-lg bg-gray-200 mx-2">
        <SearchIcon className="mt-2.5 text-gray-500 hover:text-black"/>
        <input
          type="text"
          placeholder='Search here'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=' placeholder-gray-400  px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black '
        />
      </div>

      {/* search drop-down  */}
      <div className=" flex justify-center">
        {search && <div className="block absolute bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
          {filterSearchData.length > 0 ?
            <>
              {filterSearchData.map((item, index) => {
                return (
                  <div key={index} className="py-2 px-2 cursor-pointer" onClick={() => handleResultClick(item)}>
                    <div className="flex items-center gap-2">
                      <img className="w-10" src={item.image} alt="" />
                      {item.name}
                    </div>
                  </div>
                )
              })}
            </>
            :
            <>
              <div className="flex justify-center">
                <img className=" w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
              </div>
            </>}
        </div>
        }
      </div>
    </div>
  );
}

export default SearchBar;
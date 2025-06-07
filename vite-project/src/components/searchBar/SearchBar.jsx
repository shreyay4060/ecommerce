import { useState } from "react";

// Search Data
const searchData = [
  {
      name: 'Fashion',
      image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
  },
  {
      name: 'Shirt',
      image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
  },
  {
      name: 'Jacket',
      image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
  },
  {
      name: 'Mobile',
      image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg'
  },
  {
      name: 'Laptop',
      image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
  },
  {
      name: 'Home',
      image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
  },
  {
      name: 'book',
      image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
  },
  {
    name: 'Camera',
    image: 'https://i.pinimg.com/564x/43/e9/6b/43e96be00f16df4f4b481e2aa8383133.jpg'
},
{
    name: 'Watch',
    image: 'https://i.pinimg.com/564x/fb/44/2f/fb442fb43f8a541f8d0b1eec7989c548.jpg'
},
{
    name: 'Smartphone',
    image: 'https://i.pinimg.com/564x/f2/2f/93/f22f9372fdbadba858979c694c05c505.jpg'
},
{
    name: 'Headphones',
    image: 'https://i.pinimg.com/564x/3e/7d/1e/3e7d1e2373619c2678db8c505d27c3cc.jpg'
},
{
    name: 'Shoes',
    image: 'https://i.pinimg.com/564x/1f/27/ce/1f27ce97e28ce621ef21cf9eb042ff12.jpg'
},
{
    name: 'Bag',
    image: 'https://i.pinimg.com/564x/bf/66/64/bf66647d934c9f8e5456be4c46ac23bc.jpg'
},
{
    name: 'Glasses',
    image: 'https://i.pinimg.com/564x/0f/64/6b/0f646b51594ec11e7b5a37fd82c7db2a.jpg'
},
{
    name: 'Perfume',
    image: 'https://i.pinimg.com/564x/7e/7d/1d/7e7d1d51eeb3c3a5c5de1f7c65b96260.jpg'
},
{
    name: 'Gaming Console',
    image: 'https://i.pinimg.com/564x/f3/4f/d5/f34fd5267d5a30b032f9575f63b8888f.jpg'
},
{
    name: 'Coffee Mug',
    image: 'https://i.pinimg.com/564x/5c/7a/60/5c7a60db04f5eb5f17c4a4264f6f13a6.jpg'
}

]

const SearchBar = () => {
  
   const [search, setSearch] = useState("");

  
   const filterSearchData = searchData.filter((obj) => obj.name.toLowerCase().includes(search.toLowerCase())).slice(0, 8)
  return (
    <div className="">
    {/* search input  */}
    <div className="input flex justify-center">
        <input
            type="text"
            placeholder='Search here'
            onChange={(e) => setSearch(e.target.value)}
            className=' bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black '
        />
    </div>

    {/* search drop-down  */}
    <div className=" flex justify-center">
        {search && <div className="block absolute bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ?
                <>
                    {filterSearchData.map((item, index) => {
                        return (
                            <div key={index} className="py-2 px-2">
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
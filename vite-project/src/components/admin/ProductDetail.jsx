import { Link } from "react-router-dom";

const ProductDetail = () => {
    return (
        <div>
            <div className="py-5 flex justify-between items-center">
                {/* text  */}
                <h1 className=" text-xl text-pink-600 font-bold">All Product</h1>
                {/* Add Product Button  */}
                <Link to={'/addproduct'}>
                <button className="px-5 py-2 bg-pink-600 text-white hover:bg-pink-700 active:bg-pink-800 border border-pink-100 rounded-lg">Add Products</button>
                </Link>
            </div>

            {/* table  */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400" >
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-400 font-bold fontPara">S.No.</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-400 ">Location Name</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-400 ">Action</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-400 ">Action</th>
                        </tr>
                        <tr className=" bg-pink-200 text-black">
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-600  ">
                                1.
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 first-letter:uppercase ">
                                {'name'}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-800 text-green-500 cursor-pointer ">
                                Edit
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-900 text-red-500 cursor-pointer ">
                                Delete
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
            </div>
        </div>
    );
}

export default ProductDetail;
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import myContexts from "../../context/myContexts";
import Loader from "../loader/Loader";

function HomePageProductCard(){
    const navigate = useNavigate();

    // context
    const context = useContext(myContexts);
    const{getAllProduct , loading} = context;
    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>
            <div className="flex justify-center">
                 {loading && <Loader />}
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                       
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0,8).map((item, index) => {
                            const {id, productImageUrl, title, price } = item;
                            return (
                                <div key={index}  className="p-4 w-1/2 lg:w-1/4    md:w-1/3 md:text-s text-sm">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={()=>navigate(`/productInfo/${id}`)}
                                                className="md:h-60  h-38 w-full"
                                                src={productImageUrl}
                                                alt="blog"
                                            />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                EasyShop
                                            </h2>
                                            <h1 className="title-font  font-normal text-gray-900 mb-3">
                                                {title.substring(0, 15)}
                                            </h1>
                                            <h1 className="title-font text-lg font-normal text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center ">
                                                <button className=" bg-violet-600 hover:bg-violet-800 lg:px-2 md:text-amber-50 lg:py-2  px-2 font-bold py-1 text-white py-[4px] rounded-lg text-sm ">
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;
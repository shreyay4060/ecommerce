import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Layout from "../../components/layout/Layout";
import myContexts from "../../context/myContexts";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function CategoryPage() {
  const { categoryname } = useParams();
  const { getAllProduct } = useContext(myContexts);
  const navigate = useNavigate();

  const filter = getAllProduct.filter((obj) =>
    obj.category.includes(categoryname)
  );



//   for back

  function backFunction(){
    navigate("/homePage")
  }

  return (
    <Layout>
      {/* Heading */}
      <div className="text-center flex mt-5 mb-6">
        <div>
            <ArrowBackIcon onClick={backFunction}/>
        </div>
        <h1 className="text-2xl w-full flex justify-center font-semibold text-gray-800">
          Products for : 
          <pre className="text-violet-600 capitalize"> {categoryname}</pre>
        </h1>
      </div>

      {/* Product Grid */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          {filter.length > 0 ? (
            <div className="flex w-1/2 text-sm lg:w-full flex-wrap -m-4">
              {filter.map((item, index) => {
                // const { id, productImageUrl, title, price } = item;
                return (
                  <div
                    key={index}
                    className="p-4  sm:w-1/2 md:w-1/3 lg:w-1/4"
                  >
                    <div className="h-full flex justify-center flex-col border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white cursor-pointer">
                      <img
                        onClick={() => navigate(`/productInfo/${item.id}`)}
                        className=" md:h-60  object-cover"
                        src={item.productImageUrl}
                        alt={item.title}
                      />
                      <div className="p-5">
                        <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">
                          EasyShop
                        </h2>
                        <h1 className="text-gray-900 font-medium text-base mb-2">
                          {item.title.substring(0, 15)}
                        </h1>
                        <p className="text-lg font-semibold text-gray-800 mb-3">
                          ₹{item.price}
                        </p>
                        <div className="flex justify-center">
                          <button className="bg-violet-600 text-sm hover:bg-violet-800 text-white font-bold py-1 px-3 rounded text-sm transition duration-200">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center mt-10">
              <img
                src="https://th.bing.com/th/id/OIP.jCNUT175VB4lXBu8iEPIgAAAAA?rs=1&pid=ImgDetMain"
                alt="No Products"
                className="w-72 mx-auto"
              />
              
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

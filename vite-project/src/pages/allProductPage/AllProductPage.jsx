import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContexts from "../../context/myContexts";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

export default function AllProduct() {
  const context = useContext(myContexts);

  // getAllProduct
  const { getAllProduct, loading } = context;

  const navigate = useNavigate();

  // redux addToCart
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // addToCart function

  function addCart(item) {
    dispatch(addToCart({ ...item, time: new Date().toLocaleString() }));
    toast.success("Added to cart");
  }

  // deleteFromCartFun
  function deleteFromCartFun(item) {
    const safeItem = {
      ...item,
      time: item.time?.toMillis?.() || item.time, // convert Timestamp to number
    };
    dispatch(deleteFromCart(safeItem));
    toast.success("Deleted from cart");
  }


  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cartItems))
  },[cartItems])

  
  return (
    <Layout>
      <div className="py-8">
        {/* Heading  */}
        <div className="">
          <h1 className=" text-center mb-5 text-2xl font-semibold">
            All Products
          </h1>
        </div>
        <div className="flex justify-center mt-20">{loading && <Loader />}</div>

        {/* main  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 lg:px-0 py-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              {getAllProduct.map((item, index) => {
                const { id, productImageUrl, title, price } = item;
                return (
                  <div key={index} className="p-4 w-full md:w-1/4">
                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                      <img
                        onClick={() => navigate(`/productInfo/${id}`)}
                        className="lg:h-80  h-96 w-full"
                        src={productImageUrl}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          EasyShop
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {title.substring(0, 25)}
                        </h1>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          ₹{price}
                        </h1>

                        <div className="flex justify-center ">
                          {cartItems.some(
                            (product) => product.id === item.id
                          ) ? (
                            <button
                              onClick={() => deleteFromCartFun(item)}
                              className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                            >
                              Delete from cart
                            </button>
                          ) : (
                            <button
                              onClick={() => addCart(item)}
                              className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                            >
                              Add To Cart
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

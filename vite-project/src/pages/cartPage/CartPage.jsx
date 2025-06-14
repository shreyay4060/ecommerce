import Layout from "../../components/layout/Layout";
import { Trash } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";

function CartPage() {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // deletFromCart function
  function deleteFromCartFun(item) {
    dispatch(deleteFromCart({ ...item, time: new Date().toLocaleString() }));
    toast.success("Deleted from cart");
  }

  // incrementFun
  function incrementProductQuantityFun(id) {
    dispatch(incrementQuantity(id));
  }

  // decrement quantity fun
  function decrementProductQuantityFun(id) {
    dispatch(decrementQuantity(id));
  }

  // cartTotal
  const cartTotal = cartItems
    .map((item) => item.quantity)
    .reduce((prev, curr) => prev + curr, 0);
  // console.log(cartTotal)

  const totalPrice = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);
  console.log(totalPrice);

  // useEffect
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // discount
  let discount = (totalPrice * 5) / 100;
  discount = Math.floor(discount);
  console.log(discount);

  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-7xl  lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <h1 className="text-2xl hover:text-violet-600 flex justify-center font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          {cartItems.length > 0 ? (
            <form className="mt-7 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
              <section
                aria-labelledby="cart-heading"
                className="rounded-lg bg-white lg:col-span-8"
              >
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>
                <ul role="list" className="divide-y divide-gray-200">
                  {cartItems.map((product, index) => (
                    <div key={index} className="">
                      <li className="flex py-6 sm:py-6 ">
                        <div className="flex-shrink-0">
                          <img
                            src={product.productImageUrl}
                            alt={product.title}
                            className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                              <div className="flex justify-between">
                                <h3 className="font-semibold text-black">
                                  {product.title}
                                </h3>
                              </div>
                              <div className="mt-1 flex text-sm">
                                <p className="text-sm text-gray-500">
                                  {product.category}
                                </p>
                              </div>
                              <div className="mt-1 flex items-end">
                                <p className="text-xs font-medium text-gray-500 ">
                                  ₹ {product.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <div className="mb-2 flex">
                        <div className="min-w-24 flex">
                          <button
                            onClick={() =>
                              decrementProductQuantityFun(product.id)
                            }
                            type="button"
                            className="h-7 w-7"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            readOnly
                            className="mx-1 h-7 w-9 rounded-md border text-center"
                            value={product.quantity}
                          />
                          <button
                            onClick={() =>
                              incrementProductQuantityFun(product.id)
                            }
                            type="button"
                            className="flex h-7 w-7 items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        <div className="ml-6 flex text-sm">
                          <button
                            type="button"
                            onClick={() => deleteFromCartFun(product)}
                            className="flex items-center space-x-1 px-2 py-1 pl-0"
                          >
                            <Trash size={12} className="text-red-500" />
                            <span className="text-xs font-medium text-red-500">
                              Remove
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              </section>
              {/* Order summary */}
              <section
                aria-labelledby="summary-heading"
                className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
              >
                <h2
                  id="summary-heading"
                  className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                >
                  Price Details
                </h2>
                <div>
                  <dl className=" space-y-1 px-2 py-4">
                    <div className="flex items-center justify-between">
                      <dt className="text-sm text-gray-800">
                        Price ({cartItems.length} items)
                      </dt>
                      <dd className="text-sm font-medium text-gray-900">
                        {totalPrice}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <dt className="flex items-center text-sm text-gray-800">
                        <span>Discount 5%</span>
                      </dt>
                      <dd className="text-sm font-medium text-green-700">
                        - ₹ {discount}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <dt className="flex text-sm text-gray-800">
                        <span>Delivery Charges</span>
                      </dt>
                      <dd className="text-sm font-medium text-green-700">
                        Free
                      </dd>
                    </div>
                    <div className="flex items-center justify-between border-y border-dashed py-4 ">
                      <dt className="text-base font-medium text-gray-900">
                        Total Amount
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        ₹ {totalPrice - discount}
                      </dd>
                    </div>
                  </dl>
                  <div className="px-2 pb-4 font-medium text-green-700">
                    <div className="flex gap-4 mb-6">
                      <button className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl">
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </form>
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
      </div>
    </Layout>
  );
}

export default CartPage;

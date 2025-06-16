import { useContext } from "react";
import myContexts from "../../context/myContexts";
import Loader from "../loader/Loader";

const OrderDetail = () => {
  const context = useContext(myContexts);
  const { getAllOrder, loading } = context;
  console.log(getAllOrder);

  // user
  const user = JSON.parse(localStorage.getItem("users"));

  return (
    <div>
      <div>
        <div className="py-5">
          {/* text  */}
          <h1 className=" text-xl text-pink-600 font-bold">All Order</h1>
        </div>

        {/* table  */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
            <tbody>
              <tr>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-900 bg-violet-300 font-bold fontPara">
                  Sr.No.
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300">
                  Order ID
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300">
                  Image
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300">
                  Title
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300">
                  Category
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300">
                  Price
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300">
                  Quantity
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300">
                  Total Price
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300">
                  Status
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300">
                  Name
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300">
                  Address
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300">
                  Pincode
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300">
                  Phone Number
                </th>
                <th className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-violet-300">
                  Email
                </th>
              </tr>

              {getAllOrder.map((order) =>
                order.cartItems.map((item, index) => {
                  const {
                    id,
                    productImageUrl,
                    title,
                    price,
                    category,
                    quantity,
                   
                  } = item;

                  return (
                    <tr key={index} className="bg-pink-200 text-gray-800">
                      {loading && (
                        <td colSpan={14}>
                          <div className="flex justify-center mt-3">
                            <Loader />
                          </div>
                        </td>
                      )}
                      {!loading && (
                        <>
                          <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 ">
                            {index + 1}.
                          </td>
                          <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 ">
                            {id}
                          </td>
                          <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100">
                            <img src={productImageUrl} alt="img" className="w-24 h-20 object-cover" />
                          </td>
                          <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 t">
                            {title}
                          </td>
                          <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100">
                            {category}
                          </td>
                          <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 ">
                            {price}
                          </td>
                          <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 ">
                            {quantity}
                          </td>
                          <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 ">
                            {quantity * price}
                          </td>
                          <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-green-500">
                            {order.status}
                          </td>
                          <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 text-black">
                            {order.deliveryDetails.name}
                          </td>
                          <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 ">
                            {order.deliveryDetails.address}
                          </td>
                          <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 ">
                            {order.deliveryDetails.pincode}
                          </td>
                          <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 ">
                            {order.deliveryDetails.mobileNumber}
                          </td>
                          <td className="h-12 px-6 text-md border-t border-l first:border-l-0 border-pink-100 ">
                            {order.email}
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
          <br />
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;

import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import myContexts from "../../context/myContexts";
import  Loader  from "../../components/loader/Loader";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig"

const categoryList = [
  {
    name: "fashion",
  },
  {
    name: "shirt",
  },
  {
    name: "jacket",
  },
  {
    name: "mobile",
  },
  {
    name: "laptop",
  },
  {
    name: "shoes",
  },
  {
    name: "home",
  },
  {
    name: "books",
  },
];
const AddProductPage = () => {

  // validation
  const navigate = useNavigate();

  // context
  const context = useContext(myContexts);

  // loader
  const { loading, setLoading } = context;

  const [addProduct, setAddProduct] = useState({
    title: "",
    price: "",
    imgURL: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const productFunction = async () => {
    if (
      addProduct.title === "" ||
      addProduct.price === "" ||
      addProduct.imgURL === "" ||
      addProduct.category === "" ||
      addProduct.description === ""
    ) {
      return toast.error("Please fill all the fields");
    }

    setLoading(true);

    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, addProduct);
      toast.success("Product added successfully...");
      navigate("/adminDashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Product is not added , sorry 🙃");
    }
  };

  // onChange function

  function handleChange(event) {
    const { name, value } = event.target;

    setAddProduct((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  // const [values, setValues] = useState("");

  // function handleClick() {
  //   setValues(addProduct);
  //   console.log(values);
  // }
  return (
    <div>
      <div className="flex justify-center items-center bg-violet-200  h-screen">
        {loading && <Loader />}
        {/* Login Form  */}
        <div className="login_Form bg-violet-100  lg:px-8 lg:py-6 px-3 py-5 border-2 border-violet-500 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-violet-600 ">
              Add Product
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-5">
            <input
              type="text"
              onChange={handleChange}
              value={addProduct.title}
              name="title"
              placeholder="Product Title"
              className="bg-pink-50  border border-black-200 px-2 py-2 w-80 rounded-md outline-none "
            />
          </div>

          {/* Input Two  */}
          <div className="mb-5">
            <input
              name="price"
              type="number"
              onChange={handleChange}
              value={addProduct.price}
              placeholder="Product Price"
              className="bg-pink-50  border border-black px-2 py-2 w-80 rounded-md outline-none "
            />
          </div>

          {/* Input Three  */}
          <div className="mb-3">
            <input
              type="text"
              name="imgURL"
              placeholder="Product Image Url"
              onChange={handleChange}
              value={addProduct.imgURL}
              className="bg-pink-50 border border-black px-2 py-2 w-80 rounded-md outline-none"
            />
          </div>

          {/* Input Four  */}
          <div className="mb-3">
            <select
              className="w-full px-1 py-2  bg-pink-50 border  border-black rounded-md outline-none  "
              onChange={handleChange}
              name="category"
              value={addProduct.category}
            >
              <option disabled>Select Product Category</option>
              {categoryList.map((value, index) => {
                const { name } = value;
                return (
                  <option
                    className=" first-letter:uppercase"
                    key={index}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Input Five  */}
          <div className="mb-3">
            <textarea
              name="description"
              placeholder="Product Description"
              onChange={handleChange}
              value={addProduct.description}
              rows="5"
              className=" w-full px-2 py-1 bg-pink-50 border border-black rounded-md outline-none "
            ></textarea>
          </div>

          {/* Add Product Button  */}
          <div className="mb-3">
            <button
              onClick={productFunction}
              type="button"
              className="bg-violet-500 hover:bg-violet-600 active:bg-violet-800 w-full text-white text-center py-2 font-bold rounded-md "
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;


// input style object

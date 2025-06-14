import { useContext, useEffect, useState } from "react";
import myContexts from "../../context/myContexts";
import { useNavigate, useParams } from "react-router";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const categoryList = [
    {
        name: 'fashion'
    },
    {
        name: 'shirt'
    },
    {
        name: 'jacket'
    },
    {
        name: 'mobile'
    },
    {
        name: 'laptop'
    },
    {
        name: 'shoes'
    },
    {
        name: 'home'
    },
    {
        name: 'books'
    }
]

const UpdateProductPage = () => {

  // context
  const context = useContext(myContexts);
  const {loading ,setLoading , getAllProductFunction} = context;

  // id
  const {id} = useParams();
  console.log(id)

  // navigation
  const navigate=useNavigate();

  const [getProduct,setGetProduct] = useState({
    title:"",
    price:"",
    productImageUrl:"",
    category:"",
    description:"",
    time:Timestamp.now(),
    date:new Date().toLocaleString(
      "en-US",{
        month:"short",
        day:"2-digit",
        year:"numeric"
      }

    )
  })

  const getSingleProductFunction = async()=>{
    setLoading(true);
    try{
      const productTemp = await getDoc(doc(fireDB,"products" ,id));
      const product = productTemp.data();

      setGetProduct({
        title:product?.title,
        price:product?.price,
        productImageUrl:product?.productImageUrl,
        category:product?.category,
        quantity:product?.quantity,
        description:product?.description,
        time:product?.time,
        date:product?.date
      })
      setLoading(false)
    }
    catch(error){
      console.log(error)
    }
  }

  const updateProductFunction = async()=>{
    setLoading(true);
    try {
      await setDoc(doc(fireDB,"products",id), getProduct);
      toast.success("Product is updated successfully...");
      getAllProductFunction();
      setLoading(false)
      navigate("/adminDashboard")

      
    } catch (error) {
      console.log(error)
      toast.error("There is an error in updating product...🙃")
    }
  }

  useEffect(()=>{
    getSingleProductFunction();
  },[])

  // onchange function
  function handleChange(event){
    const{name,value} = event.target;

    setGetProduct((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
    console.log(getProduct)
  }
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                {/* Login Form  */}
                <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">

                    {/* Top Heading  */}
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-pink-500 '>
                            Update Product
                        </h2>
                    </div>

                    {/* Input One  */}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            onChange={handleChange} 
                            value={getProduct.title}
                            placeholder='Product Title'
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                        />
                    </div>

                    {/* Input Two  */}
                    <div className="mb-3">
                        <input
                            type="number"
                            name="price"
                            onChange={handleChange} 
                            value={getProduct.price}
                            placeholder='Product Price'
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                        />
                    </div>

                    {/* Input Three  */}
                    <div className="mb-3">
                        <input
                            type="text"
                            name="productImageUrl"
                            onChange={handleChange} 
                            value={getProduct.productImageUrl}
                            placeholder='Product Image Url'
                            className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                        />
                    </div>

                    {/* Input Four  */}
                    <div className="mb-3">
                        <select
                            className="w-full px-1 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none  "
                            onChange={handleChange} 
                            name="category"
                            value={getProduct.category}>
                            <option disabled>Select Product Category</option>
                            {categoryList.map((value, index) => {
                                const { name } = value
                                return (
                                    <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                                )
                            })}
                        </select>
                    </div>

                    {/* Input Five  */}
                    <div className="mb-3">
                        <textarea
                            name="description"
                            onChange={handleChange} 
                            value={getProduct.description} placeholder="Product Description" rows="5" className=" w-full px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300 ">
                        </textarea>
                    </div>

                    {/* Update Product Button  */}
                    <div className="mb-3">
                        <button
                            type='button'
                            onClick={updateProductFunction}
                            className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
                        >
                            Update Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateProductPage;
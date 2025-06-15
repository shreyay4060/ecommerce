import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContexts from "../../context/myContexts";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";


export default function ProductInfo (){
    const context = useContext(myContexts);
    const {loading , setLoading } = context;

    // navigate
    const navigate=useNavigate();

    const [product , setProduct] = useState("");
    
    // id
    const {id} = useParams();

    // setProduct function
    const getSingleProduct = async()=>{
        setLoading(true);
        try{
            const productTemp = await getDoc(doc(fireDB,"products",id));
            setProduct({...productTemp.data() , id : productTemp.id})
            setLoading(false);
            // console.log(productTemp.data())
        }
        catch(error){
            console.log(error)
        }
    }
    console.log(product)
    useEffect(()=>{
        getSingleProduct()
    },[])

    // redux
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    // addToCartFun
    function addToCartFun(item){
        dispatch(addToCart({...item , time : new Date().toLocaleString()}));
        toast.success("Added to cart")
    }

    // deleteFromCartFun
   function deleteFromCartFun(item) {
       const safeItem = {
         ...item,
         time: item.time?.toMillis?.() || item.time, 
       };
       dispatch(deleteFromCart(safeItem));
       toast.success("Deleted from cart");
     }

    // useEffect
    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cartItems))
    },[cartItems])
    return (
        <Layout>
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-200">
                {loading ?
                    <>
                        <div className="flex justify-center mt-30 items-center">
                            <Loader />
                        </div>
                    </>

                    :

                    <>
                        <div className="max-w-6xl px-4 mx-auto">
                            <div className="flex  mb-24 -mx-4">
                                <div className="w-full flex justify-center px-4 mb-8 md:w-1/2 md:mb-0">
                                    <div className="">
                                        <div className="">
                                            <img
                                                className="bg-blend-color-burn lg:h-80 h-60 rounded-lg"
                                                src={product?.productImageUrl}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2">
                                    <div className="lg:pl-20">
                                        <div className="mb-6 ">
                                            <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-black md:text-2xl ">
                                                {product?.title}
                                            </h2>
                                            <div className="flex flex-wrap items-center mb-6">
                                                <ul className="flex mb-4 mr-2 lg:mb-0">
                                                    <li>
                                                        <a href="">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="inline-block text-2xl font-semibold text-black  ">
                                                <span>₹ {product?.price}</span>
                                            </p>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="mb-2 text-lg font-bold text-black ">
                                            </h2>
                                            
                                                <pre className="font-bold">Description : </pre>
                                            <p className="flex">
                                                 {product.description}</p>
                                        </div>
                                        <div className="mb-6 " />
                                        <div className="flex flex-wrap items-center mb-6">
                                            {cartItems.some((p)=>p.id === product.id) ?
                                            <button
                                            onClick={()=>deleteFromCartFun(product)}
                                            className="w-full px-4 py-3 text-center text-white font-bold bg-violet-600 border border-violet-600  hover:bg-violet-800 active:bg-violet-200 active:text-violet-600 hover:text-gray-100  rounded-xl"
                                            >Delete From Cart
                                            </button> :
                                            <button
                                            onClick={()=>addToCartFun(product)}
                                            className="w-full px-4 py-3 text-center text-white font-bold bg-violet-600 border border-violet-600  hover:bg-violet-800 active:bg-violet-200 active:text-violet-600 hover:text-gray-100  rounded-xl"
                                            >Add to cart
                                            </button>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
            </section>
        </Layout>
    );
}


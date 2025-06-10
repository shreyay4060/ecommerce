/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import myContexts from "../../context/myContexts";
import toast from "react-hot-toast";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import  Loader  from "../../components/loader/Loader";

const Signup = ({ values, onChange, onClose, onSubmit }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const context = useContext(myContexts);
  const navigate = useNavigate();

  const { loading, setLoading } = context;

  // user signup usestate
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  // onChange function

  function handleChange(event) {
    const { name, value } = event.target;
    setUserSignup((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  // user Signup function

  const userSignupFunction = async () => {
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      return toast.error("Please fill all the fields");
    }
    setLoading(true);

    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );
      const user = {
        name: userSignup.name,
        email: userSignup.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      const userReference = collection(fireDB,"user")

      // add the user datausing addDoc
     await addDoc(userReference , user)

      // reset form
      setUserSignup({
        name: "",
        email: "",
        password: "",
      });

      toast.success("Successfully signedin...")

      setLoading(false)
      navigate("/login")
    } catch (error) {
      console.log("there is an error : " + error);
      setLoading(false)
    }
  };

 

  return (
    <>
      <div className="fixed inset-0  bg-opacity-0 backdrop-blur-xs flex justify-center items-center z-50">
        {loading && <Loader />}
        <div className="login_Form bg-pink-50 lg:px-8 py-6 border border-violet-400 px-5 rounded-xl w-70 shadow-md relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-red-500"
          >
            &times;
          </button>

          {/* Top Heading */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-pink-500 ">
              Signup
            </h2>
          </div>

          {/* Input One */}
          <div className="mb-3">
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={userSignup.name}
              placeholder="Full Name"
              className="bg-pink-50 border border-pink-500 px-2 py-2 w-full rounded-md outline-none placeholder-pink-200"
            />
          </div>

          {/* Input Two */}
          <div className="mb-3">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={userSignup.email}
              placeholder="Email Address"
              className="bg-pink-50 border border-pink-500 px-2 py-2 w-full rounded-md outline-none placeholder-pink-200"
            />
          </div>

          {/* Input Three */}
          <div className="mb-5">
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={userSignup.password}
              placeholder="Password"
              className="bg-pink-50 border border-pink-500 px-2 py-2 w-full rounded-md outline-none placeholder-pink-200"
            />
          </div>

          {/* Signup Button */}
          <div className="mb-5">
            <button
              type="button"
              onClick={userSignupFunction}
              className="bg-violet-700 active:bg-violet-900 hover:bg-violet-600 w-full text-white text-center py-2 font-bold rounded-md "
            >
              Signup
            </button>
          </div>

          {/* Login Link */}
          <div>
            <h2 className="text-black">
              Have an account{" "}
              <button
                className="text-pink-500 font-bold hover:text-violet-700 underline"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </button>
              {showLoginModal && (
                <Login onClose={() => setShowLoginModal(false)} />
              )}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

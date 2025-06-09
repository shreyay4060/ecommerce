/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import Signup from "./Signup"; // Import Signup component (adjust the path if needed)
import toast from "react-hot-toast";
import myContexts from "../../context/myContexts";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import {
  collection,
  onSnapshot,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { Loader } from "lucide-react";

const Login = ({ onClose }) => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const context = useContext(myContexts);

  const { loading, setLoading } = context;

  const navigate = useNavigate();

  const [showSignupModal, setShowSignupModal] = useState(false); // New state

  const userLoginFunction = async () => {
    // validation
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All Fields are required");
    }

    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );
      // console.log(users.user)

      try {
        const q = query(
          collection(fireDB, "user"),
          where("uid", "==", users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");
          setLoading(false);
          if (user.role === "user") {
            navigate("/userDashboard");
          } else {
            navigate("/adminDashboard");
          }
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login Failed");
    }
  };
  // onChange function
  function handleChange(event) {
    const { value, name } = event.target;
    setUserLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="fixed inset-0  bg-opacity-0 backdrop-blur-xs flex justify-center items-center z-50">
        {loading && <Loader />}
        <div className="login_Form bg-pink-50 w-70 px-3 lg:px-8 py-9 border border-pink-600 rounded-xl shadow-md relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-red-500"
          >
            &times;
          </button>

          {/* Top Heading */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-pink-500">
              Login <br />
            </h2>
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={userLogin.email}
              onChange={handleChange}
              className="bg-pink-50 border border-pink-600 px-2 py-2 w-full rounded-md outline-none placeholder-pink-200"
            />
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <input
              type="password"
              name="password"
              value={userLogin.password}
              placeholder="Password"
              onChange={handleChange}
              className="bg-pink-50 border border-pink-600 px-2 py-2 w-full rounded-md outline-none placeholder-pink-200"
            />
          </div>

          {/* Login Button */}
          <div className="mb-5">
            <button
              type="button"
              onClick={userLoginFunction}
              className="bg-violet-600 active:bg-violet-800 hover:bg-violet-700 w-full text-white text-center py-2 font-bold rounded-md"
            >
              Login
            </button>
          </div>

          {/* Signup Trigger Button */}
          <div>
            <h2 className="text-black">
              Don't Have an account{" "}
              <button
                className="text-pink-500 hover:text-violet-700 font-bold underline"
                onClick={() => {
                  setShowSignupModal(true);
                  onClose(); // Optional: close login modal
                }}
              >
                Signup
              </button>
            </h2>
          </div>
        </div>
      </div>

      {/* Conditionally render Signup modal */}
      {showSignupModal && (
        <Signup
          values={{ name: "", email: "", password: "" }}
          onChange={() => {}}
          onSubmit={() => {}}
          onClose={() => setShowSignupModal(false)}
        />
      )}
    </>
  );
};

export default Login;

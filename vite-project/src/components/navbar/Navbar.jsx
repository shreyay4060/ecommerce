import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import Signup from "../../pages/registration/Signup";

export default function Navbar() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  function toggleSignupModal() {
    setShowSignupModal((prev) => !prev);
  }

  function handleInputChange(event) {
    const { value, name } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleFormSubmit() {
    console.log(values);
    // Add Firebase logic here if needed
    toggleSignupModal();
  }

  // navigate
  const navigate = useNavigate();

  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));
  console.log(user);

  // logout function
  function logout() {
    localStorage.clear("users");
    navigate("/login");
  }

  const navList = (
    <ul className="flex space-x-6 text-white font-medium text-md px-5">
      <li className="hover:text-pink-200">
        <Link to={"/homePage"}>Home</Link>
      </li>

      <li className="hover:text-pink-200">
        <Link to={"/allProductPage"}>All</Link>
      </li>

      {!user ? (
        <li className="hover:text-pink-200">
          <button onClick={toggleSignupModal}>Signup</button>
        </li>
      ) : (
        ""
      )}

      {!user ? (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      ) : (
        ""
      )}

      {user?.role === "user" && (
        <li className="hover:text-pink-200">
          <Link to={"/userDashboard"}>{user?.name}</Link>
        </li>
      )}
      {user?.role === "admin" && (
        <li>
          <Link to={"/adminDashboard"}>{user?.name}</Link>
        </li>
      )}

      {user ?  <li className="hover:text-pink-200">
        <Link to={"/cartPage"}>Cart</Link>
      </li> : ""
      }

      {/* logout */}
      {user && <li className=" cursor-pointer border-2 border-pink-600 px-2 rounded-md hover:border-pink-600 pb-1 bg-pink-500 active:bg-pink-700 hover:bg-pink-600" onClick={logout}>Logout</li>}
    </ul>
  );

  return (
    <nav className="bg-violet-600 sticky top-0 w-full z-20">
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className="font-bold text-white hover:text-pink-200 text-2xl text-center">
              EasyShop
            </h2>
          </Link>
        </div>
        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>
        <SearchBar />
      </div>

      {/* Modal */}
      {showSignupModal && (
        <Signup
          values={values}
          onChange={handleInputChange}
          onClose={toggleSignupModal}
          onSubmit={handleFormSubmit}
        />
      )}
    </nav>
  );
}

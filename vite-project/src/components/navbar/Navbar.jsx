import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const navList = (
    <ul className="flex space-x-6 text-white font-medium text-md px-5">
      <li className="hover:text-pink-200">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="hover:text-pink-200">
        <Link to={"/allProductPage"}>All</Link>
      </li>
      <li className="hover:text-pink-200">
        <button onClick={toggleSignupModal}>Signup</button>
      </li>
      <li className="hover:text-pink-200">
        <Link to={"/userDashboard"}>User</Link>
      </li>
    <li>
        <Link to={'/adminDashboard'}>Admin</Link> 
    </li>
      <li className="hover:text-pink-200">
        <Link to={"/cartPage"}>Cart</Link>
      </li>
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

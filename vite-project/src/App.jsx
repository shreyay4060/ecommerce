import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cartPage/CartPage";
import AllProductPage from "./pages/allProductPage/AllProductPage";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import AddProductPage from "./pages/adminDashboard/AddProductPage";
import UpdateProductPage from "./pages/adminDashboard/UpdateProductPage";
import MyState from "./context/MyState";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productInfo" element={<ProductInfo />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/allProductPage" element={<AllProductPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard/>}/>
          <Route path="/addproduct" element={<AddProductPage/>}/>
          <Route path="/updateProduct" element={<UpdateProductPage/>}/>
        </Routes>
          <Toaster />
      </Router>
    </MyState>
  );
}

export default App;

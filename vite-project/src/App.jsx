import './App.css'
import Layout from './components/layout/Layout';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import NoPage from './pages/noPage/NoPage';
import ProductInfo from './pages/productInfo/ProductInfo';
import ScrollTop from './components/scrollTop/ScrollTop';
import CartPage from './pages/cartPage/CartPage';

function App() {

  return (
    <>
    <Router>
      <ScrollTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/*' element={<NoPage />} />
        <Route path="/productInfo" element = {<ProductInfo />} />
        <Route path ="/cartPage" element={<CartPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

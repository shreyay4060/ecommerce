import './App.css'
import Layout from './components/layout/Layout';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import NoPage from './pages/noPage/NoPage';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/*' element={<NoPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

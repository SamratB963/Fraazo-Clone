
import DownloadApp from './Component/DownloadApp';
import Login from './Pages/Auth/Login';
import NumberVerify from './Pages/Auth/NumberVerify';
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from './Pages/Products&details/ProductDetails';
import SamHome from './Pages/HomePageComponents/SamHome';
import Checkoutpage from './Pages/Cart/components/Checkoutpage';
import MenuPage from './Pages/Products&details/MenuPage';
import Order from './Pages/OrderPage/Order';
import RequireAuth from './RequireAuth/RequireAuth';
import { useSelector } from 'react-redux';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';


function App() {
  const { isAuth } = useSelector((state) => state.auth)
  var UserStoredDataFraazo = JSON.parse(localStorage.getItem('UserStoredDataFraazo')) || {};
  var toggleLogin = Object.keys(UserStoredDataFraazo).length;
  console.log(Object.keys(UserStoredDataFraazo).length)
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Routes>

        <Route path='/' element={<SamHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<MenuPage />} />
        <Route path='/productsdetails/:id' element={<ProductDetails />} />
        <Route path='/productsdetails/:id' element={<ProductDetails />} />
        <Route path='/checkoutPage' element={<Checkoutpage />} />
        <Route path='/profile/order' element={
          <RequireAuth>
            <Order />
          </RequireAuth>
        } />
      </Routes>
      <DownloadApp />
      <Footer />

    </div>
  );
}

export default App;

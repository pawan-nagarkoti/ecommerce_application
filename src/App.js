
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import ProductList from './componets/ProductList';
import ProductDetail from './componets/ProductDetail'
import Cart from './componets/Cart';
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path='/productdetail/:id' element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
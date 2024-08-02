import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import "./App.css";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CartProvider from "./context/CartProvider"
import { useState, useEffect } from "react";

function App() {
  // Dummy Api: https://dummyjson.com/docs/products

  //  const [cart,setCart] = useState([])

  //  const [itemsNo, setItemsNo] = useState()

  //  useEffect(() => {
  //    setItemsNo(cart.length);
  //  }, [cart]);

  //  const addToCart = (product) =>{
  //   setCart([...cart,product])
  //  }

  //  const removeFromCart = (productId) =>{
  //   const newCart = cart.filter((product) => product.id !== productId)
  //   setCart([...newCart])
  //  }

  //  const clearCart = ()=>{
  //   setCart([])
  //  }

  //  useEffect(() => {
  //  console.log(cart);
  //  }, [cart])

  return (
    <CartProvider>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:productId" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;

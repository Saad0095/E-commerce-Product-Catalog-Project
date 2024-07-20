import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import ProductDetail from './components/ProductDetail'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import './App.css'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { useState,useEffect } from 'react'

function App() {
// Dummy Api: https://dummyjson.com/docs/products

 const [cart,setCart] = useState([])

 const addToCart = (product) =>{
  setCart([...cart,product])
 }

 const removeFromCart = (productId) =>{
  const newCart = cart.filter((product) => product.id !== productId)
  setCart([...newCart])
 }

 const clearCart = ()=>{
  setCart([])
 }

 useEffect(() => {
 console.log(cart);
 }, [cart])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<MainPage addToCart={addToCart} />}  />
          <Route path='/:productId' element={<ProductDetail addToCart={addToCart} />}  />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart  removeFromCart={removeFromCart} cart={cart} clearCart={clearCart} />}/>
          <Route path='checkout' element={<Checkout clearCart={clearCart} cart={cart} />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

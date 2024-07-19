import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import ProductDetail from './components/ProductDetail'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import './App.css'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
// https://dummyjson.com/docs/products
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/:productId' element={<ProductDetail />} />
          <Route path='contact' element={<Contact />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

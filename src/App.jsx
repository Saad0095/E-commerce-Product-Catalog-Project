import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import ProductDetail from './components/ProductDetail'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import './App.css'

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
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

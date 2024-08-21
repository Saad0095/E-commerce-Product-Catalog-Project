import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CartProvider from "./context/CartProvider"
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {

  return (
    <CartProvider>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="orderconfirmation" element={<OrderConfirmation />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;

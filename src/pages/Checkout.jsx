import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const handleChange = (e) => {
    setOrderForm({ ...orderForm, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // alert("Your Order has been placed!");
    navigate("/orderconfirmation");
    clearCart();
  };

  useEffect(() => {
    const newSubtotal = cart.reduce((total, product) => {
      return total + product.price;
    }, 0);

    setSubtotal(newSubtotal.toFixed(2));
  }, [cart]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <form action="" onSubmit={handlePlaceOrder}>
        <h1 className="text-2xl font-bold text-center mb-6">Checkout</h1>
        <div className="billing-information space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={orderForm.name}
              id="name"
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={orderForm.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700"
            >
              Contact No.:
            </label>
            <input
              type="number"
              name="contact"
              id="contact"
              value={orderForm.contact}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address:
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={orderForm.address}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <ul className="my-14 border-gray-300 border-2 rounded-xl p-5">
          {cart.map((product, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 border-b-2 border-gray-300"
            >
              <h2 className="text-lg">{product.title}</h2>
              <h4 className="font-bold">${product.price}</h4>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center mt-6 font-bold">
          <h2>Subtotal:</h2>
          <h4>${subtotal}</h4>
        </div>
        <button
          type="submit"
          className="mt-6 w-full p-3 bg-green-600 rounded text-white font-bold hover:bg-green-700"
        >
          Place Order
        </button>
      </form>
      <Link className="text-yellow-500 flex justify-center items-center text-center mt-10 font-bold" to="/">
        Continue Shopping ?
      </Link>
    </div>
  );
};

export default Checkout;

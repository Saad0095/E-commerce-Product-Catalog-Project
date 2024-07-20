import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const [orderForm, setFormValue] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const handlePlaceOrder = () => {
    clearCart();
    alert("Your Order has been placed!");
    navigate("/");
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
            id="name" required
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
            id="email" required
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
            id="contact" required
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
            id="address" required
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
      <button type="submit"
        className="mt-6 w-full p-3 bg-green-600 rounded text-white font-bold hover:bg-green-700"
      >
        Place Order
      </button>
      </form>

    </div>
  );
};

export default Checkout;

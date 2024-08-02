import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <div>
      {cart.length !== 0 ? (
        <div>
          <ul>
            {cart.map((product, index) => {
              return (
                <li
                  key={index}
                  className="flex h-16 justify-between items-center my-7 mx-5"
                >
                  <div className="flex items-center h-full">
                    <img
                      src={product.thumbnail}
                      alt=""
                      className="h-full border-gray-200 border-2"
                    />
                    <div className=" mx-5">
                      <h3>{product.title}</h3>
                      <h4>${product.price}</h4>
                    </div>
                  </div>
                  <button
                    className="text-white bg-red-600 p-3 rounded-2xl"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="buttons flex justify-center items-center">
            <Link to="/">
              <button className="bg-blue-700 text-white p-3 rounded-lg m-2">
                Continue Shopping
              </button>
            </Link>
            <Link to="/checkout">
              <button className="bg-green-700 text-white p-3 rounded-lg m-2">
                Proceed To Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full flex-col mt-28">
          <h1 className="m-5">Your Cart is empty</h1>
          <Link to="/">
            <button className="bg-red-700 text-white p-3 rounded-lg">
              Back To HomePage
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

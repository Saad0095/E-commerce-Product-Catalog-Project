import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../context/CartContext";

const Navbar = () => {
 const {itemsNo} =useContext(CartContext)
  return (
    <div>
      <nav className="flex justify-between items-center h-16 w-full px-5 md:px-10 shadow-lg shadow-gray-200">
        <div className="logo text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-800">
          <h1>E-Buy</h1>
        </div>
        <ul className="flex justify-center items-center space-x-0 sm:space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/cart" className="flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="" />
            <span className="text-yellow-500 bg-gray-50 relative right-1 bottom-2 p-1 text-sm border-black" style={{borderRadius:"50%"}}>{itemsNo}</span>
          </NavLink>
        </ul>
      </nav>

    </div>
  );
};

export default Navbar;

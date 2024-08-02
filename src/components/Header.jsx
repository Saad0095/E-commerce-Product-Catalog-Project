import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../context/CartContext";

const Header = () => {
 const {itemsNo} =useContext(CartContext)
  return (
    <div>
      <nav className="flex justify-between items-center bg-black border-b-2 h-12 text-white px-3 w-full">
        <div className="logo">
          <h1>E-Buy</h1>
        </div>
        <ul className="flex justify-center items-center">
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

export default Header;

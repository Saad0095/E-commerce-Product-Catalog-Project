import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";

const ProductList = ({ products, msg }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <div className="flex flex-col w-full md:w-3/4 gap-5">
      <p className="error-msg ml-5">{msg}</p>

      <div className="products-listing">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className=" bg-gray-50 border-gray-400 border-2 flex flex-col h-full justify-between items-center mx-auto w-[300px]"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <img
                src={product.thumbnail}
                alt=""
                className="border-gray-300 border-b-2 w-full"
              />
              <div className="p-5">
                <h2>{product.title}</h2>
                <p>Catgory: {product.category}</p>
                <p>
                  <b>Price: ${product.price}</b>
                </p>
              </div>
              <button
                type="button"
                className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900 w-11/12 mx-auto mb-4"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;

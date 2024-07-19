import React from "react";
import { Link } from "react-router-dom";


const ProductList = ({products}) => {
  return (
    <div>
      <div className="products-listing">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="border-gray-400 border-2 flex flex-col h-full justify-between"
            >
              <Link to={`/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt=""
                  className="border-gray-300 border-b-2 w-full"
                />
                <div className="p-5 bg-gray-50">
                  <h2>{product.title}</h2>
                  <p>Catgory: {product.category}</p>
                  <p>
                    <b>Price: ${product.price}</b>
                  </p>
                </div>
              </Link>
              <button
                type="button"
                className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900 w-11/12 mx-auto mb-4"
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

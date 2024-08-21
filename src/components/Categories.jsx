import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'animate.css';

const Categories = ({handleCategoryClick}) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await axios.get(
      "https://dummyjson.com/products/category-list"
    );
    setCategories(response.data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="categories-list mt-5 animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-center">Explore Categories</h1>
      <ul className="w-full flex gap-2 overflow-hidden flex-wrap text-gray-700 p-4 bg-gray">
        {categories.map((category, index) => {
          return (
            <Link
              className="p-3 hover:bg-yellow-400 font-medium hover:text-white rounded-3xl"
              key={index}
              onClick={()=> handleCategoryClick(category)}
            >
              {category}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;

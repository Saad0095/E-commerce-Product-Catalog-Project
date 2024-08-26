import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = ({ handleCategoryClick }) => {
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
    <div className="categories-list mt-5 hidden md:block md:w-1/5 border-r-2">
      <h1 className="pl-4">Explore Categories</h1>
      <ul className="w-full flex flex-col gap-2 text-gray-700 p-4 bg-gray">
        {categories.map((category, index) => {
          return (
            <Link
              className="p-3 hover:bg-yellow-400 font-medium hover:text-white rounded-3xl"
              key={index}
              onClick={() => handleCategoryClick(category)}
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

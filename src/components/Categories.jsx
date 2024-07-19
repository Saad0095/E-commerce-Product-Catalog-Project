import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="categories-list">
      <ul className="flex space-x-4 flex-wrap text-gray-700 p-4 bg-gray justify-center">
        {categories.map((category, index) => {
          return (
            <Link
              className="p-3 hover:bg-cyan-500 hover:text-white rounded-3xl"
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

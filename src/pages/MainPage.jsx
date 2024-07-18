import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import Categories from "../components/Categories";

const MainPage = () => {
  const [products, setProducts] = useState();
  const [searchedProducts, setSearchedProducts] = useState();
  const [searchedValue, setSearchedValue] = useState("");
  const [msg, setMsg] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
      setSearchedProducts(response.data.products);
    } catch (error) {
      console.log("Error Fetching Data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setSearchedValue(e.target.value);
    // handleSearch(e.target.value);
    handleSearch();
  };

  // Product Search
  const handleSearch = async () => {
    if (searchedValue == "") {
      setSearchedProducts(products);
    } else {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/search?q=${searchedValue}`
        );
        if (response.data.products.length === 0) {
          setMsg("No Product Found");
          setSearchedProducts([]);
        } else {
          setMsg(`${response.data.products.length} Products Found`);
          setSearchedProducts(response.data.products);
        }
      } catch (error) {
        console.log("Product Not Found");
      }
    }
  };

  // Search By Category
  const handleCategoryClick = async (category) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      setMsg(`${response.data.products.length} Products Found`);
      setSearchedProducts(response.data.products);
    } catch (error) {
      setMsg("Failed to fetch Products");
    }
  };

  return (
    <div className="container mx-auto">
      <Categories handleCategoryClick={handleCategoryClick} />
      <SearchBar searchedValue={searchedValue} handleChange={handleChange} />
      <div>
        {searchedProducts ? (
          <div>
            <div className="error-msg">{msg}</div>
            <ProductList products={searchedProducts} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default MainPage;

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import Categories from "../components/Categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../context/CartContext";

const MainPage = () => {
  const {cart,itemsNo} = useContext(CartContext)
  const [products, setProducts] = useState();
  const [searchedProducts, setSearchedProducts] = useState();
  const [searchedValue, setSearchedValue] = useState("");
  const [msg, setMsg] = useState("");

  // Fetching Products
  const getData = async () => {
    try {
      // const response = await axios.get("https://dummyjson.com/products");
      const response = await axios.get(
        "https://dummyjson.com/products?limit=40"
      );
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
      setMsg("");
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
        setMsg("Unexpected Error Occured, Please try again later!");
        console.log(error);
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
      <div>
        {searchedProducts ? (
          <div>
            <Hero />
            <hr />
            <Categories handleCategoryClick={handleCategoryClick} />
            <SearchBar
              searchedValue={searchedValue}
              handleChange={handleChange}
            />
            <div className="error-msg ml-5">{msg}</div>
            <ProductList products={searchedProducts} />
            {cart.length !== 0 && (
              <div
                className="fixed bottom-7 right-7 bg-yellow-500 p-2"
                style={{ borderRadius: "50%" }}
              >
                <Link
                  to="/cart"
                  className="flex justify-center items-center relative left-2"
                >
                  <FontAwesomeIcon
                    icon={faBasketShopping}
                    className="text-white"
                  />
                  <span
                    className="text-white relative right-1 bottom-2 p-1 text-sm border-black font-bold"
                    style={{ borderRadius: "50%" }}
                  >
                    {itemsNo}
                  </span>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default MainPage;

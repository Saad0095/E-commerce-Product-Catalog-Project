import React from "react";
import "animate.css";

const Hero = () => {
  return (
    <section className="container min-h-screen flex justify-center items-center  animate__animated animate__bounceInUp p-2 gap-20 mx-auto">
      <div className="md:w-1/2 mx-auto flex-col p-4">
        <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Discover Our Exclusive Collection
          <br className="hidden lg:inline-block" />
          Before It's Gone!
        </h1>
        <p className="text-gray-600">
          Explore our range of premium products crafted to perfection. From
          stylish apparel to cutting-edge gadgets, find everything you need to
          enhance your lifestyle. Shop now and enjoy exceptional quality and
          unbeatable prices.
        </p>
      </div>
      <div className="hidden md:flex md:w-1/2 justify-center items-center">
        <img
          src="https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/thumbnail.png"
          className=""
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;

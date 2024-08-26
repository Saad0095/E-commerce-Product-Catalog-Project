import React from "react";
import "animate.css";

const Hero = () => {
  return (
    <div>
      <section className="min-h-screen flex justify-center items-center flex-col bg-gray-100 animate__animated animate__bounceInUp p-2">
        <div className="md:w-1/2">
        <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Discover Our Exclusive Collection
          <br className="hidden lg:inline-block" />
          Before It's Gone!
        </h1>
        <p className="text-gray-600">
              Explore our range of premium products crafted to perfection. From
              stylish apparel to cutting-edge gadgets, find everything you need
              to enhance your lifestyle. Shop now and enjoy exceptional quality
              and unbeatable prices.
            </p>
        </div>
        {/* <div
          className="hero container mx-auto flex px-5 py-24 h-[570px] md:flex-row flex-col "
        >
          <div className="animate__animated animate__bounceInUp lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center m-auto">
            <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Discover Our Exclusive Collection
              <br className="hidden lg:inline-block" />
              Before It's Gone!
            </h1>
            <p className="mb-8 leading-relaxed">
              Explore our range of premium products crafted to perfection. From
              stylish apparel to cutting-edge gadgets, find everything you need
              to enhance your lifestyle. Shop now and enjoy exceptional quality
              and unbeatable prices.
            </p>
          </div>
          <div className="hero-image lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex items-center justify-center animate__animated animate__fadeIn">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png"
            />
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Hero;

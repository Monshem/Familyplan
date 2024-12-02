import React from 'react';
import Navbar from '../components/Navbar';
import About from './About';

export const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className=" min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
        style={{ backgroundImage: "url('/header_img.png')" }}
      >
        <div className="container text-center mx-auto  py-4 px-6 md:px-20 lg:px-32 text-white ml-0">
          <h1 className="text-5xl sm:text-6xl mx:text-[82px] inline-block max-w-3xl font-semibold pt-20">
            Home plunning Lorem ipsum dolor sit amet.
          </h1>
          <div className="space-x-6 mt-16">
            <button href="" className="border border-white px-8 py-3 rou  hover:bg-green-300 transform duration-500">
              Project
            </button>
            <button
              href=""
              className="border border-white px-8 py-3 rou hover:bg-green-300 transform duration-500 "
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${assets.society2})` }}
    >
      {/* Overlay to dim the image and blend with black background */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Gradients to blend the image with the background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent opacity-90"></div>

      <div className="relative flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-5xl mb-7 text-gray-300 font-light">Student Organization</h1>
          <h2 className="text-7xl mb-8 text-orange-600 font-light">
          Coding Ninjas:  
          <span className="text-7xl mb-4 text-gray-300 font-light">KIIT Chapter</span>
          </h2>
          
          <Link to='/#recruitment'>
        <button className="mr-6 bg-orange-500 text-white py-2 px-12 rounded-full 
        hover:bg-orange-600 transform hover:scale-105 mt-4 md:mt-0 glow-on-hover">
          Join Us!
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

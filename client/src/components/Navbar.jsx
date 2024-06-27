import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="max-w-5xl mx-auto ">
      <div
        className="flex items-center justify-between 
bg-white/0 backdrop-blur-md text-black p-4 shadow-lg flex-wrap font-sans rounded-2xl"
      >
        <Link to="/">
          <img className="w-[160px] h-[50px]" src={assets.cnxkiitNOBG} alt="Logo" />
        </Link>

        
        <ul className="flex space-x-4 flex-wrap mt-4 md:mt-0">
        <Link to="/">
          <li
            onClick={() => setMenu("Home")}
            className="text-orange-500 hover:text-white cursor-pointer"
            
          >
            Home
          </li>
          </Link>
          <Link to="/#events">
            <li
              onClick={() => setMenu("Events")}
              className="text-orange-500 hover:text-white cursor-pointer"
            >
              Events
            </li>
          </Link>

          <Link to="/domains">
            <li
              onClick={() => setMenu("Domains")}
              className="text-orange-500 hover:text-white cursor-pointer"
            >
              Domains
            </li>
          </Link>

          {/* <li
            onClick={() => setMenu("Members")}
            className={
              menu === "Members"
                ? "text-orange-500 cursor-pointer"
                : "hover:text-black-500 cursor-pointer"
            }
          >
            Members
          </li> */}
        </ul>
        <Link to="/#recruitment">
          <button
            className="mr-6 bg-orange-500 text-white py-2 px-12 rounded-full 
        hover:bg-orange-600 transform hover:scale-105 mt-4 md:mt-0 glow-on-hover"
          >
            Join Us!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

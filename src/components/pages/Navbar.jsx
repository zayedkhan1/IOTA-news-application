import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';



const Navbar = ({ setCatagory }) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <nav className="bg-gray-800 fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">

            {/* Logo */}
            <div className="flex-shrink-0 text-2xl font-bold text-emerald-400">
              IOTA News
            </div>

            {/* Center Nav Items */}
            <div className="hidden md:flex space-x-8 text-white">
              <a onClick={() => { setCatagory("general") }} className="  hover:underline cursor-pointer">Home</a>
              <a onClick={() => { setCatagory("technology") }} className=" hover:underline cursor-pointer ">Technology</a>
              <a onClick={() => { setCatagory("business") }} className=" hover:underline  cursor-pointer">Business</a>
              <a onClick={() => { setCatagory("science") }} className=" hover:underline  cursor-pointer">Science</a>
              <a onClick={() => { setCatagory("health") }} className=" hover:underline  cursor-pointer">Health</a>
              <a onClick={() => { setCatagory("sports") }} className=" hover:underline  cursor-pointer">Sports</a>
              <a onClick={() => { setCatagory("entertainment") }} className=" hover:underline  cursor-pointer">Entertainment</a>
            </div>


            {/* Login Button */}
            <div className="hidden md:flex">
              <button className="bg-transparent border-3 border-emerald-400 text-emerald-400 rounded-xl px-2 py-1 transition transform active:translate-y-[2px] active:brightness-90 focus:outline-none cursor-pointer">Login</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center relative">
              <button onClick={() => { setOpen(!open) }} className="focus:outline-none bg-white">
                {
                  open ? <FaTimes></FaTimes> : <FaBars></FaBars>
                }
              </button>

              {/* Dropdown opens under button */}
              {
                open && (
                  <div className="absolute top-12 flex flex-col right-0 w-60 bg-white shadow-lg rounded-lg border-none p-3 space-y-2">
                    <a onClick={() => { setCatagory("general") }} className="text-gray-700 hover:text-blue-600 cursor-pointer">Home</a>
                    <a onClick={() => { setCatagory("technology") }} className="text-gray-700 hover:text-blue-600 cursor-pointer ">Technology</a>
                    <a onClick={() => { setCatagory("business") }} className="text-gray-700 hover:text-blue-600 cursor-pointer">Business</a>
                    <a onClick={() => { setCatagory("science") }} className="text-gray-700 hover:text-blue-600 cursor-pointer">Science</a>
                    <a onClick={() => { setCatagory("health") }} className="text-gray-700 hover:text-blue-600 cursor-pointer">Health</a>
                    <a onClick={() => { setCatagory("sports") }} className="text-gray-700 hover:text-blue-600 cursor-pointer">Sports</a>
                    <a onClick={() => { setCatagory("entertainment") }} className="text-gray-700 hover:text-blue-600 cursor-pointer">Entertainment</a>
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Login
                    </button>
                  </div>

                )
              }

            </div>
          </div>
        </div>
      </nav>
      <div className='h-16'></div>
    </div>
  );
};

export default Navbar;
//newsApI123
//bfe1a957625e47ee81d493ef4c915acb
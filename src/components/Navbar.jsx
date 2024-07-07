import React from "react";
import Logo from "../assets/Header_logo.png";
import Down from "../assets/Down Arrow.png";

function Navbar() {
  return (
    <>
      <div className="bg-slate-50 p-4 w-full flex justify-center">
        <p className="sm:text-xl font-medium text-sm">
          Navigate your ideal career path with tailored expert advice
        </p>
        <a
          href="#"
          className="text-blue-600 text-sm sm:text-xl hover:text-blue-700 mx-4 font-medium"
        >
          Contact Expert
        </a>
      </div>
      <div className="bg-slate-100 w-full p-6 flex justify-around shadow-lg">
        <div className="flex">
          <img src={Logo} alt="Logo" className="mx-2" />
          <button className="bg-blue-700 text-slate-100 p-3 mx-2 rounded-lg flex justify-around mb-[2px] hover:bg-blue-800">
            Conurses
            <img src={Down} alt="arrow" className="mt-[5px] mx-[1px]" />
          </button>
        </div>

        <div className=" justify-around hidden lg:flex">
          <a href="#" className=" text-lg m-2 mx-3 hover:text-slate-500">
            Refer & Earn
          </a>
          <a href="#" className=" text-lg m-2 mx-3 hover:text-slate-500">
            Resources
          </a>
          <a href="#" className=" text-lg m-2 mx-3 hover:text-slate-500">
            About Us
          </a>
          <button className="bg-slate-200 p-1 px-5  rounded-lg text-lg mx-3  hover:bg-slate-300">
            Login
          </button>
          <button className="bg-blue-700 text-slate-100 p-3 rounded-lg mx-3 hover:bg-blue-800">
            Try for free
          </button>
        </div>
        <div className="text-4xl lg:hidden">&#8801;</div>
      </div>
    </>
  );
}

export default Navbar;

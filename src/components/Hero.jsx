import React from "react";
import Rectangle from "../assets/Rectangle Background.png";
import Cash1 from "../assets/Cash Images/Cash 1.png";
import Cash2 from "../assets/Cash Images/Cash  2.png";
import Cash3 from "../assets/Cash Images/Cash  3.png";
import Cash4 from "../assets/Cash Images/Cash  4.png";
import Cash5 from "../assets/Cash Images/Cash  5.png";

function Hero({ showPopupForm }) {
  return (
    <section>
      <div className="flex justify-between bg-slate-200 max-w-3xl mx-auto p-4 mt-6 rounded-full">
        <button className="sm:mx-4 text-lg sm:text-xl font-medium text-slate-900 hover:text-blue-700">
          Refer
        </button>
        <button className="sm:mx-4 text-lg sm:text-xl font-medium text-slate-900 hover:text-blue-700">
          Benefits
        </button>
        <button className="sm:mx-4 text-lg sm:text-xl font-medium text-slate-900 hover:text-blue-700">
          FAQS
        </button>
        <button className="sm:mx-4 text-lg sm:text-xl font-medium text-slate-900 hover:text-blue-700">
          Support
        </button>
      </div>
      <div className="max-w-5xl mx-auto bg-green-100 shadow-lg mt-6 rounded-xl flex relative">
        <img
          src={Cash1}
          alt=""
          className=" w-16 h-16 sm:w-[88px] sm:h-[88px] absolute bottom-[60px] left-[53%] "
        />
        <img
          src={Cash2}
          alt=""
          className=" w-16 h-16 sm:w-[88px] sm:h-[88px] absolute left-[64%] top-[7px]"
        />
        <img
          src={Cash3}
          alt=""
          className=" w-16 h-16 sm:w-[88px] sm:h-[88px] absolute left-[92.3%] top-[33%]"
        />
        <img
          src={Cash4}
          alt=""
          className=" w-12 h-12 sm:w-[88px] sm:h-[88px] absolute left-[30px] "
        />
        <img
          src={Cash5}
          alt=""
          className=" w-16 h-16 sm:w-[88px] sm:h-[88px]  absolute left-[90%]"
        />
        <div className="w-1/2">
          <div className="text-3xl sm:text-6xl font-bold max-w-xs text-center p-1 mx-auto  mt-14">
            Let's Learn & Earn
          </div>
          <div className="max-w-xs p-2 text-xl sm:text-3xl mx-auto mt-10">
            Get a chance to win upto
            <span className="text-blue-700 text-2xl sm:text-4xl font-bold mx-2">
              Rs. 15,000
            </span>
          </div>
          <button
            className="bg-blue-600 text-slate-100 p-3 md:px-6 md:m-12 m-6 md:mx-24"
            onClick={(e) => {
              showPopupForm();
            }}
          >
            Refer Now
          </button>
        </div>
        <img src={Rectangle} alt="" className="w-1/2" />
      </div>
    </section>
  );
}

export default Hero;

import React from "react";
import DownArrow from "../assets/Right Arrow.png";
import Help from "../assets/Help.png";

const ReferralBenefits = ({ showPopupForm }) => {
  return (
    <div className="p-6">
      <h2 className="text-center text-2xl font-bold mb-6">
        What Are The <span className="text-blue-600">Referral Benefits?</span>
      </h2>
      <div className="overflow-x-auto mb-6 sm:flex justify-center flex-wrap mt-12">
        <table className="bg-white  border-gray-300 mx-2">
          <th className="bg-blue-700 text-[16px] text-slate-100 p-[4px]  items-center mx-2 rounded-lg flex justify-center font-normal border-slate-700 border-[2px]  mt-[4px]">
            ALL PROGRAMS
            <img src={DownArrow} alt="arrow" className="mt-[5px] mx-[1px]" />
          </th>
          <td className="bg-slate-100 text-[16px] text-slate-700 px-4 items-center mx-2 rounded-lg flex justify-center hover:bg-slate-300 font-normal p-[4px] mt-[2px] border-slate-700 border-[2px]">
            PRODUCT MANAGEMENT
            <img src={DownArrow} alt="arrow" className="mt-[5px] mx-[1px]" />
          </td>
          <td className="bg-slate-100 text-[16px] text-slate-700 px-4 items-center mx-2 rounded-lg flex justify-center hover:bg-slate-300 font-normal p-[4px] mt-[2px] border-slate-700 border-[2px]">
            STRATEGY & LEADERSHIP
            <img src={DownArrow} alt="arrow" className="mt-[5px] mx-[1px]" />
          </td>
          <td className="bg-slate-100 text-[16px] text-slate-700 px-4 items-center mx-2 rounded-lg flex justify-center hover:bg-slate-300 font-normal p-[4px] mt-[2px] border-slate-700 border-[2px]">
            BUSSINESS MANAGEMENT
            <img src={DownArrow} alt="arrow" className="mt-[5px] mx-[1px]" />
          </td>
          <td className="bg-slate-100 text-[16px] text-slate-700 px-4 items-center mx-2 rounded-lg flex justify-center hover:bg-slate-300 font-normal p-[4px] mt-[2px] border-slate-700 border-[2px]">
            FINTECH
            <img src={DownArrow} alt="arrow" className="mt-[5px] mx-[1px]" />
          </td>
          <td className="bg-slate-100 text-[16px] text-slate-700 px-4 items-center mx-2 rounded-lg flex justify-center hover:bg-slate-300 font-normal p-[4px] mt-[2px] border-slate-700 border-[2px]">
            SENIOR MANAGEMENT
            <img src={DownArrow} alt="arrow" className="mt-[5px] mx-[1px]" />
          </td>
          <td className="bg-slate-100 text-[16px] text-slate-700 px-4 items-center mx-2 rounded-lg flex justify-center hover:bg-slate-300 font-normal p-[4px] mt-[2px] border-slate-700 border-[2px]">
            DATA SCIENCE
            <img src={DownArrow} alt="arrow" className="mt-[5px] mx-[1px]" />
          </td>
          <td className="bg-slate-100 text-[16px] text-slate-700 px-4 items-center mx-2 rounded-lg flex justify-center hover:bg-slate-300 font-normal p-[4px] mt-[2px] border-slate-700 border-[2px]">
            DIGITAL TRANSFORMATION
            <img src={DownArrow} alt="arrow" className="mt-[5px] mx-[1px]" />
          </td>
          <td className="bg-slate-100 text-[16px] text-slate-700 px-4 items-center mx-2 rounded-lg flex justify-center hover:bg-slate-300 font-normal p-1 mt-[2px] border-slate-700 border-[2px]">
            BUSSINESS ANALYTICS
            <img src={DownArrow} alt="arrow" className="mt-[5px] mx-[1px]" />
          </td>
        </table>
        <table className="min-w-[75%] bg-slate-100 border border-gray-300 mx-2 mt-4 rounded-xl overflow-hidden">
          <thead>
            <tr className="w-full bg-blue-200 ">
              <th className="py-2 px-4 border text-blue-700">Programs</th>
              <th className="py-2 px-4 border text-blue-700">Referrer Bonus</th>
              <th className="py-2 px-4 border text-blue-700">Referee Bonus</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                program:
                  "Professional Certificate Program in Product Management",
                referrer: "₹ 7,000",
                referee: "₹ 9,000",
              },
              {
                program:
                  "PG Certificate Program in Strategic Product Management",
                referrer: "₹ 9,000",
                referee: "₹ 11,000",
              },
              {
                program: "Executive Program in Data Driven Product Management",
                referrer: "₹ 10,000",
                referee: "₹ 10,000",
              },
              {
                program:
                  "Executive Program in Product Management and Digital Transformation",
                referrer: "₹ 10,000",
                referee: "₹ 10,000",
              },
              {
                program: "Executive Program in Product Management",
                referrer: "₹ 10,000",
                referee: "₹ 10,000",
              },
              {
                program: "Advanced Certification in Product Management",
                referrer: "₹ 10,000",
                referee: "₹ 10,000",
              },
              {
                program:
                  "Executive Program in Product Management and Project Management",
                referrer: "₹ 10,000",
                referee: "₹ 10,000",
              },
            ].map((item, index) => (
              <tr key={index} className="w-full">
                <td className="py-2 px-4 border">{item.program}</td>
                <td className="py-2 px-4 border">{item.referrer}</td>
                <td className="py-2 px-4 border">{item.referee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 ml-32"
        onClick={(e) => {
          showPopupForm();
        }}
      >
        Refer Now
      </button>

      <div className="sm:flex justify-around flex-wrap">
        <div className="flex flex-col mt-14">
          <button className="bg-slate-100 text-blue-600 p-2 px-6 text-center border-[2px] border-slate-100">
            Eligiblity
          </button>
          <button className="bg-slate-100 text-gray-600 p-2 px-6 text-center border-[2px] border-slate-700 mt-[4px]">
            How To Use ?
          </button>
          <button className="bg-slate-100 text-gray-600 p-2 px-6 text-center border-[2px] border-slate-700 mt-[4px]">
            Terms and Conditions.
          </button>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
          <div className="mb-4">
            <h4 className="font-semibold">
              Do I need to have prior Product Management and Project Management
              experience to enroll in the program?
            </h4>
            <p>
              No, the program is designed to be inclusive of all levels of
              experience. All topics will be covered from the basics, making it
              suitable for individuals from any field of work.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">
              What is the minimum system configuration required?
            </h4>
            <p>Details about the minimum system configuration go here...</p>
          </div>
        </div>
      </div>

      <div className="mt-10 p-12 bg-blue-600 rounded-lg text-teal-50 sm:flex justify-around flex-wrap">
        <img
          src={Help}
          alt="Help"
          className="bg-slate-100 p-1 rounded-lg w-9 h-9 sm:w-auto sm:h-auto"
        />
        <div>
          <h3 className="sm:text-lg text-sm font-bold mt-4">
            Want to delve deeper into the program?
          </h3>
          <p>
            Share your details to receive expert insights from our program team!
          </p>
        </div>
        <button className="text-blue-700 text-sm sm:text-lg bg-slate-100 px-[8px] sm:px-4 items-center mx-2 rounded-lg flex justify-center hover:bg-slate-300 mt-4">
          Get in Touch
          <img src={DownArrow} alt="arrow" className="mt-[5px] mx-[1px]" />
        </button>
      </div>
    </div>
  );
};

export default ReferralBenefits;

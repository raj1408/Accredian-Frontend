import React from "react";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BiSolidNotepad } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";

function ReferralProcess({ showPopupForm }) {
  return (
    <section>
      <div className="w-full bg-blue-100 py-10 px-5 mt-6">
        <div className="text-center text-2xl font-semibold text-gray-900 mb-10">
          How Do I <span className="text-blue-700">Refer?</span>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="relative flex flex-col items-center text-center bg-white rounded-full shadow-lg p-10 m-5 w-64 h-64">
            <div className="text-blue-800 text-7xl mb-4">
              <MdPersonAddAlt1 />
            </div>
            <p className="text-gray-900 text-lg">
              Submit referrals easily via our website's referral section.
            </p>
            <div className="absolute top-1/2 right-full transform translate-x-1/2 -translate-y-1/2 md:right-auto md:bottom-0 md:translate-x-0 md:translate-y-1/2 md:rotate-90">
              <svg
                width="50"
                height="50"
                fill="none"
                stroke="blue"
                className="md:hidden"
              >
                <circle cx="25" cy="25" r="24" strokeDasharray="4 2" />
              </svg>
              <svg
                width="50"
                height="50"
                fill="none"
                stroke="blue"
                className="hidden md:block"
              >
                <path d="M0 25h50M45 20l5 5-5 5" />
              </svg>
            </div>
          </div>

          <div className="relative flex flex-col items-center text-center bg-white rounded-full shadow-lg p-10 m-5 w-64 h-64">
            <div className="text-blue-800 text-7xl mb-4">
              <BiSolidNotepad />
            </div>
            <p className="text-gray-900 text-lg">
              Earn rewards once your referral joins an Accordian program.
            </p>
            <div className="absolute top-1/2 right-full transform translate-x-1/2 -translate-y-1/2 md:right-auto md:bottom-0 md:translate-x-0 md:translate-y-1/2 md:rotate-90">
              <svg
                width="50"
                height="50"
                fill="none"
                stroke="blue"
                className="md:hidden"
              >
                <circle cx="25" cy="25" r="24" strokeDasharray="4 2" />
              </svg>
              <svg
                width="50"
                height="50"
                fill="none"
                stroke="blue"
                className="hidden md:block"
              >
                <path d="M0 25h50M45 20l5 5-5 5" />
              </svg>
            </div>
          </div>

          <div className="relative flex flex-col items-center text-center bg-white rounded-full shadow-lg p-10 m-5 w-64 h-64">
            <div className="text-blue-800 text-7xl mb-4">
              <GiWallet />
            </div>
            <p className="text-gray-900 text-lg">
              Both parties receive a bonus 30 days after program enrollment.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            className="bg-blue-700 text-white text-lg font-semibold py-2 px-6 rounded-full"
            onClick={(e) => {
              showPopupForm();
            }}
          >
            Refer Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReferralProcess;

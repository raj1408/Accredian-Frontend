// src/components/Footer.js
import React from "react";
import Social_Icon1 from "../assets/Social Icons/Social Icon 1.png";
import Social_Icon2 from "../assets/Social Icons/Social Icon 2.png";
import Social_Icon3 from "../assets/Social Icons/Social Icon 3.png";
import Social_Icon4 from "../assets/Social Icons/Social Icon 4.png";
import Social_Icon5 from "../assets/Social Icons/Social Icon 5.png";
import Phone from "../assets/Phone.png";
import Footer_logo from "../assets/Footer_logo.png";

const Footer = () => {
  const socialIcons = [
    { src: Social_Icon1, alt: "Facebook" },
    { src: Social_Icon2, alt: "LinkedIn" },
    { src: Social_Icon3, alt: "Twitter" },
    { src: Social_Icon4, alt: "YouTube" },
    { src: Social_Icon5, alt: "Instagram" },
  ];

  return (
    <footer className="bg-gray-700 text-slate-300 p-6">
      <div className="flex flex-col sm:flex-row justify-around">
        <img src={Footer_logo} alt="" className="p-6" />
        <div className="mt-4 text-center">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Schedule 1-on-1 Call Now
          </button>
          <p className="mt-2">Speak with our Learning Advisor</p>
        </div>
      </div>
      <hr className="max-w-5xl mx-auto mt-3 font-semibold" />
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-medium mb-4 ">Programs</h4>
          <ul>
            {[
              "Data Science & AI",
              "Product Management",
              "Business Analytics",
              "Digital Transformation",
              "Business Management",
              "Project Management",
              "Strategy & Leadership",
              "Senior Management",
              "Fintech",
            ].map((program, index) => (
              <li
                key={index}
                className="mb-2 flex justify-between items-center"
              >
                {program} <span>+</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-medium lg:mb-4 mt-2">Contact Us</h4>
          <ul className="space-y-2">
            <li>
              Email us (For Data Science Queries): admissions@accredian.com
            </li>
            <li>Email us (For Product Management Queries): pm@accredian.com</li>
            <li>
              Data Science Admission Helpline: +91 9079653229 (9 AM - 7 PM)
            </li>
            <li>Product Management Admission Helpline: +91 9652911095</li>
            <li>Enrolled Student Helpline: +91 7963252207</li>
            <li>
              Office Address: 4th Floor, 268, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana 122015
            </li>
          </ul>
          <div className="mt-3">
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-medium lg:mb-4 mt-4">Accredian</h4>
          <ul>
            {[
              "About",
              "Career",
              "Blog",
              "Admission Policy",
              "Referral Policy",
              "Privacy Policy",
              "Terms Of Service",
              "Master FAQs",
            ].map((link, index) => (
              <li key={index} className="mb-2">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-700 pt-4 text-center flex justify-between">
        <p className="mx-auto">
          © 2024 Accredian. A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </p>
        <img src={Phone} alt="" />
      </div>
    </footer>
  );
};

export default Footer;

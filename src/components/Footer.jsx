import React from "react";
import PropBotLogo from "./PropBotogo"; // import the logo component

const Footer = () => {
  return (
    <div className="w-full bg-[#3B5399]">
      <footer className="w-auto bg-[#3B5399] text-white py-10 px-6 md:px-20 mt-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Get in Touch with Us
          </h2>
          <p className="text-gray-200 mb-6">
            Subscribe now for exclusive property insights and deals!
          </p>
          <div className="flex justify-center">
            <div className="flex w-full max-w-md rounded-full overflow-hidden bg-gray-200">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-gray-700 focus:outline-none bg-gray-200"
              />
              <button className="bg-[#1E3A8A] px-6 py-2 text-white font-medium hover:bg-[#162c6a] transition">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-400 pt-6 text-sm text-gray-200">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <PropBotLogo />
            <span className="font-semibold">PropBot</span>
          </div>

          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white">For Sale</a>
            <a href="#" className="hover:text-white">Rentals</a>
            <a href="#" className="hover:text-white">New Projects</a>
            <a href="#" className="hover:text-white">Property News</a>
          </div>

          <div>@2025 PropBot. All rights reserved</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

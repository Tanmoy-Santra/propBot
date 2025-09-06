import React from "react";
import { FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import StartYourJourney1 from "../assets/StartYourJourney1.jpg"
import StartYourJourney2 from "../assets/StartYourJourney2.jpg"
const StartYourJourney = () => {
  return (
    <div className="w-full mb-20">
     
      <div className="w-full border-b border-blue-200">
        <div className="max-w-6xl mx-auto py-10 px-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A]">
            Start Your Journey Today!
          </h2>
          <p className="text-gray-600 mb-6">
            Create a profile in seconds and find your ideal home.
          </p>

          
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Select User Type</option>
              <option>Buyer</option>
              <option>Seller</option>
              <option>Agent</option>
            </select>

            <input
              type="text"
              placeholder="Enter Your Location"
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="bg-[#1E3A8A] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Continue
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Images */}
        <div className="relative flex justify-center md:justify-start">
          <img
            src={StartYourJourney1}
            alt="Property 1"
            className="shadow-md w-[300px] h-[336px] object-cover border-4 border-[#D9D9D9]"
          />
          <img
            src={StartYourJourney2}
            alt="Property 2"
            className="absolute left-32 top-40  shadow-md w-[250px] h-[250px] object-cover border-4 border-[#D9D9D9]"
          />
        </div>

        {/* Features */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-6">
            We Provide Latest Properties <br /> For Our Valuable Clients
          </h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <GiReceiveMoney className="text-[#1E3A8A] text-[40px]" />
              <div>
                <h2 className="font-semibold text-[#1E3A8A] text-[20px]">Budget Friendly</h2>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Venanatis sed ac
                  aenean tempus. Lectus quis pretium varius iaculis sed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaShieldAlt className="text-[#1E3A8A] text-[40px]" />
              <div>
                <h2 className="font-semibold text-[#1E3A8A] text-[20px]">
                  Trusted By Thousand
                </h2>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Venanatis sed ac
                  aenean tempus. Lectus quis pretium varius iaculis sed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#1E3A8A] text-[40px]" />
              <div>
                <h2 className="font-semibold text-[#1E3A8A] text-[20px]">Prime Location</h2>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Venanatis sed ac
                  aenean tempus. Lectus quis pretium varius iaculis sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartYourJourney;

import React from "react";
import {
  MapPin,
  Search,
  ChevronDown,
  ShoppingBag,
  House,
  Globe,
} from "lucide-react";
import img from "../assets/hero.jpg";

const Hero = () => {
  return (
    <>
      <section className="relative w-full flex flex-col items-center justify-center mt-6 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="elative w-full h-[400px] sm:h-[500px] md:h-[527px] rounded-[34px] overflow-hidden">
          <img
            src={img}
            alt="Dream Home"
            className="w-full h-full object-cover object-[center_-70px]"
          />

          <div className="absolute inset-0 flex flex-col items-center text-center px-6 top-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-poppins text-white drop-shadow-lg">
              Find Your Dream Home in One Click!
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-8 text-[#EEEEEE] drop-shadow-md">
              Discover, Buy, or Rent Verified Properties with Ease.
            </p>
          </div>

          <div className="absolute inset-0 flex flex-col items-center top-32 mt-64 sm:mt-72 text-center px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full">
              <div className="flex items-center bg-white rounded-[12px] mx-4 sm:mx-10 shadow-lg w-full md:w-[50%] max-w-xl overflow-hidden">
                <div className="pl-3 text-gray-500">
                  <MapPin size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Search Location..."
                  className="flex-1 px-3 py-3 text-gray-700 focus:outline-none"
                />
                <div className="flex items-center gap-2 pr-3">
                  <Search size={20} className="text-gray-600 cursor-pointer" />
                  <ChevronDown
                    size={16}
                    className="text-gray-500 cursor-pointer"
                  />
                </div>
              </div>

              <button className="border-2 border-[#1E3A8A] text-[#1E3A8A] bg-white px-4 py-1.5 rounded-full text-sm font-medium transition hover:border-[#162c6a] hover:text-[#162c6a] w-full md:w-auto">
                List Your Property
              </button>
            </div>
          </div>
        </div>

        <div className="h-auto md:h-[75px] relative -mt-10 w-full md:w-[90%] max-w-3xl bg-[#FFFFFF] border border-[#979797] rounded-full shadow-lg flex flex-col md:flex-row items-center justify-between px-4 py-3 gap-3 backdrop-blur">
          <div className="relative flex items-center w-full md:w-auto">
            <ShoppingBag className="absolute left-3 text-[#1E3A8A]" size={18} />
            <select className="appearance-none bg-transparent border border-[#979797] text-[#1E1E1E] font-medium pl-10 pr-8 py-3 rounded-full w-full md:w-auto focus:outline-none">
              <option>For Rent</option>
              <option>For Sale</option>
            </select>
            <ChevronDown
              className="absolute right-3 text-[#1E3A8A] pointer-events-none"
              size={18}
            />
          </div>

          <div className="relative flex items-center w-full md:w-auto">
            <House className="absolute left-3 text-[#1E3A8A]" size={18} />
            <select className="appearance-none bg-transparent border border-[#979797] text-[#1E1E1E] font-medium pl-10 pr-8 py-3 rounded-full w-full md:w-auto focus:outline-none">
              <option>House</option>
              <option>Apartment</option>
              <option>Land</option>
            </select>
            <ChevronDown
              className="absolute right-3 text-[#1E3A8A] pointer-events-none"
              size={18}
            />
          </div>

          <div className="relative flex items-center w-full md:w-auto">
            <Globe className="absolute left-3 text-[#1E3A8A]" size={18} />
            <select className="appearance-none bg-transparent border border-[#979797] text-[#1E1E1E] font-medium pl-10 pr-8 py-3 rounded-full w-full md:w-auto focus:outline-none">
              <option>Indonesia</option>
              <option>India</option>
              <option>USA</option>
            </select>
            <ChevronDown
              className="absolute right-3 text-[#1E3A8A] pointer-events-none"
              size={18}
            />
          </div>

          <button className="bg-[#1E3A8A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#162c6a] transition w-full md:w-auto">
            Find Property
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;

import React from "react";
import { ShoppingBag, House, Globe, ChevronDown } from "lucide-react";
import img from "../assets/buy.png";

const HeroBuy = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center mt-6 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[527px] rounded-[34px] overflow-hidden">
        <img
          src={img}
          alt="Dream Home"
          className="w-full h-full object-cover object-[center_-70px]"
        />
        <div className="absolute bottom-0 left-0 w-full px-6 sm:px-10 pb-16 sm:pb-20 bg-gradient-to-t from-[#3F3F3F99] via-[#3F3F3F66] to-transparent backdrop-blur-[1px]">
          <div className="max-w-5xl text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 font-poppins text-white drop-shadow-lg">
              Featured Properties For Sale
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#EEEEEE] drop-shadow-md">
              Discover, Buy, or Rent Verified Properties with Ease.
            </p>
          </div>
        </div>
      </div>

      <div className="h-auto sm:h-[75px] relative -mt-10 w-full sm:w-[90%] max-w-3xl bg-[#FFFFFF] border border-[#979797] rounded-full shadow-lg flex flex-col sm:flex-row items-center justify-between px-4 py-3 gap-3 backdrop-blur">
        <div className="relative flex items-center w-full sm:w-auto">
          <ShoppingBag className="absolute left-3 text-[#1E3A8A]" size={18} />
          <select className="appearance-none bg-transparent border border-[#979797] text-[#1E1E1E] font-medium pl-10 pr-8 py-3 rounded-full w-full sm:w-auto focus:outline-none">
            <option>For Rent</option>
            <option>For Sale</option>
          </select>
          <ChevronDown className="absolute right-3 text-[#1E3A8A] pointer-events-none" size={18} />
        </div>

        <div className="relative flex items-center w-full sm:w-auto">
          <House className="absolute left-3 text-[#1E3A8A]" size={18} />
          <select className="appearance-none bg-transparent border border-[#979797] text-[#1E1E1E] font-medium pl-10 pr-8 py-3 rounded-full w-full sm:w-auto focus:outline-none">
            <option>House</option>
            <option>Apartment</option>
            <option>Land</option>
          </select>
          <ChevronDown className="absolute right-3 text-[#1E3A8A] pointer-events-none" size={18} />
        </div>

        <div className="relative flex items-center w-full sm:w-auto">
          <Globe className="absolute left-3 text-[#1E3A8A]" size={18} />
          <select className="appearance-none bg-transparent border border-[#979797] text-[#1E1E1E] font-medium pl-10 pr-8 py-3 rounded-full w-full sm:w-auto focus:outline-none">
            <option>Indonesia</option>
            <option>India</option>
            <option>USA</option>
          </select>
          <ChevronDown className="absolute right-3 text-[#1E3A8A] pointer-events-none" size={18} />
        </div>

        <button className="bg-[#1E3A8A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#162c6a] transition w-full sm:w-auto">
          Find Property
        </button>
      </div>
    </section>
  );
};

export default HeroBuy;

import React from "react";
import FeaturedPropertyImage1 from "../assets/FeaturedPropertyImage1.jpg";
import FeaturedPropertyImage2 from "../assets/FeaturedPropertyImage2.jpg";
import FeaturedPropertyImage3 from "../assets/FeaturedPropertyImage3.jpg";
import FeaturedPropertyImage4 from "../assets/FeaturedPropertyImage4.jpg";

const properties = [
  {
    main: true,
    image: FeaturedPropertyImage1,
    title: "Kenanga Residence",
    finder: "Finder & Projects",
  },
  {
    main: false,
    image: FeaturedPropertyImage2,
    title: "",
  },
  {
    main: false,
    image: FeaturedPropertyImage3,
    title: "",
  },
  {
    main: false,
    image: FeaturedPropertyImage4,
    title: "",
  },
];

const FeaturedProperty = () => {
  return (
    <div className="w-full font-Poppins bg-white px-6 md:px-12 lg:px-20 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A]">
          Featured Property
        </h1>
        <button className="group mt-4 sm:mt-0 px-6 py-3 border border-[#1E3A8A] text-[#1E3A8A] rounded-full flex items-center space-x-2 transition duration-300 ease-in-out hover:shadow-lg">
          <span className="text-sm font-semibold">See 268 New Projects</span>
          <svg
            width="26"
            height="27"
            viewBox="0 0 26 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_269)">
              <path
                d="M17.1685 15.5818L16.3952 8.81288L9.6223 9.55104C9.55069 9.54937 9.47956 9.56309 9.41372 9.5913C9.34787 9.6195 9.28886 9.66152 9.24067 9.71452C9.19248 9.76751 9.15624 9.83024 9.1344 9.89846C9.11256 9.96667 9.10563 10.0388 9.11408 10.1099C9.12254 10.181 9.14618 10.2495 9.1834 10.3107C9.22062 10.3719 9.27055 10.4244 9.32982 10.4646C9.38909 10.5049 9.45631 10.5319 9.52693 10.5439C9.59755 10.5558 9.66992 10.5525 9.73914 10.5341L14.8153 9.98887L8.8438 17.4609C8.76101 17.5644 8.72277 17.6967 8.73748 17.8285C8.75219 17.9603 8.81865 18.0808 8.92224 18.1636C9.02583 18.2464 9.15806 18.2846 9.28985 18.2699C9.42164 18.2552 9.54219 18.1887 9.62498 18.0852L15.5965 10.6132L16.1839 15.6846C16.1991 15.8164 16.266 15.9368 16.3699 16.0193C16.4739 16.1018 16.6063 16.1396 16.7381 16.1244C16.8699 16.1092 16.9903 16.0423 17.0728 15.9383C17.1552 15.8344 17.193 15.7019 17.1779 15.5701L17.1685 15.5818Z"
                fill="#1E3A8A"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_269">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="translate(11.2375 0.850586) rotate(38.6313)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr_1fr] gap-8">
        <div className="relative overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-[1.02] ">
          <img
            src={properties[0].image}
            alt={properties[0].title}
            className="w-full h-80 sm:h-96 md:h-[500px] object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent w-full">
            <p className="text-sm mb-1 opacity-80">{properties[0].finder}</p>
            <h2 className="text-2xl font-bold">{properties[0].title}</h2>
          </div>
        </div>

        <div className="relative overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-[1.02] ">
          <img
            src={properties[1].image}
            alt={properties[1].title}
            className="w-full h-80 sm:h-96 md:h-[500px] object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent w-full">
            <h2 className="text-2xl font-bold">{properties[1].title}</h2>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-8">
          {properties.slice(2).map((property, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-[1.02] "
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 sm:h-56 md:h-60 lg:h-60 object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black/60 to-transparent w-full">
                <h3 className="text-lg font-semibold">{property.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;

import React from "react";
import { FaMapMarkerAlt, FaRegBookmark } from "react-icons/fa";
import FeaturePropertyBuy1 from '../assets/FeaturePropertyBuy1.png';
import FeaturePropertyBuy2 from '../assets/FeaturePropertyBuy2.png';

const FeaturePropertyBuy = () => {
  const properties = [
    {
      id: 1,
      title: "Green Villa, Uttar Pradesh",
      description:
        "Spacious 3BHK apartment in a prime location with modern amenities.",
      price: "$450,000",
      image: FeaturePropertyBuy1,
    },
    {
      id: 2,
      title: "Green Villa, Uttar Pradesh",
      description:
        "Spacious 3BHK apartment in a prime location with modern amenities.",
      price: "$450,000",
      image: FeaturePropertyBuy2,
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-20 py-12 bg-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 sm:gap-0">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Featured Property
        </h2>
        <button className="px-5 py-2 border border-blue-900 rounded-full text-blue-900 font-medium text-sm hover:bg-blue-50 transition flex items-center gap-2">
          See 268 New Projects →
        </button>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            {/* Property Image */}
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-72">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Property Info */}
            <div className="p-4 sm:p-5 -mt-14 relative z-10 bg-white mx-4 sm:mx-4 md:mx-5 rounded-2xl shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                <div>
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-700" />
                    {property.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{property.description}</p>
                </div>
                <button className="text-gray-500 hover:text-blue-700 self-start sm:self-auto">
                  <FaRegBookmark size={18} />
                </button>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                <p className="font-bold text-lg text-gray-900">{property.price}</p>
                <button className="px-4 py-2 bg-blue-900 text-white rounded-full text-sm hover:bg-blue-800 transition">
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturePropertyBuy;

import { BarChart2, KeyRound, Mic, LockKeyhole } from "lucide-react";

export default function WhatWeDo() {
  const services = [
    {
      icon: <BarChart2 className="w-10 h-10 text-[#1E3A8A]" />,
      title: "Buy & Sell Properties",
      description: "Find verified homes for sale or list your property with ease.",
    },
    {
      icon: <KeyRound className="w-10 h-10 text-[#1E3A8A]" />,
      title: "Find Rental Homes",
      description: "Browse through thousands of rental options suited to your needs.",
    },
    {
      icon: <Mic className="w-10 h-10 text-[#1E3A8A]" />,
      title: "Smart AI Property Search",
      description: "Get instant recommendations based on your budget & location.",
    },
    {
      icon: <LockKeyhole className="w-10 h-10 text-[#1E3A8A]" />,
      title: "Safe & Secure Transactions",
      description: "Verified listings & secure deals to ensure a smooth experience.",
    },
  ];

  return (
    <section className="py-16 font-Poppins w-full">
      <div className="w-full mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-700">
          What We Do?
        </h2>
        <p className="mt-2 text-gray-600">
          Helping you find, buy, and rent the perfect property with ease.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#EEEEEE]  shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 hover:bg-[#FFFFFF]"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-[#BEBEBE]">
                {service.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[#000000]">
                {service.title}
              </h3>
              <p className="mt-2 text-[#000000] text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

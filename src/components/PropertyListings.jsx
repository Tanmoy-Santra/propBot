import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

const PropertyListings = () => {
  const [saleProperties, setSaleProperties] = useState([]);
  const [rentalProperties, setRentalProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const saleScrollRef = useRef(null);
  const rentalScrollRef = useRef(null);

  // Custom style to hide scrollbar for Tailwind CSS
  const scrollbarStyles = `
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
  `;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing");
        const data = await response.json();

        
        const forRent = data.filter(p => parseInt(p.id, 10) >= 1 && parseInt(p.id, 10) <= 20);
        const forSale = data.filter(p => parseInt(p.id, 10) > 20);

        setSaleProperties(forSale);
        setRentalProperties(forRent);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const PropertyCard = ({ property, isForSale }) => (
    <div className="flex-shrink-0 w-[280px] h-[380px] snap-center bg-[#F1F1F1] rounded-[12px] shadow-md overflow-hidden m-2">
      <div className="p-2">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-[200px] object-cover rounded-[12px] border border-gray-300"
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src = "https://placehold.co/500x400/CCCCCC/000000?text=No+Image";
        }}
      />
    </div>

      <div className="p-4 flex flex-col flex-grow"> 
          
         
        <div className="flex items-center justify-between text-[#979797] text-sm mb-2">
        <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3C12.75 3 15 5.25 15 8C15 10.625 12.375 14.875 10 17.875C7.625 14.75 5 10.625 5 8C5 5.25 7.25 3 10 3ZM10 0.5C5.875 0.5 2.5 3.875 2.5 8C2.5 13.625 10 21.75 10 21.75C10 21.75 17.5 13.5 17.5 8C17.5 3.875 14.125 0.5 10 0.5ZM10 5.5C8.625 5.5 7.5 6.625 7.5 8C7.5 9.375 8.625 10.5 10 10.5C11.375 10.5 12.5 9.375 12.5 8C12.5 6.625 11.375 5.5 10 5.5ZM20 21.75C20 24.5 15.5 26.75 10 26.75C4.5 26.75 0 24.5 0 21.75C0 20.125 1.5 18.75 3.875 17.75L4.625 18.875C3.375 19.5 2.5 20.25 2.5 21.125C2.5 22.875 5.875 24.25 10 24.25C14.125 24.25 17.5 22.875 17.5 21.125C17.5 20.25 16.625 19.5 15.25 18.875L16 17.75C18.5 18.75 20 20.125 20 21.75Z" fill="#979797" fill-opacity="0.466667"/>
        </svg>

          <span>{property.city}, {property.state}</span>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★</span>
            <span>{property.rating}4.5 / 5</span>
          </div>
        </div>
        <p className="text-[#1E1E1E] my-2 text-sm flex-grow">
          Spacious 3BHK apartment in a prime location with modern amenities.
        </p>
        <div className="flex items-center justify-between mt-auto">
          <button className="bg-[#1E3A8A] text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition">
            {isForSale ? 'Buy Now' : 'Buy Now'}
          </button>
          <span className="text-xl text-[#1E1E1E]">{isForSale ? '$450,000' : '$1500/month'}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-poppins w-full text-[#1E1E1E] bg-transparent min-h-screen p-8">
      <style>{scrollbarStyles}</style>
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center text-gray-600 text-lg">Loading properties...</div>
        ) : (
          <>
            
            <div className="mb-12">
              <div className="flex font-Poppins flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-700">
                    Best Properties Available For Sale
                  </h1>
                  <p className="mt-2 text-[#555555] max-w-2xl">
                    Browse our top-rated properties for sale, featuring premium listings tailored to your needs. Find your dream home today!
                  </p>
                </div>
              </div>
              <div className="relative">
                <div ref={saleScrollRef} className="flex overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar">
                  {saleProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} isForSale={true} />
                  ))}
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-10 pointer-events-none">
                  <button onClick={() => scroll(saleScrollRef, 'left')} className="pointer-events-auto bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button onClick={() => scroll(saleScrollRef, 'right')} className="pointer-events-auto bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            
            <div className="mb-12">
              <div className="flex font-Poppins flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-700">
                    Find The Perfect Rental Home
                  </h1>
                  <p className="mt-2 text-[#555555] max-w-2xl">
                    Explore our listings for rent and find the ideal place for you and your family.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div ref={rentalScrollRef} className="flex overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar">
                  {rentalProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} isForSale={false} />
                  ))}
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-10 pointer-events-none">
                  <button onClick={() => scroll(rentalScrollRef, 'left')} className="pointer-events-auto bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button onClick={() => scroll(rentalScrollRef, 'right')} className="pointer-events-auto bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PropertyListings;

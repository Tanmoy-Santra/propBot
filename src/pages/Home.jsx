import React from "react";
import WhatWeDo from "../components/WhatWeDo";
import FeaturedProperty from "../components/FeaturedProperty";
import PropertyListings from "../components/PropertyListings"
import Hero from "../components/Hero";
import StartYourJourney from "../components/StartYourJourney";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      
        <Hero/>
        <WhatWeDo/>
        <FeaturedProperty/>
        <PropertyListings/>
        <StartYourJourney/>        
    </>
  );
};

export default Home;

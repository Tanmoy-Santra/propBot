import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({user}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar  user={user}/>      
      <main className="flex-1">
        <Outlet />
      </main>      
      <Footer />
    </div>
  );
};

export default Layout;

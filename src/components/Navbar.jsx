import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import PropBotLogo from "./PropBotogo"; // import the logo

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const baseClasses =
    "font-poppins text-[18px] font-normal transition-colors duration-200";

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Log out Successfully..");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-8 py-4 relative">
      
      <div className="flex items-center gap-2">
        <PropBotLogo /> {/* replaced inline SVG */}
        <span className="text-[25px] font-bold text-[#1E1E1E]">PropBot</span>
      </div>

      <div className="hidden md:flex gap-8">
        {[
          { to: "/home", label: "Home" },
          { to: "/buy", label: "Buy" },
          { to: "/rent", label: "Rent" },
          { to: "/sell", label: "Sell" },
          { to: "/about", label: "About Us" },
          { to: "/contact", label: "Contact Us" },
        ].map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? `${baseClasses} text-[#1E3A8A] underline decoration-[#1E3A8A] underline-offset-4`
                : `${baseClasses} text-[#1E1E1E]`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:block">
        {user ? (
          <div className="flex items-center gap-3">
            <p className="text-black mr-2">
              {user.displayName ? user.displayName : user.email}
            </p>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 bg-red-600 text-white w-[179px] h-[47px] rounded-[24px] font-medium hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <NavLink
            to="/login"
            className="flex items-center justify-center gap-2 bg-[#1E3A8A] text-white w-[179px] h-[47px] rounded-[24px] font-medium"
          >
            Login/Register
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#1E3A8A]">
              <ArrowRight size={16} />
            </span>
          </NavLink>
        )}
      </div>

      <button
        className="md:hidden flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50">
          {[
            { to: "/home", label: "Home" },
            { to: "/buy", label: "Buy" },
            { to: "/rent", label: "Rent" },
            { to: "/sell", label: "Sell" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact Us" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? `${baseClasses} text-[#1E3A8A] underline decoration-[#1E3A8A] underline-offset-4`
                  : `${baseClasses} text-[#1E1E1E]`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-2 bg-red-600 text-white w-[179px] h-[47px] rounded-[24px] font-medium hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#1E3A8A] text-white w-[179px] h-[47px] rounded-[24px] font-medium"
            >
              Login/Register
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#1E3A8A]">
                <ArrowRight size={16} />
              </span>
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

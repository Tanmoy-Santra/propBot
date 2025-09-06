import PropBotLogo from "../components/PropBotogo";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import SignupImage from "../assets/signup.png"; // replace with your image

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User Registered Successfully...");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-4 border-b mb-10 gap-4 md:gap-0">
  {/* Top row for small screens */}
  <div className="flex w-full justify-between items-center md:w-auto md:justify-start gap-2">
    <Link to="/" className="px-4 py-2 border rounded-full text-gray-600 hover:bg-gray-100 text-sm flex items-center gap-2">
      ← Back to Homepage
    </Link>
    
    {/* Logo only visible on small screens in this row */}
    <div className="flex items-center gap-2 md:hidden">
      <PropBotLogo />
      <span className="font-bold text-xl text-gray-900">PropBot</span>
    </div>
  </div>

        {/* Logo for md+ screens */}
        <div className="hidden md:flex items-center gap-2">
            <PropBotLogo />
            <span className="font-bold text-xl text-gray-900">PropBot</span>
        </div>

        {/* About button */}
        <Link to="/about" className="px-5 py-2 bg-blue-900 text-white rounded-full text-sm hover:bg-blue-800">
            About Us →
        </Link>
        </div>


      {/* Main content */}
      <div className="flex flex-1 flex-col lg:flex-row">

        {/* Form */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-20 py-10">
          <h2 className="text-3xl font-bold mb-6 sm:mb-8">Sign Up</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-full font-semibold hover:bg-blue-800 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 sm:mt-8 text-sm text-gray-600 text-center">
            Already have an account? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Log In</Link>
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 hidden lg:block">
          <img
            src={SignupImage}
            alt="Signup"
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

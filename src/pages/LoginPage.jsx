import PropBotLogo from "../components/PropBotogo";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import LoginImage from "../assets/login.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      alert("Login Successful..");
      navigate("/"); 
    } catch (err) {
      setError("Invalid credentials" ,err);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-4 border-b mb-10 gap-4 md:gap-0">
        {/* Back + small logo */}
        <div className="flex w-full justify-between items-center md:w-auto md:justify-start gap-2">
          <Link to="/" className="px-4 py-2 border rounded-full text-gray-600 hover:bg-gray-100 text-sm flex items-center gap-2">
            ← Back to Homepage
          </Link>

          {/* Small screen logo */}
          <div className="flex items-center gap-2 md:hidden">
            <PropBotLogo />
            <span className="font-bold text-xl text-gray-900">PropBot</span>
          </div>
        </div>

        {/* Medium+ screen logo */}
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
          <h2 className="text-3xl font-bold mb-6 sm:mb-8">Log In</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form className="space-y-4 sm:space-y-6" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter Your Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-full font-semibold hover:bg-blue-800 transition"
            >
              Log In
            </button>
          </form>

          {/* Social login */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-4 text-sm text-gray-500 whitespace-nowrap">OR CONTINUE WITH</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className="flex justify-center gap-4 sm:gap-6 text-2xl">
            <button className="p-3 border rounded-full hover:bg-gray-100"><FaApple /></button>
            <button className="p-3 border rounded-full hover:bg-gray-100 text-blue-600"><FaFacebook /></button>
            <button className="p-3 border rounded-full hover:bg-gray-100 text-red-500"><FaGoogle /></button>
          </div>

          <p className="mt-6 sm:mt-8 text-sm text-gray-600 text-center">
            Doesn’t have an account? <Link to="/signup" className="text-blue-600 font-semibold hover:underline">Create One</Link>
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 hidden lg:block">
          <img src={LoginImage} alt="Login" className="w-full h-full object-cover rounded-l-3xl" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

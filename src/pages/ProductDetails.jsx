import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaGoogle,
  FaFacebookF,
  FaLeaf,
} from "react-icons/fa";


import blueberrycan from "../assets/blueberrycan.png";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

   
    alert("Login successful!");

    navigate("/");
  };

  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          LOGIN SECTION
      ====================================================== */}

      <section className="min-h-[calc(100vh-80px)] bg-[#faf8ff]">

        <div className="max-w-7xl mx-auto min-h-[calc(100vh-80px)] px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div className="hidden lg:flex relative overflow-hidden bg-[#eee4ff] items-center justify-center rounded-r-[40px]">

              {/* BIG CIRCLE */}

              <div className="absolute w-[480px] h-[480px] rounded-full bg-[#d6bdff]" />

              <div className="absolute w-[330px] h-[330px] rounded-full border border-white/60" />

              {/* DECORATIVE CIRCLES */}

              <div className="absolute top-16 left-16 w-16 h-16 rounded-full bg-white/50" />

              <div className="absolute bottom-20 right-16 w-24 h-24 rounded-full bg-[#c4a5f4]" />


              <img
                src={blueberrycan}
                alt="Blueberries"
                className="absolute z-20 w-20 top-24 right-16"
              />


              {/* PRODUCT */}

              <img
                src={blueberrycan}
                alt="Blueberry Drink"
                className="relative z-30 w-[300px] drop-shadow-2xl"
              />


              {/* TEXT */}

              <div className="absolute bottom-12 left-0 right-0 text-center z-40">

                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">

                  <FaLeaf
                    className="text-[#5b2bbf]"
                    size={10}
                  />

                  <span className="text-[10px] font-bold tracking-[2px] text-[#5b2bbf]">
                    FRESH & NATURAL
                  </span>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div className="flex items-center justify-center py-12 lg:py-16">

              <div className="w-full max-w-md">

                {/* MOBILE LOGO / TITLE */}

                <div className="text-center mb-8">

                  <div className="lg:hidden inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#eee4ff] text-[#5b2bbf] mb-5">

                    <FaLeaf size={20} />

                  </div>

                  <p className="text-[#5b2bbf] text-[10px] font-bold tracking-[3px] uppercase">
                    Welcome Back
                  </p>

                  <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#241044]">
                    Login To Your
                    <br />

                    <span className="text-[#5b2bbf]">
                      Account.
                    </span>
                  </h1>

                  <p className="mt-3 text-sm text-gray-500">
                    Sign in to continue your shopping experience.
                  </p>

                </div>


                {/* =================================================
                    FORM CARD
                ================================================= */}

                <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">

                  <form onSubmit={handleSubmit}>

                    {/* EMAIL */}

                    <div>

                      <label className="block text-xs font-bold text-gray-700 mb-2">
                        Email Address
                      </label>

                      <div className="relative">

                        <FaEnvelope
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          size={13}
                        />

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#5b2bbf] focus:ring-2 focus:ring-[#eee4ff] transition"
                        />

                      </div>

                    </div>


                    {/* PASSWORD */}

                    <div className="mt-5">

                      <div className="flex items-center justify-between mb-2">

                        <label className="block text-xs font-bold text-gray-700">
                          Password
                        </label>

                        <Link
                          to="/forgot-password"
                          className="text-[10px] font-bold text-[#5b2bbf] hover:underline"
                        >
                          Forgot Password?
                        </Link>

                      </div>

                      <div className="relative">

                        <FaLock
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          size={13}
                        />

                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Enter your password"
                          required
                          className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#5b2bbf] focus:ring-2 focus:ring-[#eee4ff] transition"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword(!showPassword)
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#5b2bbf]"
                        >
                          {showPassword ? (
                            <FaEyeSlash size={14} />
                          ) : (
                            <FaEye size={14} />
                          )}
                        </button>

                      </div>

                    </div>


                    {/* REMEMBER */}

                    <div className="flex items-center justify-between mt-5">

                      <label className="flex items-center gap-2 cursor-pointer">

                        <input
                          type="checkbox"
                          name="remember"
                          checked={formData.remember}
                          onChange={handleChange}
                          className="w-4 h-4 accent-[#5b2bbf]"
                        />

                        <span className="text-xs text-gray-500">
                          Remember me
                        </span>

                      </label>

                    </div>


                    {/* LOGIN BUTTON */}

                    <button
                      type="submit"
                      className="w-full mt-6 flex items-center justify-center gap-2 bg-[#5b2bbf] text-white py-3.5 rounded-full text-xs font-bold hover:bg-[#45209a] hover:shadow-lg transition"
                    >
                      Login
                      <FaArrowRight size={10} />
                    </button>

                  </form>


                  {/* =================================================
                      DIVIDER
                  ================================================= */}

                  <div className="flex items-center gap-3 my-6">

                    <div className="h-px flex-1 bg-gray-100" />

                    <span className="text-[10px] text-gray-400">
                      OR CONTINUE WITH
                    </span>

                    <div className="h-px flex-1 bg-gray-100" />

                  </div>


                  {/* SOCIAL LOGIN */}

                  <div className="grid grid-cols-2 gap-3">

                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition"
                    >
                      <FaGoogle
                        className="text-red-500"
                        size={13}
                      />

                      Google
                    </button>


                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition"
                    >
                      <FaFacebookF
                        className="text-blue-600"
                        size={13}
                      />

                      Facebook
                    </button>

                  </div>


                  {/* REGISTER */}

                  <div className="text-center mt-7">

                    <p className="text-xs text-gray-500">

                      Don't have an account?

                      <Link
                        to="/register"
                        className="ml-1 text-[#5b2bbf] font-bold hover:underline"
                      >
                        Create Account
                      </Link>

                    </p>

                  </div>

                </div>


                {/* BACK HOME */}

                <div className="text-center mt-6">

                  <Link
                    to="/"
                    className="text-[10px] text-gray-400 hover:text-[#5b2bbf] transition"
                  >
                    ← Back to Home
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Login;
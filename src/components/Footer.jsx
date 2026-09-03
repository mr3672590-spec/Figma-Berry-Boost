import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#241044] text-white mt-16">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Blueberry Juice"
                className="w-28 h-auto hover:scale-105"
              />
            </Link>

            <p className="text-purple-200 text-x[13px] leading-6 mt-5 max-w-xs">
              Deliciously natural fruit drinks made with real
              fruits and goodness in every refreshing sip.
            </p>

          
            <div className="flex items-center gap-3 mt-6">

              <a
                href="https://www.facebook.com/share/1EmVxMZYTd/"
                className="w-13 h-13 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5b2bbf] hover:scale-130 transition-all duration-300 "
              >
                <FaFacebookF size={13} />
              </a>

              <a
                href="https://www.instagram.com/mr3672590?igsh=bXloNnBhdm1xazN6"
                className="w-13 h-13 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5b2bbf] hover:scale-130 transition-all duration-300"
              >
                <FaInstagram size={13} />
              </a>

              <a
                href="https://x.com/MdSohelRanrk8h"
                className="w-13 h-13 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5b2bbf] hover:scale-130 transition-all duration-300"
              >
                <FaTwitter size={13} />
              </a>

              <a
                href="https://www.youtube.com"
                className="w-13 h-13 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5b2bbf] hover:scale-130 transition-all duration-300 "
              >
                <FaYoutube size={13} />
              </a>

            </div>

          </div>

          <div>

            <h3 className="text-[20px] font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="text-purple-200 text-x[13px] hover:text-white hover:underline underline-offset-8 transition-all"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-purple-200 text-x[13px] hover:text-white hover:underline underline-offset-8 transition-all duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="text-purple-200 text-x[13px] hover:text-white hover:underline underline-offset-8 transition-all duration-300"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/categories"
                  className="text-purple-200 text-x[13px] hover:text-white hover:underline underline-offset-8 transition-all duration-300"
                >
                  Benefits
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-purple-200 text-x[13px] hover:text-white hover:underline underline-offset-8 transition-all hover:underline underline-offset-8 duration-300"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>


      
          <div>

            <h3 className="text-xl font-bold mb-5">
              Customer Care
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/shop"
                  className="text-purple-200 text-x[13px] hover:text-white hover:underline underline-offset-8 transition-all duration-300"
                >
                  Shop All
                </Link>
              </li>

              <li>
                <Link
                  to="/wishlist"
                  className="text-purple-200 text-x[13px] hover:text-white hover:underline underline-offset-8 transition-all duration-300 "
                >
                  Wishlist
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="text-purple-200 text-x[13px] hover:text-white  hover:underline underline-offset-8 transition-all duration-300"
                >
                  Shopping Cart
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-purple-200 text-x[13px] hover:text-white hover:underline underline-offset-8 transition-all duration-300"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-purple-200 text-x[13px] hover:text-white hover:underline underline-offset-8 transition-all duration-300"
                >
                  Help & Support
                </Link>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-bold mb-5">
              Get In Touch
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">

                <div className="w-8 h-8 shrink-0 hover:bg-blue-600 cursor-pointer rounded-full bg-white/10 flex items-center justify-center text-purple-200">
                  <FaMapMarkerAlt size={12} />
                </div>

                <p className="text-purple-200 text-x[13px] leading-5">
                  Dhaka, Bangladesh
                </p>

              </div>


              <div className="flex gap-3">

                <div className="w-8 h-8 shrink-0 hover:bg-blue-600 cursor-pointer rounded-full bg-white/10 flex items-center justify-center text-purple-200">
                  <FaPhoneAlt size={11} />
                </div>

                <a
                  href="https://wa.me/8801816066829"
                  className="text-purple-200 text-x[13px] hover:underline underline-offset-8 transition-all duration-300"
                >
                  +880 01816066829
                </a>

              </div>


              <div className="flex gap-3">

                <div className="w-8 h-8 shrink-0 hover:bg-blue-600 cursor-pointer rounded-full bg-white/10 flex items-center justify-center text-purple-200">
                  <FaEnvelope size={12} />
                </div>

                <a
                  href="soheljan25@gmail.com"
                  className="text-purple-200 text-x[13px] hover:underline underline-offset-8  transition-all duration-300"
                >
                  soheljan25@gmail.com
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-purple-300 text-xl text-center md:text-left">
              © {new Date().getFullYear()} Blueberry. All rights reserved.
            </p>

            <div className="flex items-center gap-5">

              <Link
                to="/"
                className="text-purple-300 text-x[13px] hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                to="/"
                className="text-purple-300 text-x[13px] hover:text-white"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
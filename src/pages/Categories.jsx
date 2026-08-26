import React from "react";
import { Link } from "react-router-dom";

import {
  FaAppleAlt,
  FaLeaf,
  FaSeedling,
  FaTint,
  FaHeart,
  FaBolt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import blueberry from "../assets/blueberry.png";
import blueberryCan from "../assets/blueberry-can.png";

const benefits = [
  {
    icon: <FaAppleAlt />,
    title: "REAL FRUIT",
    description:
      "Made with real fruit ingredients for a naturally delicious taste.",
  },
  {
    icon: <FaLeaf />,
    title: "100% NATURAL",
    description:
      "Simple ingredients with natural goodness in every refreshing sip.",
  },
  {
    icon: <FaSeedling />,
    title: "RICH IN NUTRIENTS",
    description:
      "A delicious way to enjoy the goodness naturally found in fruit.",
  },
  {
    icon: <FaTint />,
    title: "REFRESHING",
    description:
      "A smooth and refreshing drink for any time of the day.",
  },
  {
    icon: <FaHeart />,
    title: "MADE WITH CARE",
    description:
      "Every product is created with quality and attention to detail.",
  },
  {
    icon: <FaBolt />,
    title: "EVERYDAY ENERGY",
    description:
      "A tasty refreshment to brighten up your everyday moments.",
  },
];

const Categories = () => {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}

      <section className="bg-[#eee4ff] overflow-hidden">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[420px]">

            {/* LEFT */}

            <div className="py-14">

              <span className="inline-block bg-white text-[#5b2bbf] px-4 py-2 rounded-full text-[10px] font-bold tracking-wider">
                OUR BENEFITS
              </span>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#241044]">
                Good For You.
                <br />

                <span className="text-[#5b2bbf]">
                  Great To Taste.
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-sm sm:text-base leading-7 text-gray-600">
                Discover the goodness behind every bottle. We
                believe refreshing drinks can be delicious, simple
                and made with quality ingredients.
              </p>

              <Link
                to="/shop"
                className="inline-flex items-center gap-2 mt-7 bg-[#5b2bbf] text-white px-7 py-3 rounded-full text-xs font-semibold hover:bg-[#45209a] transition"
              >
                Explore Products
                <FaArrowRight size={11} />
              </Link>

            </div>


            {/* RIGHT */}

            <div className="relative flex justify-center lg:justify-end py-10">

              {/* Circle */}

              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#d7bfff]" />

              {/* Blueberries */}

              <img
                src={blueberry}
                alt="Blueberries"
                className="absolute w-24 left-5 sm:left-14 bottom-10 z-10"
              />

              <img
                src={blueberry}
                alt="Blueberries"
                className="absolute w-16 right-2 top-10 z-10"
              />

              {/* Can */}

              <img
                src={blueberryCan}
                alt="Blueberry Juice"
                className="relative z-20 w-60 sm:w-72 lg:w-80 drop-shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="py-14 sm:py-20">

        <div className="max-w-4xl mx-auto px-5 text-center">

          <p className="text-[#5b2bbf] text-[10px] font-bold tracking-[3px] uppercase">
            Why You'll Love It
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#241044]">
            Naturally Delicious
          </h2>

          <p className="mt-5 text-sm sm:text-base leading-7 text-gray-500">
            From real fruit goodness to refreshing taste, every
            part of our drink is made to give you a better
            refreshment experience.
          </p>

        </div>

      </section>


      {/* ================= BENEFITS GRID ================= */}

      <section className="pb-16 sm:pb-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {benefits.map((benefit) => (

              <div
                key={benefit.title}
                className="group bg-white border border-gray-100 rounded-2xl p-7 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >

                {/* ICON */}

                <div className="w-16 h-16 mx-auto rounded-full bg-[#eee4ff] flex items-center justify-center text-[#5b2bbf] text-2xl group-hover:bg-[#5b2bbf] group-hover:text-white transition duration-300">
                  {benefit.icon}
                </div>

                {/* TITLE */}

                <h3 className="mt-5 text-base font-extrabold text-[#241044]">
                  {benefit.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {benefit.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= NATURAL SECTION ================= */}

      <section className="bg-[#faf8ff] py-16 sm:py-20">

        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}

            <div className="relative flex justify-center order-2 lg:order-1">

              <div className="absolute w-72 h-72 rounded-full bg-[#e8d9ff]" />

              <img
                src={blueberryCan}
                alt="Natural Blueberry Drink"
                className="relative z-10 w-60 sm:w-72 drop-shadow-2xl"
              />

            </div>


            {/* CONTENT */}

            <div className="order-1 lg:order-2">

              <p className="text-[#5b2bbf] text-[10px] font-bold tracking-[3px] uppercase">
                Simple Ingredients
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#241044] leading-tight">
                Everything You Need.
                <br />

                <span className="text-[#5b2bbf]">
                  Nothing You Don't.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                We believe drinks should taste great without
                making things complicated. That's why we focus
                on quality ingredients and delicious natural
                flavour.
              </p>


              {/* LIST */}

              <div className="mt-7 space-y-4">

                <div className="flex items-center gap-3">

                  <FaCheckCircle className="text-[#5b2bbf]" />

                  <span className="text-sm font-semibold text-gray-700">
                    Real fruit ingredients
                  </span>

                </div>


                <div className="flex items-center gap-3">

                  <FaCheckCircle className="text-[#5b2bbf]" />

                  <span className="text-sm font-semibold text-gray-700">
                    Naturally refreshing flavour
                  </span>

                </div>


                <div className="flex items-center gap-3">

                  <FaCheckCircle className="text-[#5b2bbf]" />

                  <span className="text-sm font-semibold text-gray-700">
                    Carefully selected ingredients
                  </span>

                </div>


                <div className="flex items-center gap-3">

                  <FaCheckCircle className="text-[#5b2bbf]" />

                  <span className="text-sm font-semibold text-gray-700">
                    Made for everyday refreshment
                  </span>

                </div>

              </div>


              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-7 text-[#5b2bbf] text-xs font-bold hover:gap-3 transition-all"
              >
                Learn More About Us
                <FaArrowRight size={10} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURE STRIP ================= */}

      <section className="py-12">

        <div className="max-w-6xl mx-auto px-5">

          <div className="bg-[#5b2bbf] rounded-3xl px-6 sm:px-10 py-8">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="text-center text-white">

                <FaAppleAlt className="mx-auto text-xl" />

                <h3 className="mt-3 text-xs font-bold">
                  REAL FRUIT
                </h3>

              </div>


              <div className="text-center text-white">

                <FaLeaf className="mx-auto text-xl" />

                <h3 className="mt-3 text-xs font-bold">
                  NATURAL
                </h3>

              </div>


              <div className="text-center text-white">

                <FaSeedling className="mx-auto text-xl" />

                <h3 className="mt-3 text-xs font-bold">
                  QUALITY
                </h3>

              </div>


              <div className="text-center text-white">

                <FaHeart className="mx-auto text-xl" />

                <h3 className="mt-3 text-xs font-bold">
                  MADE WITH CARE
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="pb-16 sm:pb-20">

        <div className="max-w-5xl mx-auto px-5">

          <div className="bg-[#eee4ff] rounded-3xl text-center px-6 py-12">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241044]">
              Taste The Difference
            </h2>

            <p className="mt-4 text-sm text-gray-600">
              Discover refreshing flavours made with real fruit
              goodness.
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-6 bg-[#5b2bbf] text-white px-7 py-3 rounded-full text-xs font-bold hover:bg-[#45209a] transition"
            >
              Shop Now
              <FaArrowRight size={11} />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Categories;
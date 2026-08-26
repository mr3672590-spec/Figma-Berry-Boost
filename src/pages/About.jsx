import React from "react";
import { Link } from "react-router-dom";

import {
  FaLeaf,
  FaHeart,
  FaSeedling,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import blueberryCan from "../assets/blueberry-can.png";

const About = () => {
  return (
    <div className="bg-white overflow-hidden">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[760px] overflow-hidden">

        {/* FULL BACKGROUND IMAGE - NO SHADOW / NO OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: `url(${blueberryCan})`,
            backgroundPosition: "center center",
          }}
        />

        {/* HERO CONTENT */}
        <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div
            className="
              min-h-[620px]
              sm:min-h-[680px]
              lg:min-h-[760px]
              flex
              items-center
            "
          >

            <div className="max-w-xl py-16 sm:py-20 lg:py-24">

              {/* BADGE */}
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-white
                  text-[#5b2bbf]
                  px-5
                  py-2.5
                  rounded-full
                  text-[10px]
                  font-extrabold
                  tracking-[2px]
                "
              >
                <FaLeaf size={11} />
                ABOUT US
              </span>

              {/* HEADING */}
              <h1
                className="
                  mt-6
                  text-[43px]
                  leading-[1]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[76px]
                  font-extrabold
                  text-[#FF00FF]
                "
              >
                Goodness You
                <br />

                <span className="text-[#00FFFF]">
                  Can Taste.
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-6
                  max-w-lg
                  text-[15px]
                  sm:text-base
                  lg:text-lg
                  leading-7
                  text-[#fff]
                "
              >
                We believe great-tasting drinks should be made with
                real ingredients. That's why every bottle is packed
                with real fruit goodness and refreshing flavour.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-row flex-wrap items-center gap-3 mt-8">

                <Link
                  to="/shop"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-[#5b2bbf]
                    text-white
                    px-6
                    sm:px-7
                    py-3.5
                    rounded-full
                    text-xs
                    font-bold
                    hover:bg-[#45209a]
                    hover:scale-105
                    transition
                    duration-300
                  "
                >
                  Explore Our Products
                  <FaArrowRight size={11} />
                </Link>

                <Link
                  to="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    bg-white
                    text-[#5b2bbf]
                    px-7
                    py-3.5
                    rounded-full
                    text-xs
                    font-bold
                    hover:bg-[#f8f4ff]
                    hover:scale-105
                    transition
                    duration-300
                  "
                >
                  Contact Us
                </Link>

              </div>

              {/* TRUST FEATURES */}
              <div className="flex flex-wrap gap-x-5 gap-y-3 mt-9">

                {/* REAL FRUIT */}
                <div className="flex items-center gap-2">
                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FaCheckCircle
                      className="text-[#5b2bbf]"
                      size={14}
                    />
                  </div>

                  <span className="text-[12px] sm:text-xs font-bold text-[#fff]">
                    Real Fruit
                  </span>
                </div>

                {/* NATURAL INGREDIENTS */}
                <div className="flex items-center gap-2">
                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FaCheckCircle
                      className="text-[#5b2bbf]"
                      size={14}
                    />
                  </div>

                  <span className="text-[12px] sm:text-xs font-bold text-[#fff]">
                    Natural Ingredients
                  </span>
                </div>

                {/* GREAT TASTE */}
                <div className="flex items-center gap-2">
                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FaCheckCircle
                      className="text-[#5b2bbf]"
                      size={14}
                    />
                  </div>

                  <span className="text-[12px] sm:text-xs font-bold text-[#fff]">
                    Great Taste
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ====================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* PRODUCT IMAGE */}
            <div className="relative flex justify-center">

              <div
                className="
                  absolute
                  w-72
                  h-72
                  sm:w-96
                  sm:h-96
                  rounded-full
                  bg-[#f0e7ff]
                "
              />

              <div
                className="
                  relative
                  z-10
                  bg-[#f8f4ff]
                  rounded-3xl
                  p-8
                  sm:p-10
                "
              >
                <img
                  src={blueberryCan}
                  alt="Blueberry Drink"
                  className="
                    w-52
                    sm:w-64
                    lg:w-72
                    rounded-xl
                    mx-auto
                    drop-shadow-2xl
                    hover:scale-105
                    transition
                    duration-500
                  "
                />
              </div>

            </div>


            {/* CONTENT */}
            <div>

              <p className="text-[#5b2bbf] text-[10px] font-bold tracking-[3px] uppercase">
                Our Story
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-extrabold
                  text-[#241044]
                  leading-tight
                "
              >
                Made With{" "}
                <span className="text-[#5b2bbf]">
                  Real Goodness
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-7 text-gray-600">
                Our journey started with a simple idea: create fruit
                drinks that taste amazing while keeping things
                simple and natural.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600">
                We carefully select quality fruits and turn them
                into delicious drinks that are perfect for your
                everyday moments.
              </p>

              <div className="mt-7 space-y-4">

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#5b2bbf]" />

                  <span className="text-sm font-medium text-gray-700">
                    Made with real fruit
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#5b2bbf]" />

                  <span className="text-sm font-medium text-gray-700">
                    No unnecessary ingredients
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#5b2bbf]" />

                  <span className="text-sm font-medium text-gray-700">
                    Delicious and refreshing
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CORE VALUES
      ====================================================== */}

      <section className="bg-[#faf8ff] py-16 sm:py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-[#5b2bbf] text-[10px] font-bold tracking-[3px] uppercase">
              What We Believe
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#241044]">
              Our Core Values
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Everything we do is guided by our commitment to
              quality, freshness and natural goodness.
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

            {/* NATURAL */}
            <div
              className="
                bg-white
                rounded-2xl
                p-7
                text-center
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition
                duration-300
              "
            >
              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-full
                  bg-[#eee4ff]
                  flex
                  items-center
                  justify-center
                  text-[#5b2bbf]
                  text-2xl
                "
              >
                <FaLeaf />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#241044]">
                Natural
              </h3>

              <p className="mt-3 text-sm text-gray-500 leading-6">
                We keep our ingredients simple, natural and
                carefully selected.
              </p>
            </div>


            {/* MADE WITH LOVE */}
            <div
              className="
                bg-white
                rounded-2xl
                p-7
                text-center
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition
                duration-300
              "
            >
              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-full
                  bg-[#eee4ff]
                  flex
                  items-center
                  justify-center
                  text-[#5b2bbf]
                  text-2xl
                "
              >
                <FaHeart />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#241044]">
                Made With Love
              </h3>

              <p className="mt-3 text-sm text-gray-500 leading-6">
                Every product is created with care and attention
                to quality.
              </p>
            </div>


            {/* BETTER CHOICES */}
            <div
              className="
                bg-white
                rounded-2xl
                p-7
                text-center
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition
                duration-300
                sm:col-span-2
                lg:col-span-1
              "
            >
              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-full
                  bg-[#eee4ff]
                  flex
                  items-center
                  justify-center
                  text-[#5b2bbf]
                  text-2xl
                "
              >
                <FaSeedling />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#241044]">
                Better Choices
              </h3>

              <p className="mt-3 text-sm text-gray-500 leading-6">
                We believe better ingredients create better
                everyday choices.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="bg-[#5b2bbf] rounded-3xl overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

              {/* CONTENT */}
              <div className="p-8 sm:p-10 lg:p-14 text-white">

                <p className="text-purple-200 text-[10px] font-bold tracking-[3px] uppercase">
                  Why Choose Us
                </p>

                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                  Refreshment You
                  <br />
                  Can Feel Good About
                </h2>

                <p className="mt-5 text-purple-100 text-sm sm:text-base leading-7">
                  From the fruit we select to the drink you enjoy,
                  we focus on making every sip naturally delicious.
                </p>

                <Link
                  to="/shop"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-7
                    bg-white
                    text-[#5b2bbf]
                    px-7
                    py-3.5
                    rounded-full
                    text-xs
                    font-bold
                    hover:bg-purple-100
                    hover:scale-105
                    transition
                    duration-300
                  "
                >
                  Shop Now
                  <FaArrowRight size={11} />
                </Link>

              </div>


              {/* PRODUCT */}
              <div
                className="
                  relative
                  flex
                  justify-center
                  items-center
                  p-10
                  bg-[#6b37d0]
                  min-h-[330px]
                  sm:min-h-[400px]
                  overflow-hidden
                "
              >

                <div
                  className="
                    absolute
                    w-64
                    h-64
                    sm:w-80
                    sm:h-80
                    rounded-full
                    bg-[#7e51d8]
                  "
                />

                <img
                  src={blueberryCan}
                  alt="Blueberry Product"
                  className="
                    relative
                    z-10
                    w-52
                    rounded-xl
                    sm:w-64
                    lg:w-72
                    drop-shadow-2xl
                    hover:scale-105
                    transition
                    duration-500
                  "
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="pb-16 sm:pb-20">

        <div className="max-w-5xl mx-auto px-5 sm:px-6">

          <div className="bg-[#eee4ff] rounded-3xl text-center px-6 py-12 sm:py-14">

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-extrabold
                text-[#241044]
              "
            >
              Ready For A Fresh Sip?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Discover your favourite flavour today.
            </p>

            <Link
              to="/shop"
              className="
                inline-flex
                items-center
                gap-2
                mt-6
                bg-[#5b2bbf]
                text-white
                px-7
                py-3.5
                rounded-full
                text-xs
                font-semibold
                hover:bg-[#45209a]
                hover:scale-105
                transition
                duration-300
              "
            >
              Explore Products
              <FaArrowRight size={11} />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;
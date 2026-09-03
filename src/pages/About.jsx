import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCheckCircle,
  FaLeaf,
  FaHeart,
  FaShieldAlt,
  FaSeedling,
  FaChevronLeft,
  FaChevronRight,
  FaTruck,
} from "react-icons/fa";

import blueberryCan from "../assets/blueberry-can.png";
import strawberryHero from "../assets/strawberryHero.png";
import kiwi2 from "../assets/kiwi2.png";
import blueberryHero from "../assets/blueberryHero.png";

// =====================================================
// HERO SLIDES
// =====================================================

const slides = [
  {
    id: 1,
    image: blueberryHero,
    badge: "FRESH • NATURAL • DELICIOUS",
    title: "Good Drinks.",
    highlight: "Good Ingredients.",
    description:
      "We create delicious fruit drinks made with carefully selected ingredients to bring freshness, flavour and goodness to every sip.",
  },
  {
    id: 2,
    image: strawberryHero,
    badge: "REAL FRUIT • REAL TASTE",
    title: "Fresh Taste.",
    highlight: "Pure Happiness.",
    description:
      "Enjoy refreshing strawberry flavour made to bring a delicious and fruity experience to every moment.",
  },
  {
    id: 3,
    image: kiwi2,
    badge: "HEALTHY • COOL • REFRESHING",
    title: "Natural Flavour.",
    highlight: "Fresh Every Sip.",
    description:
      "Discover refreshing kiwi goodness with delicious flavour and a fresh feeling in every sip.",
  },
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // =====================================================
  // NEXT SLIDE
  // =====================================================

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // =====================================================
  // PREVIOUS SLIDE
  // =====================================================

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#241044] overflow-hidden">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative w-full h-screen overflow-hidden flex items-center">

        {/* =====================================================
            SLIDER
        ===================================================== */}

        <div className="absolute inset-0 overflow-hidden">

          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >

            {slides.map((slide) => (
              <div
                key={slide.id}
                className="relative min-w-full h-full flex-shrink-0"
              >

                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-black/35" />

                {/* Purple Overlay */}

                <div className="absolute inset-0 bg-[#3d176d]/20" />

              </div>
            ))}

          </div>

        </div>

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="max-w-2xl">

            {/* Badge */}

            <div className="inline-flex items-center gap-2 bg-white/95 px-4 sm:px-5 py-2.5 rounded-full shadow-xl">

              <FaLeaf
                className="text-[#5b2bbf]"
                size={12}
              />

              <span className="text-[#5b2bbf] text-[9px] sm:text-[10px] font-extrabold tracking-[1.5px] sm:tracking-[2px]">
                {slides[currentSlide].badge}
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-6 sm:mt-7 text-[42px] leading-[0.98] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">

              {slides[currentSlide].title}

              <br />

              <span className="text-[#d9c4ff]">
                {slides[currentSlide].highlight}
              </span>

            </h1>

            {/* Description */}

            <p className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-white/90">
              {slides[currentSlide].description}
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-3 mt-7 sm:mt-8">

              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-[#5b2bbf] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold shadow-2xl hover:bg-[#45209a] hover:scale-105 transition"
              >
                Shop Now

                <FaArrowRight size={11} />
              </Link>

              <a
                href="#about-story"
                className="inline-flex items-center bg-white text-[#5b2bbf] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold shadow-2xl hover:bg-[#f7f2ff] hover:scale-105 transition"
              >
                Our Story
              </a>

            </div>

          </div>

        </div>

        {/* =====================================================
            PREVIOUS BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute z-30 cursor-pointer left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-[#5b2bbf] hover:scale-110 transition duration-300"
        >
          <FaChevronLeft size={14} />
        </button>

        {/* =====================================================
            NEXT BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute z-30 cursor-pointer right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-[#5b2bbf] hover:scale-110 transition duration-300"
        >
          <FaChevronRight size={14} />
        </button>

        {/* =====================================================
            SLIDER DOTS
        ===================================================== */}

        <div className="absolute z-30 bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2.5">

          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-2 rounded-full transition-all duration-300
                ${
                  index === currentSlide
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }
              `}
            />
          ))}

        </div>

      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="py-16 sm:py-20 bg-[#faf8ff]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Card 1 */}

            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-300">

              <div className="w-12 h-12 rounded-2xl bg-[#eee4ff] flex items-center justify-center text-[#5b2bbf]">
                <FaLeaf size={20} />
              </div>

              <h3 className="mt-5 font-extrabold text-lg">
                Natural Ingredients
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Carefully selected ingredients for a naturally refreshing taste.
              </p>

            </div>

            {/* Card 2 */}

            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-300">

              <div className="w-12 h-12 rounded-2xl bg-[#eee4ff] flex items-center justify-center text-[#5b2bbf]">
                <FaTruck size={19} />
              </div>

              <h3 className="mt-5 font-extrabold text-lg">
                Fast Delivery
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fresh products delivered quickly and safely to your doorstep.
              </p>

            </div>

            {/* Card 3 */}

            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-300">

              <div className="w-12 h-12 rounded-2xl bg-[#eee4ff] flex items-center justify-center text-[#5b2bbf]">
                <FaShieldAlt size={19} />
              </div>

              <h3 className="mt-5 font-extrabold text-lg">
                Quality Guaranteed
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Quality checked products made with care and attention.
              </p>

            </div>

            {/* Card 4 */}

            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-300">

              <div className="w-12 h-12 rounded-2xl bg-[#eee4ff] flex items-center justify-center text-[#5b2bbf]">
                <FaHeart size={19} />
              </div>

              <h3 className="mt-5 font-extrabold text-lg">
                Loved By Customers
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Created to bring happiness and freshness to every sip.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ABOUT STORY
      ===================================================== */}

      <section
        id="about-story"
        className="py-20 sm:py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image */}

            <div className="relative">

              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#e7d9ff] rounded-full blur-2xl" />

              <div className="relative bg-[#eee4ff] rounded-[2.5rem] min-h-[420px] sm:min-h-[520px] flex items-center justify-center overflow-hidden">

                <img
                  src={blueberryCan}
                  alt="Fresh fruit drink"
                  className="w-56 sm:w-72 lg:w-80 max-h-[480px] object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
                />

              </div>

            </div>

            {/* Content */}

            <div>

              <span className="inline-flex items-center gap-2 text-[#5b2bbf] text-xs font-extrabold tracking-[2px] uppercase">

                <FaSeedling size={12} />

                About Our Brand

              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#241044]">

                Freshness You Can

                <span className="text-[#5b2bbf]">
                  {" "}Taste.
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-7 text-sm sm:text-base">
                We believe that great drinks start with great ingredients.
                Our mission is to create refreshing fruit drinks that combine
                delicious flavour with a fresh and enjoyable experience.
              </p>

              <p className="mt-4 text-gray-600 leading-7 text-sm sm:text-base">
                From carefully selected fruits to every bottle we prepare,
                we focus on quality, freshness and taste. Every sip is made
                to give you a simple moment of refreshment and happiness.
              </p>

              {/* Checklist */}

              <div className="mt-7 space-y-4">

                <div className="flex items-center gap-3">

                  <FaCheckCircle className="text-[#5b2bbf]" />

                  <span className="text-sm font-semibold text-[#241044]">
                    Carefully selected ingredients
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <FaCheckCircle className="text-[#5b2bbf]" />

                  <span className="text-sm font-semibold text-[#241044]">
                    Delicious natural fruit flavours
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <FaCheckCircle className="text-[#5b2bbf]" />

                  <span className="text-sm font-semibold text-[#241044]">
                    Quality-focused production
                  </span>

                </div>

              </div>

              <Link
                to="/shop"
                className="inline-flex items-center gap-2 mt-8 bg-[#5b2bbf] text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-[#45209a] hover:scale-105 transition"
              >
                Explore Products

                <FaArrowRight size={11} />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="py-20 sm:py-24 bg-[#faf8ff]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center max-w-2xl mx-auto">

            <span className="text-[#5b2bbf] text-xs font-extrabold tracking-[2px] uppercase">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#241044]">
              Made For Fresh Moments
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-500 leading-7">
              Everything we do is focused on delivering delicious taste,
              freshness and quality to our customers.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

            {/* Fresh */}

            <div className="bg-white rounded-3xl p-7 text-center shadow-sm hover:shadow-xl transition duration-300">

              <div className="mx-auto w-14 h-14 rounded-2xl bg-[#eee4ff] flex items-center justify-center text-[#5b2bbf]">
                <FaLeaf size={23} />
              </div>

              <h3 className="mt-5 font-extrabold text-lg">
                Fresh
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-6">
                Fresh flavours for a refreshing everyday experience.
              </p>

            </div>

            {/* Natural */}

            <div className="bg-white rounded-3xl p-7 text-center shadow-sm hover:shadow-xl transition duration-300">

              <div className="mx-auto w-14 h-14 rounded-2xl bg-[#eee4ff] flex items-center justify-center text-[#5b2bbf]">
                <FaSeedling size={23} />
              </div>

              <h3 className="mt-5 font-extrabold text-lg">
                Natural
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-6">
                Inspired by nature and made with carefully selected fruits.
              </p>

            </div>

            {/* Trusted */}

            <div className="bg-white rounded-3xl p-7 text-center shadow-sm hover:shadow-xl transition duration-300">

              <div className="mx-auto w-14 h-14 rounded-2xl bg-[#eee4ff] flex items-center justify-center text-[#5b2bbf]">
                <FaShieldAlt size={23} />
              </div>

              <h3 className="mt-5 font-extrabold text-lg">
                Trusted
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-6">
                Quality and customer satisfaction are always our priority.
              </p>

            </div>

            {/* Delicious */}

            <div className="bg-white rounded-3xl p-7 text-center shadow-sm hover:shadow-xl transition duration-300">

              <div className="mx-auto w-14 h-14 rounded-2xl bg-[#eee4ff] flex items-center justify-center text-[#5b2bbf]">
                <FaHeart size={23} />
              </div>

              <h3 className="mt-5 font-extrabold text-lg">
                Delicious
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-6">
                Great taste designed to make every sip more enjoyable.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="py-20 sm:py-24 px-5">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-[#241044] px-6 py-14 sm:px-12 lg:px-20 text-center">

            <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#5b2bbf] rounded-full blur-3xl opacity-40" />

            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#5b2bbf] rounded-full blur-3xl opacity-40" />

            <div className="relative z-10">

              <span className="text-[#d9c4ff] text-xs font-extrabold tracking-[2px] uppercase">
                Taste The Difference
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">

                Ready For Something

                <span className="text-[#d9c4ff]">
                  {" "}Fresh?
                </span>

              </h2>

              <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-white/70 leading-7">
                Discover our delicious fruit drinks and enjoy freshness,
                flavour and goodness in every sip.
              </p>

              <Link
                to="/shop"
                className="inline-flex items-center gap-2 mt-8 bg-white text-[#5b2bbf] px-8 py-4 rounded-full text-sm font-extrabold hover:bg-[#f5efff] hover:scale-105 transition shadow-xl"
              >
                Shop Our Drinks

                <FaArrowRight size={11} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;
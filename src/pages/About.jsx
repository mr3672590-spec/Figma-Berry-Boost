
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaStar,
  FaHeart,
  FaTruck,
  FaShieldAlt,
  FaLeaf,
  FaCheckCircle,
  FaSeedling,
} from "react-icons/fa";

// ================= IMAGES =================

import strawberryHero from "../assets/strawberryHero.png";
import kiwi2 from "../assets/kiwi2.png";
import blueberryHero from "../assets/blueberryHero.png";
import blueberryCan from "../assets/blueberry-can.png";

// =====================================================
// HERO SLIDES
// =====================================================

const heroSlides = [
  {
    id: 1,
    image: strawberryHero,
    badge: "FRESH • NATURAL • DELICIOUS",
    title1: "Taste The",
    highlight1: "Strawberry Freshness.",
    title2: "Feel The",
    highlight2: "Goodness.",
    description:
      "Enjoy the delicious taste of fresh strawberries in every refreshing sip.",
  },
  {
    id: 2,
    image: kiwi2,
    badge: "REAL FRUIT • REAL TASTE",
    title1: "Taste The",
    highlight1: "Kiwi Freshness.",
    title2: "Feel The",
    highlight2: "Goodness.",
    description:
      "Enjoy the delicious taste of carefully selected kiwi fruits in every refreshing sip.",
  },
  {
    id: 3,
    image: blueberryHero,
    badge: "HEALTHY • COOL • REFRESHING",
    title1: "Taste The",
    highlight1: "Blueberry Freshness.",
    title2: "Enjoy The",
    highlight2: "Goodness.",
    description:
      "Refresh your day with delicious blueberry drinks made with real fruit goodness.",
  },
];

// =====================================================
// ABOUT
// =====================================================

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // =====================================================
  // AUTO SLIDER
  // =====================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentHero = heroSlides[currentSlide];

  return (
    <main className="bg-white text-[#241044] overflow-hidden">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative w-full h-[650px] sm:h-[700px] overflow-hidden flex items-center">

        {/* =====================================================
            BACKGROUND SLIDES
        ===================================================== */}

        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0 w-full h-full
              transition-transform duration-1000 ease-in-out
              ${
                index === currentSlide
                  ? "translate-x-0 z-10"
                  : index < currentSlide
                  ? "translate-x-full z-0"
                  : "-translate-x-full z-0"
              }
            `}
          >

            <img
              src={slide.image}
              alt={`Hero Banner ${slide.id}`}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-black/30" />

            {/* Purple Overlay */}

            <div className="absolute inset-0 bg-[#3d176d]/15" />

          </div>
        ))}

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-7 md:px-8 lg:px-10 xl:px-12">

          <div className="flex flex-col items-start justify-center w-full max-w-[620px] py-16">

            {/* =================================================
                BADGE
            ================================================= */}

            <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg">

              <FaLeaf
                className="text-[#5b2bbf]"
                size={12}
              />

              <span className="text-[#5b2bbf] text-[8px] sm:text-[10px] font-extrabold tracking-[1.5px] sm:tracking-[2px] whitespace-nowrap">
                {currentHero.badge}
              </span>

            </div>

            {/* =================================================
                TITLE
            ================================================= */}

            <h1 className="mt-5 sm:mt-6 text-[40px] leading-[0.98] sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[70px] font-extrabold text-white">

              {currentHero.title1}

              <br />

              <span className="text-[#d9c4ff]">
                {currentHero.highlight1}
              </span>

              <br />

              {currentHero.title2}

              <br />

              <span className="text-[#d9c4ff]">
                {currentHero.highlight2}
              </span>

            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p className="mt-5 sm:mt-6 max-w-[540px] text-[13px] sm:text-sm md:text-base leading-6 sm:leading-7 text-white/90">
              {currentHero.description}
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3 mt-7">

              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 bg-[#5b2bbf] text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-[11px] sm:text-xs font-bold shadow-xl hover:bg-[#45209a] hover:scale-105 transition duration-300"
              >
                Shop Now

                <FaArrowRight size={10} />

              </Link>

              <a
                href="#about-story"
                className="inline-flex items-center justify-center bg-white text-[#5b2bbf] px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-[11px] sm:text-xs font-bold shadow-xl hover:bg-[#f8f4ff] hover:scale-105 transition duration-300"
              >
                Our Story
              </a>

            </div>

            {/* =================================================
                RATING
            ================================================= */}

            <div className="flex items-center gap-3 mt-7">

              <div className="flex items-center gap-1 text-[#f5b800]">

                <FaStar size={11} />
                <FaStar size={11} />
                <FaStar size={11} />
                <FaStar size={11} />
                <FaStar size={11} />

              </div>

              <span className="text-[10px] sm:text-xs font-semibold text-white">
                4.9/5 from happy customers
              </span>

            </div>

          </div>

        </div>

        {/* =====================================================
            SLIDER DOTS
        ===================================================== */}

        <div className="absolute z-30 bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">

          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                rounded-full transition-all duration-500
                ${
                  index === currentSlide
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/50 hover:bg-white/80"
                }
              `}
            />
          ))}

        </div>

      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="bg-white border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {/* Natural Ingredients */}

            <div className="flex items-center gap-3 py-6 lg:py-7">

              <div className="w-10 h-10 rounded-full bg-[#eee4ff] flex items-center justify-center shrink-0">
                <FaLeaf
                  className="text-[#5b2bbf]"
                  size={15}
                />
              </div>

              <div>

                <h3 className="text-xs font-bold text-[#241044]">
                  Natural Ingredients
                </h3>

                <p className="text-[10px] text-gray-500 mt-1">
                  Carefully selected
                </p>

              </div>

            </div>

            {/* Fast Delivery */}

            <div className="flex items-center gap-3 py-6 lg:py-7">

              <div className="w-10 h-10 rounded-full bg-[#eee4ff] flex items-center justify-center shrink-0">
                <FaTruck
                  className="text-[#5b2bbf]"
                  size={15}
                />
              </div>

              <div>

                <h3 className="text-xs font-bold text-[#241044]">
                  Fast Delivery
                </h3>

                <p className="text-[10px] text-gray-500 mt-1">
                  Fresh to your door
                </p>

              </div>

            </div>

            {/* Quality */}

            <div className="flex items-center gap-3 py-6 lg:py-7">

              <div className="w-10 h-10 rounded-full bg-[#eee4ff] flex items-center justify-center shrink-0">
                <FaShieldAlt
                  className="text-[#5b2bbf]"
                  size={15}
                />
              </div>

              <div>

                <h3 className="text-xs font-bold text-[#241044]">
                  Quality Guaranteed
                </h3>

                <p className="text-[10px] text-gray-500 mt-1">
                  Quality you can trust
                </p>

              </div>

            </div>

            {/* Loved */}

            <div className="flex items-center gap-3 py-6 lg:py-7">

              <div className="w-10 h-10 rounded-full bg-[#eee4ff] flex items-center justify-center shrink-0">
                <FaHeart
                  className="text-[#5b2bbf]"
                  size={15}
                />
              </div>

              <div>

                <h3 className="text-xs font-bold text-[#241044]">
                  Loved By Customers
                </h3>

                <p className="text-[10px] text-gray-500 mt-1">
                  Made with love
                </p>

              </div>

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

            {/* IMAGE */}

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

            {/* CONTENT */}

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

              {/* CHECKLIST */}

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

            {/* DECORATION */}

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

    </main>
  );
};

export default About;


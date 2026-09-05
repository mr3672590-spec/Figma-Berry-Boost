import React, { useState } from "react";
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

import strawberryHero from "../assets/strawberryHero.png";
import kiwi2 from "../assets/kiwi2.png";
import blueberryHero from "../assets/blueberryHero.png";
import blueberryCan from "../assets/blueberry-can.png";

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

const features = [
  {
    icon: FaLeaf,
    title: "Natural Ingredients",
    description: "Carefully selected",
  },
  {
    icon: FaTruck,
    title: "Fast Delivery",
    description: "Fresh to your door",
  },
  {
    icon: FaShieldAlt,
    title: "Quality Guaranteed",
    description: "Quality you can trust",
  },
  {
    icon: FaHeart,
    title: "Loved By Customers",
    description: "Made with love",
  },
];

const benefits = [
  {
    icon: FaLeaf,
    title: "Fresh",
    description:
      "Fresh flavours for a refreshing everyday experience.",
  },
  {
    icon: FaSeedling,
    title: "Natural",
    description:
      "Inspired by nature and made with carefully selected fruits.",
  },
  {
    icon: FaShieldAlt,
    title: "Trusted",
    description:
      "Quality and customer satisfaction are always our priority.",
  },
  {
    icon: FaHeart,
    title: "Delicious",
    description:
      "Great taste designed to make every sip more enjoyable.",
  },
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentHero = heroSlides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  return (
    <main className="overflow-hidden bg-white text-[#241044]">

      {/* ================= HERO ================= */}

      <section className="relative flex min-h-[650px] w-full items-center justify-center overflow-hidden sm:min-h-[700px]">

        {/* Background / Product Images */}

        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
              index === currentSlide
                ? "z-10 opacity-100"
                : "z-0 opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Hero Banner ${slide.id}`}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-[#3d176d]/15" />
          </div>
        ))}

        {/* Hero Content */}

        <div className="relative z-20 mx-auto w-full max-w-7xl px-5 sm:px-7 md:px-8 lg:px-10 xl:px-12">

          <div className="flex w-full max-w-[620px] flex-col items-start justify-center py-16">

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm sm:px-5 sm:py-2.5">

              <FaLeaf
                className="text-[#5b2bbf]"
                size={12}
              />

              <span className="text-[8px] font-extrabold tracking-[1.5px] text-[#5b2bbf] sm:text-[10px] sm:tracking-[2px]">
                {currentHero.badge}
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-5 text-[40px] font-extrabold leading-[0.98] text-white sm:mt-6 sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[70px]">

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

            {/* Description */}

            <p className="mt-5 max-w-[540px] text-[13px] leading-6 text-white/90 sm:mt-6 sm:text-sm sm:leading-7 md:text-base">
              {currentHero.description}
            </p>

            {/* Buttons */}

            <div className="mt-7 flex flex-wrap items-center gap-2 sm:gap-3">

              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5b2bbf] px-5 py-3 text-[11px] font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-[#45209a] sm:px-7 sm:py-3.5 sm:text-xs"
              >
                Shop Now

                <FaArrowRight size={10} />
              </Link>

              <a
                href="#about-story"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[11px] font-bold text-[#5b2bbf] shadow-xl transition duration-300 hover:scale-105 hover:bg-[#f8f4ff] sm:px-7 sm:py-3.5 sm:text-xs"
              >
                Our Story
              </a>

            </div>

            {/* Rating */}

            <div className="mt-7 flex items-center gap-3">

              <div className="flex items-center gap-1 text-[#f5b800]">

                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={11}
                  />
                ))}

              </div>

              <span className="text-[10px] font-semibold text-white sm:text-xs">
                4.9/5 from happy customers
              </span>

            </div>

          </div>

        </div>

        {/* ================= CENTER SLIDER CONTROLS ================= */}

        <div className="absolute left-0 top-1/2 z-40 flex w-full -translate-y-1/2 items-center justify-between px-4 sm:px-8 lg:px-12">

          {/* Previous */}

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-xl font-bold text-[#5b2bbf] shadow-xl transition duration-300 hover:scale-110 hover:bg-white sm:h-13 sm:w-13"
          >
            ←
          </button>

          {/* Center Dots */}

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3">

            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "h-2.5 w-9 bg-white shadow-md"
                    : "h-2.5 w-2.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}

          </div>

          {/* Next */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-xl font-bold text-[#5b2bbf] shadow-xl transition duration-300 hover:scale-110 hover:bg-white sm:h-13 sm:w-13"
          >
            →
          </button>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="border-b border-gray-100 bg-white">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 py-6 lg:py-7"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eee4ff]">

                    <Icon
                      className="text-[#5b2bbf]"
                      size={15}
                    />

                  </div>

                  <div>

                    <h3 className="text-xs font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-[10px] text-gray-500">
                      {feature.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================= ABOUT STORY ================= */}

      <section
        id="about-story"
        className="bg-white py-20 sm:py-24"
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Image */}

            <div className="relative">

              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#e7d9ff] blur-2xl" />

              <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[2.5rem] bg-[#eee4ff] sm:min-h-[520px]">

                <img
                  src={blueberryCan}
                  alt="Fresh fruit drink"
                  className="w-56 max-h-[480px] object-contain drop-shadow-2xl transition duration-500 hover:scale-105 sm:w-72 lg:w-80"
                />

              </div>

            </div>

            {/* Content */}

            <div>

              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[2px] text-[#5b2bbf]">

                <FaSeedling size={12} />

                About Our Brand

              </span>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">

                Freshness You Can{" "}

                <span className="text-[#5b2bbf]">
                  Taste.
                </span>

              </h2>

              <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
                We believe that great drinks start with great ingredients.
                Our mission is to create refreshing fruit drinks that combine
                delicious flavour with a fresh and enjoyable experience.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                From carefully selected fruits to every bottle we prepare,
                we focus on quality, freshness and taste. Every sip is made
                to give you a simple moment of refreshment and happiness.
              </p>

              <div className="mt-7 space-y-4">

                {[
                  "Carefully selected ingredients",
                  "Delicious natural fruit flavours",
                  "Quality-focused production",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <FaCheckCircle className="text-[#5b2bbf]" />

                    <span className="text-sm font-semibold">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

              <Link
                to="/shop"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#5b2bbf] px-7 py-3.5 text-sm font-bold text-white transition hover:scale-105 hover:bg-[#45209a]"
              >
                Explore Products

                <FaArrowRight size={11} />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-[#faf8ff] py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-xs font-extrabold uppercase tracking-[2px] text-[#5b2bbf]">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Made For Fresh Moments
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              Everything we do is focused on delivering delicious taste,
              freshness and quality to our customers.
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-3xl bg-white p-7 text-center shadow-sm transition duration-300 hover:shadow-xl"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eee4ff] text-[#5b2bbf]">

                    <Icon size={23} />

                  </div>

                  <h3 className="mt-5 text-lg font-extrabold">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {benefit.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="px-5 py-20 sm:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#241044] px-6 py-14 text-center sm:rounded-[3rem] sm:px-12 lg:px-20">

            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#5b2bbf] opacity-40 blur-3xl" />

            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#5b2bbf] opacity-40 blur-3xl" />

            <div className="relative z-10">

              <span className="text-xs font-extrabold uppercase tracking-[2px] text-[#d9c4ff]">
                Taste The Difference
              </span>

              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">

                Ready For Something{" "}

                <span className="text-[#d9c4ff]">
                  Fresh?
                </span>

              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Discover our delicious fruit drinks and enjoy freshness,
                flavour and goodness in every sip.
              </p>

              <Link
                to="/shop"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#5b2bbf] shadow-xl transition hover:scale-105 hover:bg-[#f5efff]"
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
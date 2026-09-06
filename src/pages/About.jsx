
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

// ================= IMAGES =================
import blueberryHero from "../assets/blueberryHero.png";
import blueberryCan from "../assets/blueberry-can.png";
import kiwi2 from "../assets/kiwi2.png"
// =====================================================
// HERO SLIDES
// =====================================================

const heroSlides = [
  {
    id: 1,
    image: blueberryHero,
    badge: "BLUEBERRY COMPANY • PREMIUM • REFRESHING",
    title1: "Discover",
    highlight1: "Blueberry Freshness.",
    title2: "Experience",
    highlight2: "Our Brand.",
    description:
      "Meet Blueberry Company — a refreshing fruit drink brand created with delicious blueberry flavour, premium presentation and a passion for quality.",
  },
  {
    id: 2,
    image: kiwi2,
    badge: "OUR SIGNATURE PRODUCT • REAL TASTE",
    title1: "Fresh Taste",
    highlight1: "In Every Can.",
    title2: "Made For",
    highlight2: "Every Moment.",
    description:
      "Our signature blueberry drink brings a smooth, refreshing taste in a stylish can designed for modern everyday moments.",
  },
  {
    id: 3,
    image: blueberryHero,
    badge: "BLUEBERRY BRAND • QUALITY • GOODNESS",
    title1: "More Than",
    highlight1: "A Refreshment.",
    title2: "It's The",
    highlight2: "Blueberry Experience.",
    description:
      "From our carefully developed flavour to our recognizable can design, Blueberry Company is made to deliver a fresh and memorable experience.",
  },
];



const features = [
  {
    icon: FaLeaf,
    title: "Blueberry Goodness",
    description: "Refreshing blueberry flavour",
  },
  {
    icon: FaTruck,
    title: "Fast Delivery",
    description: "Fresh products to your door",
  },
  {
    icon: FaShieldAlt,
    title: "Quality Focused",
    description: "Quality you can trust",
  },
  {
    icon: FaHeart,
    title: "Customer Loved",
    description: "Created with our customers in mind",
  },
];

// =====================================================
// BENEFITS
// =====================================================

const benefits = [
  {
    icon: FaLeaf,
    title: "Refreshing",
    description:
      "A delicious blueberry-inspired taste created for a refreshing everyday experience.",
  },
  {
    icon: FaSeedling,
    title: "Carefully Crafted",
    description:
      "Our product concept focuses on flavour, freshness and a smooth drinking experience.",
  },
  {
    icon: FaShieldAlt,
    title: "Quality",
    description:
      "We believe consistent quality is one of the most important parts of a great brand.",
  },
  {
    icon: FaHeart,
    title: "Made With Care",
    description:
      "From the drink to the can design, every detail represents the Blueberry Company brand.",
  },
];

// =====================================================
// ABOUT PAGE
// =====================================================

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next");

  const currentHero = heroSlides[currentSlide];

  // ===================================================
  // NEXT SLIDE
  // ===================================================

  const nextSlide = () => {
    setDirection("next");

    setCurrentSlide((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  // ===================================================
  // PREVIOUS SLIDE
  // ===================================================

  const previousSlide = () => {
    setDirection("prev");

    setCurrentSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  // ===================================================
  // GO TO SLIDE
  // ===================================================

  const goToSlide = (index) => {
    if (index === currentSlide) return;

    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
  };

  return (
    <main className="overflow-hidden bg-white text-[#241044]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative flex
          h-[500px]
          w-full
          items-center
          overflow-hidden
          sm:h-[540px]
          md:h-[460px]
          lg:h-[580px]
          xl:h-[600px]
        "
      >

        {/* ===================================================
            HERO IMAGES
        =================================================== */}

        <div className="absolute inset-0 overflow-hidden">

          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;

            let position = "translate-x-full";

            if (isActive) {
              position = "translate-x-0";
            } else if (
              direction === "next" &&
              index ===
                (currentSlide === 0
                  ? heroSlides.length - 1
                  : currentSlide - 1)
            ) {
              position = "-translate-x-full";
            } else if (
              direction === "prev" &&
              index ===
                (currentSlide === heroSlides.length - 1
                  ? 0
                  : currentSlide + 1)
            ) {
              position = "translate-x-full";
            }

            return (
              <div
                key={slide.id}
                className={`
                  absolute inset-0
                  h-full w-full
                  transform
                  transition-transform
                  duration-700
                  ease-in-out
                  ${position}
                `}
              >

                {/* BACKGROUND IMAGE */}

                <img
                  src={slide.image}
                  alt={`Blueberry Company Banner ${slide.id}`}
                  className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                    object-center
                    sm:object-center
                    lg:object-right
                  "
                />

                {/* DARK OVERLAY */}

                <div
                  className="
                    absolute inset-0
                    bg-black/30
                    sm:bg-black/25
                    lg:bg-black/20
                  "
                />

                {/* DESKTOP LEFT GRADIENT */}

                <div
                  className="
                    absolute inset-0
                    hidden
                    lg:block
                    bg-gradient-to-r
                    from-[#241044]/90
                    via-[#241044]/50
                    to-transparent
                  "
                />

                {/* MOBILE GRADIENT */}

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#241044]/85
                    via-[#241044]/25
                    to-transparent
                    lg:hidden
                  "
                />

                {/* =================================================
                    EXTRA PRODUCT VISUAL
                    DESKTOP + MOBILE
                ================================================= */}

                {slide.id !== 2 && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-4
                      top-1/2
                      z-10
                      hidden
                      -translate-y-1/2
                      sm:right-8
                      md:right-12
                      md:block
                      lg:right-16
                      xl:right-24
                    "
                  >
                    <img
                      src={blueberryCan}
                      alt="Blueberry Company Product"
                      className="
                        h-auto
                        w-[150px]
                        object-contain
                        drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)]
                        transition
                        duration-500
                        md:w-[175px]
                        lg:w-[205px]
                        xl:w-[230px]
                      "
                    />
                  </div>
                )}

                {/* MOBILE PRODUCT */}

                {slide.id !== 2 && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-3
                      top-1/2
                      z-10
                      -translate-y-1/2
                      sm:right-8
                      md:hidden
                    "
                  >
                    <img
                      src={blueberryCan}
                      alt="Blueberry Company Product"
                      className="
                        w-[115px]
                        object-contain
                        drop-shadow-[0_20px_25px_rgba(0,0,0,0.35)]
                        sm:w-[135px]
                      "
                    />
                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* ===================================================
            HERO CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-20
            mx-auto
            flex
            h-full
            w-full
            max-w-7xl
            items-center
            px-5
            sm:px-7
            md:px-8
            lg:px-10
            xl:px-12
          "
        >

          <div
            className="
              flex
              w-full
              max-w-[620px]
              flex-col
              items-start
              justify-center
              py-8
              sm:py-10
              md:py-12
            "
          >

            {/* BADGE */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white/95
                px-4
                py-2
                shadow-lg
                backdrop-blur-sm
                sm:px-5
                sm:py-2.5
              "
            >
              <FaLeaf
                className="text-[#5b2bbf]"
                size={12}
              />

              <span
                className="
                  text-[8px]
                  font-extrabold
                  tracking-[1.5px]
                  text-[#5b2bbf]
                  sm:text-[10px]
                  sm:tracking-[2px]
                "
              >
                {currentHero.badge}
              </span>
            </div>

            {/* HEADING */}

            <h1
              className="
                mt-4
                max-w-[580px]
                text-[34px]
                font-extrabold
                leading-[0.98]
                text-white
                sm:mt-5
                sm:text-5xl
                md:text-6xl
                lg:text-[60px]
                xl:text-[64px]
              "
            >
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

            {/* DESCRIPTION */}

            <p
              className="
                mt-4
                max-w-[520px]
                text-[12px]
                leading-5
                text-white/90
                sm:mt-5
                sm:text-sm
                sm:leading-6
                md:text-base
              "
            >
              {currentHero.description}
            </p>

            {/* BUTTONS */}

            <div
              className="
                mt-5
                flex
                flex-wrap
                items-center
                gap-2
                sm:mt-6
                sm:gap-3
              "
            >

              <Link
                to="/shop"
                className="
                  inline-flex
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#5b2bbf]
                  px-5
                  py-2.5
                  text-[11px]
                  font-bold
                  text-white
                  shadow-xl
                  transition
                  duration-300
                  hover:scale-105
                  hover:bg-[#45209a]
                  sm:px-7
                  sm:py-3.5
                  sm:text-xs
                "
              >
                Explore Products
                <FaArrowRight size={10} />
              </Link>

              <a
                href="#about-story"
                className="
                  inline-flex
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-5
                  py-2.5
                  text-[11px]
                  font-bold
                  text-[#5b2bbf]
                  shadow-xl
                  transition
                  duration-300
                  hover:scale-105
                  hover:bg-[#f8f4ff]
                  sm:px-7
                  sm:py-3.5
                  sm:text-xs
                "
              >
                Our Story
              </a>

            </div>

            {/* RATING */}

            <div className="mt-5 flex items-center gap-3">

              <div className="flex items-center gap-1 text-[#f5b800]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={10}
                  />
                ))}
              </div>

              <span className="text-[10px] font-semibold text-white sm:text-xs">
                4.9/5 from happy customers
              </span>

            </div>

          </div>
        </div>

        {/* ===================================================
            SLIDER CONTROLS
        =================================================== */}

        <div
          className="
            absolute
            bottom-5
            left-0
            right-0
            z-30
            flex
            items-center
            justify-center
            gap-5
            px-5
            sm:bottom-6
            md:top-1/2
            md:bottom-auto
            md:-translate-y-1/2
            md:justify-between
            md:px-7
            lg:px-12
          "
        >

          {/* PREVIOUS */}

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="
              flex
              h-9
              w-9
              shrink-0
              cursor-pointer
              items-center
              justify-center
              rounded-full
              bg-white/90
              text-lg
              text-[#5b2bbf]
              shadow-lg
              transition
              duration-300
              hover:scale-110
              hover:bg-white
              md:h-11
              md:w-11
            "
          >
            ←
          </button>

          {/* MOBILE DOTS */}

          <div className="flex items-center gap-2 md:hidden">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`
                  cursor-pointer
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    index === currentSlide
                      ? "h-2 w-8 bg-white"
                      : "h-2 w-2 bg-white/50 hover:bg-white"
                  }
                `}
              />
            ))}
          </div>

          {/* NEXT */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              flex
              h-9
              w-9
              shrink-0
              cursor-pointer
              items-center
              justify-center
              rounded-full
              bg-white/90
              text-lg
              text-[#5b2bbf]
              shadow-lg
              transition
              duration-300
              hover:scale-110
              hover:bg-white
              md:h-11
              md:w-11
            "
          >
            →
          </button>

          {/* DESKTOP DOTS */}

          <div
            className="
              absolute
              left-1/2
              hidden
              -translate-x-1/2
              items-center
              gap-2
              md:flex
            "
          >
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`
                  cursor-pointer
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    index === currentSlide
                      ? "h-2 w-8 bg-white"
                      : "h-2 w-2 bg-white/50 hover:bg-white"
                  }
                `}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="border-b border-gray-100 bg-white">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 py-5 lg:py-7"
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

      {/* =====================================================
          ABOUT STORY
      ===================================================== */}

      <section
        id="about-story"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* PRODUCT IMAGE */}

            <div className="relative">

              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#e7d9ff] blur-2xl" />

              <div
                className="
                  relative
                  flex
                  min-h-[400px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[2.5rem]
                  bg-[#eee4ff]
                  sm:min-h-[500px]
                "
              >

                <div className="absolute h-[280px] w-[280px] rounded-full bg-white/50" />

                <img
                  src={blueberryCan}
                  alt="Blueberry Company Can"
                  className="
                    relative
                    z-10
                    max-h-[430px]
                    w-52
                    cursor-pointer
                    object-contain
                    drop-shadow-2xl
                    transition
                    duration-500
                    hover:scale-105
                    sm:w-72
                    lg:w-80
                  "
                />

                {/* PRODUCT BADGE */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    rounded-2xl
                    bg-white
                    px-4
                    py-3
                    shadow-xl
                    sm:left-7
                  "
                >

                  <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#5b2bbf]">
                    Blueberry Company
                  </p>

                  <p className="mt-1 text-sm font-extrabold">
                    Signature Product
                  </p>

                </div>

              </div>

            </div>

            {/* STORY CONTENT */}

            <div>

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[2px]
                  text-[#5b2bbf]
                "
              >
                <FaSeedling size={12} />
                About Blueberry Company
              </span>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">

                A Brand Built Around{" "}

                <span className="text-[#5b2bbf]">
                  Blueberry.
                </span>

              </h2>

              <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
                Blueberry Company is a modern fruit drink brand created to
                bring a delicious and refreshing blueberry experience to
                everyday life.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Our signature blueberry product combines refreshing taste
                with a clean, recognizable can design. We believe that a
                great product should taste good, look good and create a
                memorable experience.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                From our product concept to our packaging and customer
                experience, everything is connected to one simple idea:

                <strong className="text-[#5b2bbf]">
                  {" "}freshness you can enjoy.
                </strong>
              </p>

              {/* PRODUCT POINTS */}

              <div className="mt-7 space-y-4">

                {[
                  "Refreshing blueberry-inspired flavour",
                  "Premium and recognizable can design",
                  "Quality-focused product experience",
                  "A brand created for modern customers",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <FaCheckCircle className="shrink-0 text-[#5b2bbf]" />

                    <span className="text-sm font-semibold">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

              <Link
                to="/shop"
                className="
                  mt-8
                  inline-flex
                  cursor-pointer
                  items-center
                  gap-2
                  rounded-full
                  bg-[#5b2bbf]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:scale-105
                  hover:bg-[#45209a]
                "
              >
                View Our Products
                <FaArrowRight size={11} />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BRAND SECTION
      ===================================================== */}

      <section className="bg-[#faf8ff] py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* TEXT */}

            <div>

              <span className="text-xs font-extrabold uppercase tracking-[2px] text-[#5b2bbf]">
                Our Brand
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">

                Designed To Be{" "}

                <span className="text-[#5b2bbf]">
                  Recognized.
                </span>

              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                Blueberry Company is more than a fruit drink. Our can,
                colours, flavour and overall presentation are designed to
                create a unique identity that customers can recognize.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                We keep our brand clean, modern and refreshing so that every
                interaction with Blueberry Company feels simple and memorable.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white p-5 shadow-sm">

                  <h3 className="text-2xl font-black text-[#5b2bbf]">
                    4.9
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Customer Rating
                  </p>

                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">

                  <h3 className="text-2xl font-black text-[#5b2bbf]">
                    500+
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Happy Customers
                  </p>

                </div>

              </div>

            </div>

            {/* CAN IMAGE */}

            <div className="relative flex justify-center">

              <div
                className="
                  absolute
                  h-[300px]
                  w-[300px]
                  rounded-full
                  bg-[#e7dcff]
                  sm:h-[380px]
                  sm:w-[380px]
                "
              />

              <div
                className="
                  relative
                  z-10
                  rounded-[2.5rem]
                  bg-white
                  p-8
                  shadow-xl
                  sm:p-12
                "
              >

                <img
                  src={blueberryCan}
                  alt="Blueberry Company Product"
                  className="
                    w-52
                    cursor-pointer
                    object-contain
                    drop-shadow-2xl
                    sm:w-64
                  "
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-xs font-extrabold uppercase tracking-[2px] text-[#5b2bbf]">
              Why Blueberry Company
            </span>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">

              What Makes Our Brand{" "}

              <span className="text-[#5b2bbf]">
                Different?
              </span>

            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              We focus on the things that matter most — refreshing taste,
              quality, product presentation and customer satisfaction.
            </p>

          </div>

          {/* BENEFITS */}

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="
                    group
                    rounded-3xl
                    border
                    border-gray-100
                    bg-white
                    p-7
                    text-center
                    shadow-sm
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >

                  <div
                    className="
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#eee4ff]
                      text-[#5b2bbf]
                      transition
                      duration-300
                      group-hover:bg-[#5b2bbf]
                      group-hover:text-white
                    "
                  >
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

      {/* =====================================================
          PRODUCT EXPERIENCE
      ===================================================== */}

      <section className="bg-[#241044] py-20 text-white sm:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* IMAGE */}

            <div className="relative flex justify-center lg:order-2">

              <div
                className="
                  absolute
                  h-[300px]
                  w-[300px]
                  rounded-full
                  bg-[#5b2bbf]/40
                  blur-3xl
                  sm:h-[380px]
                  sm:w-[380px]
                "
              />

              <div
                className="
                  relative
                  z-10
                  rounded-[2.5rem]
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-sm
                  sm:p-12
                "
              >

                <img
                  src={blueberryCan}
                  alt="Blueberry Company Can"
                  className="
                    w-52
                    cursor-pointer
                    object-contain
                    drop-shadow-2xl
                    sm:w-64
                  "
                />

              </div>

            </div>

            {/* CONTENT */}

            <div className="lg:order-1">

              <span className="text-xs font-extrabold uppercase tracking-[2px] text-[#d9c4ff]">
                Our Product Experience
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">

                From The First Look

                <span className="text-[#d9c4ff]">
                  {" "}To The Last Sip.
                </span>

              </h2>

              <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
                We believe the product experience begins before the first
                sip. That's why Blueberry Company's flavour, can design and
                presentation are all part of one complete brand experience.
              </p>

              <div className="mt-8 space-y-5">

                {/* ITEM 1 */}

                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <FaLeaf />
                  </div>

                  <div>

                    <h3 className="font-bold">
                      Refreshing Blueberry Flavour
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      A fruity and refreshing experience designed for
                      everyday enjoyment.
                    </p>

                  </div>

                </div>

                {/* ITEM 2 */}

                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <FaShieldAlt />
                  </div>

                  <div>

                    <h3 className="font-bold">
                      Quality-Focused Brand
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      Quality and consistency remain at the centre of what
                      we do.
                    </p>

                  </div>

                </div>

                {/* ITEM 3 */}

                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <FaHeart />
                  </div>

                  <div>

                    <h3 className="font-bold">
                      Created For Customers
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      Our products are designed around enjoyable customer
                      experiences.
                    </p>

                  </div>

                </div>

              </div>

              <Link
                to="/shop"
                className="
                  mt-8
                  inline-flex
                  cursor-pointer
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-[#5b2bbf]
                  transition
                  hover:scale-105
                  hover:bg-[#f5efff]
                "
              >
                Discover Blueberry
                <FaArrowRight size={11} />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 py-20 sm:py-24">

        <div className="mx-auto max-w-7xl">

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              bg-[#241044]
              px-6
              py-14
              text-center
              sm:rounded-[3rem]
              sm:px-12
              lg:px-20
            "
          >

            {/* BACKGROUND GLOW */}

            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#5b2bbf] opacity-40 blur-3xl" />

            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#5b2bbf] opacity-40 blur-3xl" />

            <div className="relative z-10">

              <span className="text-xs font-extrabold uppercase tracking-[2px] text-[#d9c4ff]">
                Blueberry Company
              </span>

              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">

                Discover The{" "}

                <span className="text-[#d9c4ff]">
                  Blueberry Experience.
                </span>

              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Explore our signature blueberry product and discover a
                refreshing brand built around flavour, quality and memorable
                everyday moments.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                <Link
                  to="/shop"
                  className="
                    inline-flex
                    cursor-pointer
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-8
                    py-4
                    text-sm
                    font-extrabold
                    text-[#5b2bbf]
                    shadow-xl
                    transition
                    hover:scale-105
                    hover:bg-[#f5efff]
                  "
                >
                  Shop Blueberry Products
                  <FaArrowRight size={11} />
                </Link>

                <Link
                  to="/reviews"
                  className="
                    inline-flex
                    cursor-pointer
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-8
                    py-4
                    text-sm
                    font-extrabold
                    text-white
                    transition
                    hover:bg-white/20
                  "
                >
                  Customer Reviews

                  <FaStar
                    size={11}
                    className="text-[#f5b800]"
                  />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default About;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaStar,
  FaShoppingCart,
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
import food from "../assets/food.png"
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
// PRODUCTS
// =====================================================

const products = [
  {
    id: 1,
    name: "Blueberry Boost",
    category: "Blueberry",
    type: "new",
    price: "$4.99",
    oldPrice: "$6.99",
    image: blueberryCan,
    rating: "4.9",
    reviews: 24,
  },
  {
    id: 2,
    name: "Berry Fresh",
    category: "Berry Drinks",
    type: "new",
    price: "$5.49",
    oldPrice: "$7.49",
    image: blueberryCan,
    rating: "4.8",
    reviews: 31,
  },
  {
    id: 3,
    name: "Blueberry Fresh",
    category: "Natural Drinks",
    type: "top",
    price: "$4.49",
    oldPrice: "$5.99",
    image: blueberryCan,
    rating: "4.9",
    reviews: 42,
  },
  {
    id: 4,
    name: "Fresh Berry Mix",
    category: "Fruit Drinks",
    type: "top",
    price: "$5.99",
    oldPrice: "$7.99",
    image: blueberryCan,
    rating: "5.0",
    reviews: 56,
  },
  {
    id: 5,
    name: "Blueberry Natural",
    category: "Blueberry",
    type: "top",
    price: "$4.79",
    oldPrice: "$6.49",
    image: blueberryCan,
    rating: "4.9",
    reviews: 38,
  },
  {
    id: 6,
    name: "Berry Energy",
    category: "Fresh Juice",
    type: "new",
    price: "$5.29",
    oldPrice: "$6.99",
    image: blueberryCan,
    rating: "4.8",
    reviews: 29,
  },
];

// =====================================================
// CATEGORIES
// =====================================================

const categories = [
  {
    id: 1,
    name: "Strawberry",
    image: strawberryHero,
    link: "/shop?category=strawberry",
  },
  {
    id: 2,
    name: "Kiwi",
    image: kiwi2,
    link: "/shop?category=kiwi",
  },
  {
    id: 3,
    name: "Blueberry",
    image: blueberryHero,
    link: "/shop?category=blueberry",
  },
  {
    id: 4,
    name: "Fruit Drinks",
    image: food,
    link: "/shop?category=fruit-drinks",
  },
];



const ProductCard = ({ product }) => {
  return (
    <div className="group bg-[#faf8ff] rounded-3xl p-5 hover:shadow-xl transition duration-300">

      {/* IMAGE */}

      <div className="relative h-[300px] sm:h-[330px] bg-[#eee4ff] rounded-2xl flex items-center justify-center overflow-hidden">

        {/* Wishlist */}

        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-red-500 hover:scale-110 transition"
        >
          <FaHeart size={13} />
        </button>

        {/* Badge */}

        <span
          className={`absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full text-[9px] font-bold text-white ${
            product.type === "new"
              ? "bg-[#5b2bbf]"
              : "bg-[#241044]"
          }`}
        >
          {product.type === "new" ? "NEW" : "BEST SELLER"}
        </span>

        <img
          src={product.image}
          alt={product.name}
          className="w-48 sm:w-56 h-full object-contain drop-shadow-xl group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT */}

      <div className="pt-5">

        <p className="text-[10px] uppercase tracking-wider text-[#5b2bbf] font-bold">
          {product.category}
        </p>

        <h3 className="mt-2 text-lg font-bold text-[#241044]">
          {product.name}
        </h3>

        {/* Rating */}

        <div className="flex items-center gap-1 mt-2 text-[#f5b800]">

          <FaStar size={10} />
          <FaStar size={10} />
          <FaStar size={10} />
          <FaStar size={10} />
          <FaStar size={10} />

          <span className="text-[10px] text-gray-400 ml-1">
            {product.rating} ({product.reviews})
          </span>

        </div>

        {/* PRICE */}

        <div className="flex items-center justify-between mt-4">

          <div>

            <span className="text-lg font-extrabold text-[#241044]">
              {product.price}
            </span>

            <span className="ml-2 text-xs text-gray-400 line-through">
              {product.oldPrice}
            </span>

          </div>

          <Link
            to="/cart"
            aria-label="Add to cart"
            className="w-10 h-10 rounded-full bg-[#5b2bbf] text-white flex items-center justify-center hover:bg-[#45209a] hover:scale-105 transition"
          >
            <FaShoppingCart size={13} />
          </Link>

        </div>

      </div>
    </div>
  );
};

// =====================================================
// HOME
// =====================================================

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ===================================================
  // AUTO SLIDER
  // ===================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentHero = heroSlides[currentSlide];

  const newArrivals = products.filter(
    (product) => product.type === "new"
  );

  const topSelling = products.filter(
    (product) => product.type === "top"
  );

  return (
    <main className="bg-white overflow-hidden">

      {/* =====================================================
          HERO SLIDER
      ===================================================== */}

      <section className="relative w-full h-[650px] sm:h-[700px] overflow-hidden flex items-center">

        {/* BACKGROUND SLIDES */}

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

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-[#3d176d]/15" />

          </div>
        ))}

        {/* HERO CONTENT */}

        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-7 md:px-8 lg:px-10 xl:px-12">

          <div className="flex flex-col items-start justify-center w-full max-w-[620px] py-16">

            {/* BADGE */}

            <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg">

              <FaLeaf
                className="text-[#5b2bbf]"
                size={12}
              />

              <span className="text-[#5b2bbf] text-[8px] sm:text-[10px] font-extrabold tracking-[1.5px] sm:tracking-[2px] whitespace-nowrap">
                {currentHero.badge}
              </span>

            </div>

            {/* TITLE */}

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

            {/* DESCRIPTION */}

            <p className="mt-5 sm:mt-6 max-w-[540px] text-[13px] sm:text-sm md:text-base leading-6 sm:leading-7 text-white/90">
              {currentHero.description}
            </p>

            {/* BUTTONS */}

            <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3 mt-7">

              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 bg-[#5b2bbf] text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-[11px] sm:text-xs font-bold shadow-xl hover:bg-[#45209a] hover:scale-105 transition duration-300"
              >
                Shop Now
                <FaArrowRight size={10} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-white text-[#5b2bbf] px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-[11px] sm:text-xs font-bold shadow-xl hover:bg-[#f8f4ff] hover:scale-105 transition duration-300"
              >
                Discover More
              </Link>

            </div>

            {/* RATING */}

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
            NO SLIDE BUTTONS
        ===================================================== */}

        {/* DOT INDICATOR */}

        <div className="absolute z-30 bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">

          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`
                rounded-full transition-all duration-500
                ${
                  index === currentSlide
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/50"
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
          CATEGORIES
      ===================================================== */}

      <section className="py-16 sm:py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-[#5b2bbf] text-[10px] font-bold tracking-[3px] uppercase">
              Shop By Category
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#241044]">
              Explore Our Categories
            </h2>

            <p className="mt-4 text-sm text-gray-500 leading-7">
              Discover refreshing fruit drinks made for every taste and every moment.
            </p>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">

            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className="group relative h-[220px] sm:h-[270px] rounded-3xl overflow-hidden"
              >

                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

                <div className="absolute inset-x-0 bottom-0 p-5">

                  <h3 className="text-white text-lg sm:text-xl font-extrabold">
                    {category.name}
                  </h3>

                  <span className="inline-flex items-center gap-2 mt-2 text-white text-[10px] font-bold uppercase tracking-wider">
                    Shop Now
                    <FaArrowRight size={9} />
                  </span>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          NEW ARRIVALS
      ===================================================== */}

      <section className="bg-[#faf8ff] py-16 sm:py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">

            <div>

              <p className="text-[#5b2bbf] text-[10px] font-bold tracking-[3px] uppercase">
                New Arrivals
              </p>

              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#241044]">
                Freshly Added For You
              </h2>

              <p className="mt-3 text-sm text-gray-500">
                Discover our newest refreshing fruit drinks.
              </p>

            </div>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#5b2bbf] hover:gap-3 transition-all"
            >
              View All Products
              <FaArrowRight size={10} />
            </Link>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          TOP SELLING
      ===================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">

            <div>

              <p className="text-[#5b2bbf] text-[10px] font-bold tracking-[3px] uppercase">
                Top Selling
              </p>

              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#241044]">
                Customer Favorites
              </h2>

              <p className="mt-3 text-sm text-gray-500">
                Our most-loved fruit drinks chosen by happy customers.
              </p>

            </div>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#5b2bbf] hover:gap-3 transition-all"
            >
              Shop Best Sellers
              <FaArrowRight size={10} />
            </Link>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            {topSelling.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="bg-[#faf8ff] py-16 sm:py-20 lg:py-24">

        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* IMAGE */}

            <div className="relative flex justify-center order-2 lg:order-1 min-h-[350px] sm:min-h-[400px]">

              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#e7d9ff]" />

              <img
                src={blueberryCan}
                alt="Blueberry Boost"
                className="relative z-10 w-64 sm:w-72 lg:w-80 object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
              />

            </div>

            {/* CONTENT */}

            <div className="order-1 lg:order-2">

              <p className="text-[#5b2bbf] text-[10px] font-bold tracking-[3px] uppercase">
                About Us
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#241044] leading-tight">

                Good Drinks.
                <br />

                <span className="text-[#5b2bbf]">
                  Good Ingredients.
                </span>

              </h2>

              <p className="mt-5 text-sm sm:text-base leading-7 text-gray-600">
                We believe refreshing drinks should taste amazing and be made
                with ingredients you can trust.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600">
                That's why we create delicious fruit drinks packed with
                refreshing flavour and real goodness.
              </p>

              <div className="mt-7 space-y-4">

                <div className="flex items-center gap-3">

                  <FaCheckCircle className="text-[#5b2bbf]" />

                  <span className="text-sm font-medium text-gray-700">
                    Real fruit goodness
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <FaCheckCircle className="text-[#5b2bbf]" />

                  <span className="text-sm font-medium text-gray-700">
                    Carefully selected ingredients
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <FaCheckCircle className="text-[#5b2bbf]" />

                  <span className="text-sm font-medium text-gray-700">
                    Delicious refreshing taste
                  </span>

                </div>

              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 bg-[#5b2bbf] text-white px-7 py-3.5 rounded-full text-xs font-bold hover:bg-[#45209a] hover:scale-105 transition"
              >
                Learn More
                <FaArrowRight size={11} />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-[#5b2bbf] text-[10px] font-bold tracking-[3px] uppercase">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#241044]">
              Made With Goodness
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-500 leading-7">
              Everything we create is designed to deliver freshness,
              quality and a delicious fruit experience.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            {/* CARD 1 */}

            <div className="bg-[#faf8ff] rounded-3xl p-7 text-center hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 mx-auto rounded-full bg-[#eee4ff] flex items-center justify-center">

                <FaLeaf
                  className="text-[#5b2bbf]"
                  size={20}
                />

              </div>

              <h3 className="mt-5 text-base font-bold text-[#241044]">
                Natural Ingredients
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Carefully selected ingredients for a better fruit drink experience.
              </p>

            </div>

            {/* CARD 2 */}

            <div className="bg-[#faf8ff] rounded-3xl p-7 text-center hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 mx-auto rounded-full bg-[#eee4ff] flex items-center justify-center">

                <FaSeedling
                  className="text-[#5b2bbf]"
                  size={20}
                />

              </div>

              <h3 className="mt-5 text-base font-bold text-[#241044]">
                Fresh & Delicious
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Refreshing flavours made to make every sip enjoyable.
              </p>

            </div>

            {/* CARD 3 */}

            <div className="bg-[#faf8ff] rounded-3xl p-7 text-center hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 mx-auto rounded-full bg-[#eee4ff] flex items-center justify-center">

                <FaShieldAlt
                  className="text-[#5b2bbf]"
                  size={20}
                />

              </div>

              <h3 className="mt-5 text-base font-bold text-[#241044]">
                Quality First
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                We care about quality so you can enjoy every drink with confidence.
              </p>

            </div>

            {/* CARD 4 */}

            <div className="bg-[#faf8ff] rounded-3xl p-7 text-center hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 mx-auto rounded-full bg-[#eee4ff] flex items-center justify-center">

                <FaHeart
                  className="text-[#5b2bbf]"
                  size={20}
                />

              </div>

              <h3 className="mt-5 text-base font-bold text-[#241044]">
                Made With Love
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Every product is created with passion for great fruit drinks.
              </p>

            </div>

          </div>

        </div>

      </section>
 
 
      <section className="py-16 sm:py-20">

        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden bg-[#5b2bbf] rounded-3xl px-6 py-14 sm:px-12 sm:py-16 text-center">

            {/* DECORATIVE CIRCLES */}

            <div className="absolute -left-20 -top-20 w-52 h-52 rounded-full bg-[#6e3bd0]" />

            <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full bg-[#6e3bd0]" />

            <div className="relative z-10">

              <p className="text-purple-200 text-[10px] font-bold tracking-[3px] uppercase">
                Freshness Awaits
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Ready For A Fresh Sip?
              </h2>

              <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-purple-100">
                Discover your favourite fruit drink and make every moment
                a little more refreshing.
              </p>

              <Link
                to="/shop"
                className="inline-flex items-center gap-2 mt-7 bg-white text-[#5b2bbf] px-8 py-3.5 rounded-full text-xs font-bold hover:bg-purple-100 hover:scale-105 transition"
              >
                Explore Products
                <FaArrowRight size={11} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Home;
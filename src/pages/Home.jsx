import React from "react";
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
} from "react-icons/fa";

// ================= IMAGES =================
import herobg from "../assets/herobg.png";
import blueberryCan from "../assets/blueberry-can.png";


// ================= PRODUCTS =================
const products = [
  {
    id: 1,
    name: "Blueberry Boost",
    category: "Fresh Juice",
    price: "$4.99",
    oldPrice: "$6.99",
    image: blueberryCan,
  },
  {
    id: 2,
    name: "Berry Fresh",
    category: "Fruit Drink",
    price: "$5.49",
    oldPrice: "$7.49",
    image: blueberryCan,
  },
  {
    id: 3,
    name: "Blueberry Fresh",
    category: "Natural Drink",
    price: "$4.49",
    oldPrice: "$5.99",
    image: blueberryCan,
  },
];

const Home = () => {
  return (
    <main className="bg-white overflow-hidden">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
    <section
  className="
    relative
    w-full
    min-h-[620px]
    sm:min-h-[650px]
    md:min-h-[680px]
    lg:min-h-[560px]
    xl:min-h-[600px]
    flex
    items-center
    bg-cover
    bg-no-repeat
    bg-[position:65%_center]
    sm:bg-[position:65%_center]
    lg:bg-center
    h-[700px]
  "
        style={{
          backgroundImage: `url(${herobg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 bg-[#3d176d]/10" />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-7xl
            mx-auto
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
              flex-col
              items-start
              justify-center

              w-full
              max-w-[340px]

              sm:max-w-[480px]

              md:max-w-[540px]

              lg:max-w-[580px]

              xl:max-w-[620px]

              py-16
              sm:py-20
              md:py-24
              lg:py-24
              xl:py-28
            "
          >

            {/* =====================================================
                BADGE
            ====================================================== */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-white/95
                backdrop-blur-sm
                px-4
                sm:px-5
                py-2
                sm:py-2.5
                rounded-full
                shadow-lg
              "
            >
              <FaLeaf
                className="text-[#5b2bbf]"
                size={12}
              />

              <span
                className="
                  text-[#5b2bbf]
                  text-[8px]
                  sm:text-[10px]
                  font-extrabold
                  tracking-[1.5px]
                  sm:tracking-[2px]
                  whitespace-nowrap
                "
              >
                FRESH • NATURAL • DELICIOUS
              </span>
            </div>

            {/* =====================================================
                HEADING
            ====================================================== */}
            <h1
              className="
                mt-5
                sm:mt-6

                text-[40px]
                leading-[0.98]

                sm:text-5xl

                md:text-6xl

                lg:text-[64px]

                xl:text-[70px]

                font-extrabold
                text-white
              "
            >
              Taste The
              <br />

              <span className="text-[#d9c4ff]">
                Freshness.
              </span>

              <br />

              Feel The
              <br />

              <span className="text-[#d9c4ff]">
                Goodness.
              </span>
            </h1>

            {/* =====================================================
                DESCRIPTION
            ====================================================== */}
            <p
              className="
                mt-5
                sm:mt-6

                w-full
                max-w-[320px]

                sm:max-w-[460px]

                md:max-w-[500px]

                lg:max-w-[540px]

                text-[13px]
                sm:text-sm
                md:text-base
                lg:text-[16px]

                leading-6
                sm:leading-7

                text-white/90
              "
            >
              Refresh your day with delicious blueberry drinks
              made with real fruit goodness and carefully selected
              ingredients.
            </p>

            {/* =====================================================
                BUTTONS
            ====================================================== */}
            <div
              className="
                flex
                flex-row
                flex-wrap
                items-center

                gap-2
                sm:gap-3

                mt-7
                sm:mt-8
              "
            >
              {/* SHOP NOW */}
              <Link
                to="/shop"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  bg-[#5b2bbf]
                  text-white

                  px-5
                  sm:px-7

                  py-3
                  sm:py-3.5

                  rounded-full

                  text-[11px]
                  sm:text-xs

                  font-bold

                  shadow-xl

                  hover:bg-[#45209a]
                  hover:scale-105

                  transition
                  duration-300
                "
              >
                Shop Now
                <FaArrowRight size={10} />
              </Link>

              {/* DISCOVER */}
              <Link
                to="/about"
                className="
                  inline-flex
                  items-center
                  justify-center

                  bg-white
                  text-[#5b2bbf]

                  px-5
                  sm:px-7

                  py-3
                  sm:py-3.5

                  rounded-full

                  text-[11px]
                  sm:text-xs

                  font-bold

                  shadow-xl

                  hover:bg-[#f8f4ff]
                  hover:scale-105

                  transition
                  duration-300
                "
              >
                Discover More
              </Link>
            </div>

            {/* =====================================================
                RATING
            ====================================================== */}
            <div
              className="
                flex
                flex-row
                items-center
                gap-3

                mt-7
                sm:mt-8
              "
            >
              <div className="flex items-center gap-1 text-[#f5b800]">
                <FaStar size={11} />
                <FaStar size={11} />
                <FaStar size={11} />
                <FaStar size={11} />
                <FaStar size={11} />
              </div>

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  text-white
                  whitespace-nowrap
                "
              >
                4.9/5 from happy customers
              </span>
            </div>

          </div>
        </div>

        {/* Bottom Fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0

            h-14
            sm:h-16
            md:h-20

            bg-gradient-to-t
            from-black/20
            to-transparent
          "
        />
      </section>

      {/* =====================================================
          FEATURE BAR
      ====================================================== */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {/* Natural */}
            <div className="flex items-center gap-3 py-6 lg:py-7">
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#eee4ff]
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
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

            {/* Delivery */}
            <div className="flex items-center gap-3 py-6 lg:py-7">
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#eee4ff]
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
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
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#eee4ff]
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
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

            {/* Customers */}
            <div className="flex items-center gap-3 py-6 lg:py-7">
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#eee4ff]
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
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
          PRODUCTS
      ====================================================== */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-end
              sm:justify-between
              gap-5
            "
          >
            <div>
              <p
                className="
                  text-[#5b2bbf]
                  text-[10px]
                  font-bold
                  tracking-[3px]
                  uppercase
                "
              >
                Our Products
              </p>

              <h2
                className="
                  mt-2
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-extrabold
                  text-[#241044]
                "
              >
                Fresh Picks For You
              </h2>

              <p className="mt-3 text-sm text-gray-500">
                Discover our delicious range of refreshing drinks.
              </p>
            </div>

            <Link
              to="/shop"
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-bold
                text-[#5b2bbf]
                hover:gap-3
                transition-all
              "
            >
              View All Products
              <FaArrowRight size={10} />
            </Link>
          </div>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
              mt-10
            "
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="
                  group
                  bg-[#faf8ff]
                  rounded-3xl
                  p-5
                  hover:shadow-xl
                  transition
                  duration-300
                "
              >
                <div
                  className="
                    relative
                    h-[300px]
                    sm:h-[330px]
                    bg-[#eee4ff]
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                  "
                >
                  <button
                    type="button"
                    aria-label="Add to wishlist"
                    className="
                      absolute
                      top-4
                      right-4
                      z-20
                      w-9
                      h-9
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      text-gray-500
                      hover:text-red-500
                      transition
                    "
                  >
                    <FaHeart size={13} />
                  </button>

                  <span
                    className="
                      absolute
                      top-4
                      left-4
                      z-20
                      bg-[#5b2bbf]
                      text-white
                      px-3
                      py-1.5
                      rounded-full
                      text-[9px]
                      font-bold
                    "
                  >
                    NEW
                  </span>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-48
                      sm:w-56
                      h-full
                      object-contain
                      drop-shadow-xl
                      group-hover:scale-105
                      transition
                      duration-500
                    "
                  />
                </div>

                <div className="pt-5">
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-[#5b2bbf]
                      font-bold
                    "
                  >
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-[#241044]">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1 mt-2 text-[#f5b800]">
                    <FaStar size={10} />
                    <FaStar size={10} />
                    <FaStar size={10} />
                    <FaStar size={10} />
                    <FaStar size={10} />

                    <span className="text-[10px] text-gray-400 ml-1">
                      (24)
                    </span>
                  </div>

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
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-[#5b2bbf]
                        text-white
                        flex
                        items-center
                        justify-center
                        hover:bg-[#45209a]
                        hover:scale-105
                        transition
                      "
                    >
                      <FaShoppingCart size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section className="bg-[#faf8ff] py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-12
              lg:gap-16
              items-center
            "
          >

            {/* Image */}
            <div
              className="
                relative
                flex
                justify-center
                order-2
                lg:order-1
                min-h-[350px]
                sm:min-h-[400px]
              "
            >
              <div
                className="
                  absolute
                  w-72
                  h-72
                  sm:w-96
                  sm:h-96
                  rounded-full
                  bg-[#e7d9ff]
                "
              />

              <img
                src={blueberryCan}
                alt="About Blueberry Boost"
                className="
                  relative
                  z-10
                  w-64
                  rounded-xl
                  sm:w-72
                  lg:w-80
                  object-contain
                  drop-shadow-2xl
                  hover:scale-105
                  transition
                  duration-500
                "
              />
              
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">

              <p
                className="
                  text-[#5b2bbf]
                  text-[10px]
                  font-bold
                  tracking-[3px]
                  uppercase
                "
              >
                About Us
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
                Good Drinks.
                <br />

                <span className="text-[#5b2bbf]">
                  Good Ingredients.
                </span>
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-7 text-gray-600">
                We believe refreshing drinks should taste amazing
                and be made with ingredients you can trust.
              </p>

              <p className="mt-4 text-sm sm:text-base leading-7 text-gray-600">
                That's why we create delicious fruit drinks packed
                with refreshing flavour and real goodness.
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
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-8
                  bg-[#5b2bbf]
                  text-white
                  px-7
                  py-3.5
                  rounded-full
                  text-xs
                  font-bold
                  hover:bg-[#45209a]
                  hover:scale-105
                  transition
                "
              >
                Learn More
                <FaArrowRight size={11} />
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div
            className="
              relative
              overflow-hidden
              bg-[#5b2bbf]
              rounded-3xl
              px-6
              py-14
              sm:px-12
              sm:py-16
              text-center
            "
          >

            <div
              className="
                absolute
                -left-20
                -top-20
                w-52
                h-52
                rounded-full
                bg-[#6e3bd0]
              "
            />

            <div
              className="
                absolute
                -right-20
                -bottom-20
                w-60
                h-60
                rounded-full
                bg-[#6e3bd0]
              "
            />

            <div className="relative z-10">

              <p
                className="
                  text-purple-200
                  text-[10px]
                  font-bold
                  tracking-[3px]
                  uppercase
                "
              >
                Freshness Awaits
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-extrabold
                  text-white
                "
              >
                Ready For A Fresh Sip?
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  mx-auto
                  text-sm
                  sm:text-base
                  text-purple-100
                "
              >
                Discover your favourite blueberry drink and
                make every moment a little more refreshing.
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
                  px-8
                  py-3.5
                  rounded-full
                  text-xs
                  font-bold
                  hover:bg-purple-100
                  hover:scale-105
                  transition
                "
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
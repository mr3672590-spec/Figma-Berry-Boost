
import React, { useMemo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaSearch,
  FaEye,
  FaArrowRight,
  FaChevronRight,
} from "react-icons/fa";

// ================= IMAGES =================

import product1 from "../assets/products/product1.png";
import product2 from "../assets/products/product2.png";
import product3 from "../assets/products/product3.png";
import product4 from "../assets/products/product4.png";
import product5 from "../assets/products/product5.png";
import product6 from "../assets/products/product6.png";
import product7 from "../assets/products/product7.png";
import product8 from "../assets/products/product8.png";

// ================= PRODUCTS =================

const products = [
  {
    id: 1,
    name: "Blueberry Drink",
    category: "Drinks",
    price: 250,
    oldPrice: 300,
    rating: 5,
    sales: 98,
    isNew: true,
    image: product1,
  },
  {
    id: 2,
    name: "Fresh Blueberry Juice",
    category: "Drinks",
    price: 280,
    oldPrice: 350,
    rating: 4,
    sales: 86,
    isNew: true,
    image: product2,
  },
  {
    id: 3,
    name: "Blueberry Can",
    category: "Drinks",
    price: 180,
    oldPrice: 220,
    rating: 5,
    sales: 120,
    isNew: false,
    image: product3,
  },
  {
    id: 4,
    name: "Premium Berry Pack",
    category: "Fruits",
    price: 450,
    oldPrice: 500,
    rating: 4,
    sales: 76,
    isNew: true,
    image: product4,
  },
  {
    id: 5,
    name: "Fresh Blueberry",
    category: "Fruits",
    price: 550,
    oldPrice: 650,
    rating: 5,
    sales: 150,
    isNew: false,
    image: product5,
  },
  {
    id: 6,
    name: "Berry Smoothie",
    category: "Drinks",
    price: 320,
    oldPrice: 380,
    rating: 5,
    sales: 132,
    isNew: true,
    image: product6,
  },
  {
    id: 7,
    name: "Blueberry Jam",
    category: "Food",
    price: 350,
    oldPrice: 400,
    rating: 4,
    sales: 91,
    isNew: false,
    image: product7,
  },
  {
    id: 8,
    name: "Organic Berry Box",
    category: "Fruits",
    price: 600,
    oldPrice: 700,
    rating: 5,
    sales: 145,
    isNew: true,
    image: product8,
  },
];

// =====================================================
// PRODUCT CARD
// =====================================================

const ProductCard = ({ product }) => {
  return (
    <div
      className="
        group
        bg-white
        rounded-2xl
        overflow-hidden
        border
        border-gray-100
        hover:shadow-xl
        transition
        duration-300
      "
    >
      {/* IMAGE */}

      <div
        className="
          relative
          bg-gray-100
          h-72
          rounded-xl
          overflow-hidden
        "
      >
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full
            h-full
            object-contain
            p-5
            rounded-xl
            group-hover:scale-105
            transition
            duration-500
          "
        />

        {/* SALE */}

        {product.oldPrice > product.price && (
          <div
            className="
              absolute
              top-4
              left-4
              bg-red-500
              text-white
              text-xs
              font-bold
              px-3
              py-1.5
              rounded-full
            "
          >
            SALE
          </div>
        )}

        {/* NEW */}

        {product.isNew && (
          <div
            className="
              absolute
              top-4
              left-4
              bg-[#4d7cff]
              text-white
              text-xs
              font-bold
              px-3
              py-1.5
              rounded-full
            "
          >
            NEW
          </div>
        )}

        {/* WISHLIST */}

        <button
          type="button"
          className="
            absolute
            top-4
            right-4
            w-10
            h-10
            rounded-full
            bg-white
            cursor-pointer
            flex
            items-center
            justify-center
            text-gray-500
            hover:text-red-500
            shadow-md
            transition
          "
          aria-label="Add to wishlist"
        >
          <FaHeart />
        </button>

        {/* QUICK VIEW */}

        <Link
          to={`/product/${product.id}`}
          className="
            absolute
            bottom-4
            left-1/2
            -translate-x-1/2
            translate-y-14
            group-hover:translate-y-0
            opacity-0
            group-hover:opacity-100
            bg-white
            text-gray-800
            px-5
            py-2.5
            rounded-full
            flex
            items-center
            gap-2
            shadow-lg
            transition
            duration-300
            text-sm
            font-medium
            whitespace-nowrap
          "
        >
          <FaEye />
          Quick View
        </Link>
      </div>

      {/* PRODUCT INFO */}

      <div className="p-5">

        {/* CATEGORY */}

        <p
          className="
            text-xs
            uppercase
            tracking-wider
            text-[#4d7cff]
            font-semibold
            mb-2
          "
        >
          {product.category}
        </p>

        {/* NAME */}

        <Link to={`/product/${product.id}`}>
          <h3
            className="
              text-lg
              font-bold
              text-gray-900
              hover:text-[#4d7cff]
              transition
              line-clamp-1
            "
          >
            {product.name}
          </h3>
        </Link>

        {/* RATING */}

        <div className="flex items-center gap-1 mt-3">

          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={
                star <= product.rating
                  ? "text-yellow-400"
                  : "text-gray-200"
              }
              size={14}
            />
          ))}

          <span className="text-xs text-gray-400 ml-1">
            ({product.rating}.0)
          </span>

        </div>

        {/* PRICE */}

        <div className="flex items-center gap-3 mt-4">

          <span className="text-xl font-bold text-gray-900">
            ৳{product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ৳{product.oldPrice}
          </span>

        </div>

        {/* CART */}

        <Link
          to="/cart"
          className="
            mt-5
            w-full
            bg-[#4d7cff]
            hover:bg-[#315ee8]
            text-white
            py-3
            rounded-xl
            cursor-pointer
            flex
            items-center
            justify-center
            gap-2
            font-semibold
            transition
          "
        >
          <FaShoppingCart />
          Add to Cart
        </Link>

      </div>
    </div>
  );
};

// =====================================================
// SECTION TITLE
// =====================================================

const SectionTitle = ({ label, title, description }) => {
  return (
    <div className="text-center max-w-2xl mx-auto">

      <p className="text-[#4d7cff] font-semibold uppercase tracking-wider text-sm">
        {label}
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
        {title}
      </h2>

      {description && (
        <p className="text-gray-500 mt-3 leading-7">
          {description}
        </p>
      )}

    </div>
  );
};

// =====================================================
// SHOP
// =====================================================

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  // =====================================================
  // SCROLL TO TOP
  // =====================================================

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // =====================================================
  // CATEGORIES
  // =====================================================

  const categories = [
    {
      name: "All",
      title: "All Products",
      image: product1,
    },
    {
      name: "Drinks",
      title: "Fresh Drinks",
      image: product2,
    },
    {
      name: "Fruits",
      title: "Fresh Fruits",
      image: product5,
    },
    {
      name: "Food",
      title: "Delicious Food",
      image: product7,
    },
  ];

  // =====================================================
  // FILTER + SORT
  // =====================================================

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, sort]);

  // =====================================================
  // NEW ARRIVALS
  // =====================================================

  const newArrivals = products
    .filter((product) => product.isNew)
    .slice(0, 4);

  // =====================================================
  // TOP SELLING
  // =====================================================

  const topSelling = [...products]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 4);

  // =====================================================
  // RELATED PRODUCTS
  // =====================================================

  const relatedProducts = products
    .filter(
      (product) =>
        category !== "All" &&
        product.category === category
    )
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="bg-[#f4f8ff] py-16">

        <div className="max-w-7xl mx-auto px-4 text-center">

          <p className="text-[#4d7cff] font-semibold uppercase tracking-wider mb-2">
            Our Products
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Shop
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover our fresh, delicious and premium quality products.
          </p>

          <div className="mt-5 text-sm text-gray-500">

            <Link
              to="/"
              className="hover:text-[#4d7cff] transition"
            >
              Home
            </Link>

            <span className="mx-2">/</span>

            <span className="text-gray-800 font-medium">
              Shop
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <SectionTitle
            label="Browse Categories"
            title="Shop By Category"
            description="Choose your favourite category and discover our best products."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">

            {categories.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => {
                  setCategory(item.name);
                  window.scrollTo({
                    top: 600,
                    behavior: "smooth",
                  });
                }}
                className={`
                  group
                  relative
                  h-44
                  sm:h-52
                  rounded-2xl
                  overflow-hidden
                  cursor-pointer
                  text-left
                  ${
                    category === item.name
                      ? "ring-4 ring-[#4d7cff]"
                      : ""
                  }
                `}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-500
                  "
                />

                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition" />

                <div className="relative z-10 h-full flex flex-col justify-end p-5">

                  <h3 className="text-white font-bold text-lg sm:text-xl">
                    {item.title}
                  </h3>

                  <span className="text-white/80 text-xs mt-1 flex items-center gap-1">
                    Explore
                    <FaArrowRight size={9} />
                  </span>

                </div>

              </button>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          NEW ARRIVALS
      ===================================================== */}

      <section className="py-16 sm:py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4">

          <SectionTitle
            label="Just Arrived"
            title="New Arrivals"
            description="Check out our newest products, freshly added to the collection."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

          <div className="text-center mt-10">

            <button
              type="button"
              onClick={() => {
                setCategory("All");
                setSearch("");
                window.scrollTo({
                  top: 1150,
                  behavior: "smooth",
                });
              }}
              className="
                inline-flex
                items-center
                gap-2
                px-7
                py-3.5
                rounded-full
                bg-[#4d7cff]
                text-white
                font-semibold
                hover:bg-[#315ee8]
                transition
              "
            >
              View All Products
              <FaArrowRight size={11} />
            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          TOP SELLING
      ===================================================== */}

      <section className="py-16 sm:py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <SectionTitle
            label="Customer Favourites"
            title="Top Selling Products"
            description="Our most popular products loved by customers."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

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
          SHOP CONTENT
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-4 py-16">

        {/* TITLE */}

        <SectionTitle
          label="Our Collection"
          title="All Products"
          description="Explore our complete collection of fresh and premium quality products."
        />

        {/* =================================================
            FILTERS
        ================================================= */}

        <div className="flex flex-col lg:flex-row gap-5 justify-between mt-12 mb-10">

          {/* SEARCH */}

          <div className="relative w-full lg:w-96">

            <FaSearch
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                pl-11
                pr-4
                py-3.5
                rounded-xl
                border
                border-gray-200
                bg-white
                outline-none
                focus:border-[#4d7cff]
                focus:ring-2
                focus:ring-[#dfe7ff]
                transition
              "
            />

          </div>

          {/* CATEGORY */}

          <div className="flex flex-wrap gap-2">

            {["All", "Drinks", "Fruits", "Food"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`
                    px-5
                    py-3
                    rounded-xl
                    cursor-pointer
                    font-medium
                    transition
                    ${
                      category === item
                        ? "bg-[#4d7cff] text-white"
                        : "bg-white border border-gray-200 text-gray-600 hover:border-[#4d7cff] hover:text-[#4d7cff]"
                    }
                  `}
                >
                  {item}
                </button>
              )
            )}

          </div>

          {/* SORT */}

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="
              px-5
              py-3
              rounded-xl
              border
              border-gray-200
              bg-white
              outline-none
              cursor-pointer
            "
          >

            <option value="default">
              Default Sorting
            </option>

            <option value="low">
              Price: Low to High
            </option>

            <option value="high">
              Price: High to Low
            </option>

            <option value="rating">
              Top Rated
            </option>

          </select>

        </div>

        {/* =================================================
            RESULT COUNT
        ================================================= */}

        <div className="flex justify-between items-center mb-7">

          <p className="text-gray-500">

            Showing{" "}

            <span className="font-semibold text-gray-900">
              {filteredProducts.length}
            </span>{" "}

            products

          </p>

          <p className="hidden md:block text-gray-400 text-sm">
            Premium quality products
          </p>

        </div>

        {/* =================================================
            PRODUCTS
        ================================================= */}

        {filteredProducts.length > 0 ? (

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-6
            "
          >

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          /* =================================================
             NO PRODUCT
          ================================================= */

          <div
            className="
              bg-white
              rounded-2xl
              py-20
              text-center
              border
              border-gray-100
            "
          >

            <div className="text-5xl mb-5">
              🔍
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              No Products Found
            </h3>

            <p className="text-gray-500 mt-2">
              Try searching with a different keyword or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
                setSort("default");
              }}
              className="
                mt-6
                px-6
                py-3
                bg-[#4d7cff]
                text-white
                rounded-xl
                font-medium
                hover:bg-[#315ee8]
                transition
              "
            >
              Clear Filters
            </button>

          </div>

        )}

      </section>

      {/* =====================================================
          RELATED PRODUCTS
      ===================================================== */}

      {relatedProducts.length > 0 && (

        <section className="py-16 sm:py-20 bg-white">

          <div className="max-w-7xl mx-auto px-4">

            <div className="flex items-end justify-between gap-4 mb-10">

              <div>

                <p className="text-[#4d7cff] font-semibold uppercase tracking-wider text-sm">
                  You May Also Like
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Related Products
                </h2>

              </div>

              <button
                type="button"
                onClick={() => setCategory("All")}
                className="
                  hidden
                  sm:flex
                  items-center
                  gap-2
                  text-[#4d7cff]
                  font-semibold
                  hover:gap-3
                  transition
                "
              >
                View All
                <FaChevronRight size={11} />
              </button>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {relatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="py-20 px-5">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#101a3a] px-6 py-14 sm:px-12 lg:px-20 text-center">

            <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#4d7cff] rounded-full blur-3xl opacity-30" />

            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#4d7cff] rounded-full blur-3xl opacity-30" />

            <div className="relative z-10">

              <p className="text-[#9eb5ff] text-xs font-bold tracking-[2px] uppercase">
                Fresh • Delicious • Premium
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Find Your Favourite
                <span className="text-[#9eb5ff]">
                  {" "}Product
                </span>
              </h2>

              <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-white/70 leading-7">
                Explore our collection and discover something delicious
                for every moment.
              </p>

              <button
                type="button"
                onClick={() => {
                  setCategory("All");
                  setSearch("");
                  window.scrollTo({
                    top: 1100,
                    behavior: "smooth",
                  });
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-8
                  bg-white
                  text-[#315ee8]
                  px-8
                  py-4
                  rounded-full
                  text-sm
                  font-extrabold
                  hover:bg-[#f4f7ff]
                  hover:scale-105
                  transition
                  shadow-xl
                "
              >
                Shop Now
                <FaArrowRight size={11} />
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Shop;


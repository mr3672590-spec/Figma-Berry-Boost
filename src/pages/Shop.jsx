import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaSearch,
  FaEye,
  FaArrowRight,
  FaChevronRight,
  FaCheck,
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

import pepsi from "../assets/pepsi.png";
import force from "../assets/force.png";
import mojo from "../assets/mojo.png";
import redbull from "../assets/redbull.png";
import sparking from "../assets/sparking.png";
import sprit from "../assets/sprit.png";
import tiger from "../assets/tiger.png";

// ================= PRODUCT DATA =================

const products = [
  {
    id: 1,
    name: "Blueberry Drink",
    category: "Drinks",
    price: 250,
    oldPrice: 300,
    rating: 5,
    sales: 98,
    image: product1,
    isNew: true,
    future: false,
  },
  {
    id: 2,
    name: "Fresh Blueberry Juice",
    category: "Drinks",
    price: 280,
    oldPrice: 350,
    rating: 4,
    sales: 86,
    image: product2,
    isNew: true,
    future: false,
  },
  {
    id: 3,
    name: "Blueberry Can",
    category: "Drinks",
    price: 180,
    oldPrice: 220,
    rating: 5,
    sales: 120,
    image: product3,
    isNew: false,
    future: false,
  },
  {
    id: 4,
    name: "Premium Berry Pack",
    category: "Fruits",
    price: 450,
    oldPrice: 500,
    rating: 4,
    sales: 76,
    image: product4,
    isNew: true,
    future: false,
  },
  {
    id: 5,
    name: "Fresh Blueberry",
    category: "Fruits",
    price: 550,
    oldPrice: 650,
    rating: 5,
    sales: 150,
    image: product5,
    isNew: false,
    future: false,
  },
  {
    id: 6,
    name: "Berry Smoothie",
    category: "Drinks",
    price: 320,
    oldPrice: 380,
    rating: 5,
    sales: 132,
    image: product6,
    isNew: true,
    future: false,
  },
  {
    id: 7,
    name: "Blueberry Jam",
    category: "Food",
    price: 350,
    oldPrice: 400,
    rating: 4,
    sales: 91,
    image: product7,
    isNew: false,
    future: false,
  },
  {
    id: 8,
    name: "Organic Berry Box",
    category: "Fruits",
    price: 600,
    oldPrice: 700,
    rating: 5,
    sales: 145,
    image: product8,
    isNew: true,
    future: false,
  },
  {
    id: 9,
    name: "Pepsi",
    category: "Drinks",
    price: 80,
    oldPrice: 100,
    rating: 5,
    sales: 0,
    image: pepsi,
    isNew: false,
    future: true,
  },
  {
    id: 10,
    name: "Force Energy Drink",
    category: "Drinks",
    price: 120,
    oldPrice: 150,
    rating: 5,
    sales: 0,
    image: force,
    isNew: false,
    future: true,
  },
  {
    id: 11,
    name: "Mojo",
    category: "Drinks",
    price: 50,
    oldPrice: 60,
    rating: 4,
    sales: 0,
    image: mojo,
    isNew: false,
    future: true,
  },
  {
    id: 12,
    name: "Red Bull",
    category: "Drinks",
    price: 350,
    oldPrice: 400,
    rating: 5,
    sales: 0,
    image: redbull,
    isNew: false,
    future: true,
  },
  {
    id: 13,
    name: "Sparkling Drink",
    category: "Drinks",
    price: 100,
    oldPrice: 120,
    rating: 4,
    sales: 0,
    image: sparking,
    isNew: false,
    future: true,
  },
  {
    id: 14,
    name: "Sprite",
    category: "Drinks",
    price: 50,
    oldPrice: 60,
    rating: 5,
    sales: 0,
    image: sprit,
    isNew: false,
    future: true,
  },
  {
    id: 15,
    name: "Tiger Energy Drink",
    category: "Drinks",
    price: 100,
    oldPrice: 120,
    rating: 5,
    sales: 0,
    image: tiger,
    isNew: false,
    future: true,
  },
];

// ================= SECTION HEADING =================

const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="mb-7 text-center">
      <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-green-600">
        {eyebrow}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          {description}
        </p>
      )}
    </div>
  );
};

// ================= PRODUCT CARD =================

const ProductCard = ({ product, dark = false }) => {
  return (
    <div
      className={`group overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
        dark
          ? "border-gray-700 bg-gray-800 hover:border-green-500 hover:shadow-xl"
          : "border-gray-100 bg-white hover:border-green-100 hover:shadow-lg"
      }`}
    >
      {/* Image */}

      <div
        className={`relative flex h-48 items-center justify-center overflow-hidden md:h-52 ${
          dark ? "bg-gray-700" : "bg-gray-50"
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105"
        />

        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-green-600 px-2.5 py-1 text-[10px] font-bold text-white">
            NEW
          </span>
        )}

        {product.future && (
          <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-2.5 py-1 text-[10px] font-bold text-white">
            SOON
          </span>
        )}

        <button
          className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full shadow-sm transition ${
            dark
              ? "bg-gray-800 text-gray-300 hover:bg-green-600 hover:text-white"
              : "bg-white text-gray-500 hover:bg-green-600 hover:text-white"
          }`}
        >
          <FaHeart className="text-xs" />
        </button>

        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-black/60 py-2.5 transition duration-300 group-hover:translate-y-0">
          <button className="flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-gray-800 hover:bg-green-600 hover:text-white">
            <FaEye />
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}

      <div className="p-3.5">
        <p
          className={`mb-1 text-[10px] font-bold uppercase tracking-wider ${
            dark ? "text-green-400" : "text-green-600"
          }`}
        >
          {product.category}
        </p>

        <h3
          className={`truncate text-sm font-bold ${
            dark ? "text-white" : "text-gray-900"
          }`}
        >
          {product.name}
        </h3>

        {/* Rating */}

        <div className="mt-1.5 flex items-center gap-1">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`text-[10px] ${
                  star <= product.rating
                    ? "text-yellow-400"
                    : dark
                    ? "text-gray-600"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <span
            className={`text-[10px] ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            ({product.rating}.0)
          </span>
        </div>

        {/* Price */}

        <div className="mt-2 flex items-center gap-2">
          <span
            className={`text-base font-extrabold ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            ৳{product.price}
          </span>

          <span
            className={`text-xs line-through ${
              dark ? "text-gray-500" : "text-gray-400"
            }`}
          >
            ৳{product.oldPrice}
          </span>
        </div>

        {/* Button */}

        <button
          className={`mt-3 flex w-full items-center justify-center gap-2 rounded-lg py-2 text-xs font-bold transition ${
            dark
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-900 text-white hover:bg-green-600"
          }`}
        >
          <FaShoppingCart className="text-xs" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// ================= SHOP =================

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  // ================= NEW ARRIVALS =================

  const newArrivals = useMemo(() => {
    return products.filter((product) => product.isNew);
  }, []);

  // ================= TOP SELLING =================

  const topSelling = useMemo(() => {
    return [...products]
      .filter((product) => !product.future)
      .sort((a, b) => b.sales - a.sales)
      .slice(0, 4);
  }, []);

  // ================= FUTURE COLLECTION =================

  const futureCollection = useMemo(() => {
    return products.filter((product) => product.future);
  }, []);

  // ================= FILTERED PRODUCTS =================

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchTerm.trim() !== "") {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOption === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortOption === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortOption === "popular") {
      result.sort((a, b) => b.sales - a.sales);
    }

    return result;
  }, [selectedCategory, searchTerm, sortOption]);

  // ================= CATEGORIES =================

  const categories = [
    {
      name: "All",
      image: product1,
      count: products.length,
    },
    {
      name: "Drinks",
      image: pepsi,
      count: products.filter((p) => p.category === "Drinks").length,
    },
    {
      name: "Fruits",
      image: product5,
      count: products.filter((p) => p.category === "Fruits").length,
    },
    {
      name: "Food",
      image: product7,
      count: products.filter((p) => p.category === "Food").length,
    },
  ];

  // ================= RELATED PRODUCTS =================

  const relatedProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products.slice(0, 4);
    }

    return products
      .filter((product) => product.category === selectedCategory)
      .slice(0, 4);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#f8f9f7] text-gray-900">
      {/* ================= HERO ================= */}

      <section className="px-4 py-10 md:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-7 overflow-hidden rounded-2xl bg-white px-6 py-8 shadow-sm md:grid-cols-2 md:px-10 md:py-10">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-green-700">
              <FaCheck />
              Fresh & Premium
            </span>

            <h1 className="max-w-xl text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
              Fresh Products,
              <span className="text-green-600"> Better Choices.</span>
            </h1>

            <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500">
              Discover our collection of fresh drinks, fruits, food and
              upcoming products selected for quality and great taste.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#all-products"
                className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-green-700"
              >
                Shop Now
                <FaArrowRight />
              </a>

              <a
                href="#future"
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-xs font-bold text-gray-700 transition hover:border-green-500 hover:text-green-600"
              >
                Future Collection
                <FaChevronRight />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex h-[250px] w-full max-w-md items-center justify-center overflow-hidden rounded-xl bg-gray-50 md:h-[300px]">
              <img
                src={product1}
                alt="Fresh Products"
                className="h-full w-full object-contain p-5 transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}

      <section className="px-4 py-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Shop By Category"
            title="Explore Our Categories"
            description="Choose your favorite category and discover quality products."
          />

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`group overflow-hidden rounded-xl border bg-white text-left transition hover:-translate-y-1 hover:shadow-md ${
                  selectedCategory === category.name
                    ? "border-green-500 ring-1 ring-green-500"
                    : "border-gray-100"
                }`}
              >
                <div className="flex h-24 items-center justify-center bg-gray-50 md:h-28">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-gray-900">
                      {category.name}
                    </h3>

                    <FaChevronRight className="text-[10px] text-green-600" />
                  </div>

                  <p className="mt-0.5 text-[10px] text-gray-500">
                    {category.count} Products
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEW ARRIVALS ================= */}

      <section className="px-4 py-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Fresh In"
            title="New Arrivals"
            description="Check out our latest products added to the collection."
          />

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOP SELLING ================= */}

      <section className="bg-white px-4 py-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Customer Favorites"
            title="Top Selling Products"
            description="Our most popular products loved by customers."
          />

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {topSelling.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FUTURE COLLECTION ================= */}

      <section
        id="future"
        className="bg-gray-900 px-4 py-10 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 text-center">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-green-400">
              Coming Soon
            </p>

            <h2 className="text-2xl font-extrabold md:text-3xl">
              Future Collection
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-400">
              Exciting products are coming soon. Stay connected and be the
              first to discover them.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {futureCollection.map((product) => (
              <ProductCard key={product.id} product={product} dark />
            ))}
          </div>
        </div>
      </section>

      {/* ================= ALL PRODUCTS ================= */}

      <section id="all-products" className="px-4 py-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Complete Collection"
            title="All Products"
            description="Browse our complete collection and find something you love."
          />

          {/* Search + Sort */}

          <div className="mb-6 flex flex-col gap-3 rounded-xl bg-white p-3 shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-sm">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400" />

              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-xs outline-none transition focus:border-green-500 focus:bg-white"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["All", "Drinks", "Fruits", "Food"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-lg px-3 py-2 text-xs font-bold transition ${
                    selectedCategory === category
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600"
                  }`}
                >
                  {category}
                </button>
              ))}

              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-600 outline-none focus:border-green-500"
              >
                <option value="default">Sort By</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-white px-5 py-12 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <FaSearch className="text-gray-400" />
              </div>

              <h3 className="mt-3 text-base font-bold text-gray-900">
                No Products Found
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Try searching with a different product name.
              </p>

              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4 rounded-lg bg-green-600 px-4 py-2 text-xs font-bold text-white hover:bg-green-700"
              >
                Show All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= RELATED PRODUCTS ================= */}

      <section className="bg-white px-4 py-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="You May Also Like"
            title="Related Products"
            description="More products you may want to explore."
          />

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="px-4 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 rounded-2xl bg-green-600 px-6 py-8 text-center md:flex-row md:px-10 md:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white">
              Ready to Shop Fresh?
            </h2>

            <p className="mt-1.5 text-sm text-green-50">
              Explore our collection and find your favorite products today.
            </p>
          </div>

          <Link
            to="/"
            className="flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-bold text-green-700 transition hover:bg-gray-100"
          >
            Back to Home
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Shop;
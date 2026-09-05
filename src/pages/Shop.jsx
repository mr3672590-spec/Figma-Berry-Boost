import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    image: product1,
    isNew: true,
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
    future: true,
  },
];

// ================= PRODUCT CARD =================

const ProductCard = ({ product, dark = false }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    try {
      const savedCart = localStorage.getItem("cart");

      let cart = [];

      if (savedCart) {
        cart = JSON.parse(savedCart);
      }

      const existingProduct = cart.find(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existingProduct) {
        updatedCart = cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: Number(item.quantity || 0) + 1,
              }
            : item
        );
      } else {
        updatedCart = [
          ...cart,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      navigate("/cart");

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    } catch (error) {
      console.error("Add to cart error:", error);
    }
  };

  return (
    <div
      className={`group overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        dark
          ? "border-white/10 bg-[#1a1a1a]"
          : "border-gray-100 bg-white"
      }`}
    >
      {/* IMAGE */}

      <div
        className={`relative flex h-64 items-center justify-center overflow-hidden ${
          dark ? "bg-[#222]" : "bg-[#f7f7f5]"
        }`}
      >
        <Link
          to={`/product/${product.id}`}
          className="block h-full w-full cursor-pointer"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full cursor-pointer object-contain p-5 transition duration-500 group-hover:scale-105"
          />
        </Link>

        {/* BADGES */}

        {product.isNew && (
          <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-green-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            New
          </span>
        )}

        {product.future && (
          <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
            Future
          </span>
        )}

        {/* ACTION BUTTONS */}

        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <Link
            to={`/product/${product.id}`}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-gray-700 opacity-0 shadow-md transition duration-300 hover:bg-green-600 hover:text-white group-hover:opacity-100"
          >
            <FaEye size={13} />
          </Link>

          <button
            type="button"
            onClick={() => {}}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-gray-700 opacity-0 shadow-md transition duration-300 hover:bg-red-500 hover:text-white group-hover:opacity-100"
          >
            <FaHeart size={13} />
          </button>
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-5">
        <p
          className={`text-[11px] font-bold uppercase tracking-wider ${
            dark ? "text-green-400" : "text-green-600"
          }`}
        >
          {product.category}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="cursor-pointer"
        >
          <h3
            className={`mt-2 line-clamp-1 cursor-pointer text-lg font-black transition ${
              dark
                ? "text-white hover:text-green-400"
                : "text-gray-900 hover:text-green-600"
            }`}
          >
            {product.name}
          </h3>
        </Link>

        {/* RATING */}

        <div className="mt-3 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={12}
              className={
                star <= product.rating
                  ? "text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}

          <span
            className={`ml-1 text-xs ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            ({product.rating}.0)
          </span>
        </div>

        {/* PRICE */}

        <div className="mt-4">
          <span
            className={`text-xl font-black ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            ৳{product.price}
          </span>

          <span className="ml-2 text-xs text-gray-400 line-through">
            ৳{product.oldPrice}
          </span>
        </div>

        {/* ADD TO CART */}

        <button
          type="button"
          onClick={handleAddToCart}
          className={`mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${
            dark
              ? "bg-white text-black hover:bg-green-500 hover:text-white"
              : "bg-gray-900 text-white hover:bg-green-600"
          }`}
        >
          <FaShoppingCart size={14} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// ================= SHOP PAGE =================

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  // ================= CATEGORIES =================

  const categories = [
    {
      name: "All",
      title: "All Products",
      subtitle: "Complete Collection",
      image: product1,
    },
    {
      name: "Drinks",
      title: "Drinks",
      subtitle: "Fresh & Refreshing",
      image: product2,
    },
    {
      name: "Fruits",
      title: "Fruits",
      subtitle: "Fresh & Organic",
      image: product5,
    },
    {
      name: "Food",
      title: "Food",
      subtitle: "Delicious Choice",
      image: product7,
    },
  ];

  // ================= CATEGORY PRODUCTS =================

  const categoryProducts = useMemo(() => {
    if (category === "All") {
      return products
        .filter((product) => !product.future)
        .slice(0, 8);
    }

    return products
      .filter(
        (product) =>
          product.category === category &&
          !product.future
      )
      .slice(0, 8);
  }, [category]);

  // ================= RELATED PRODUCTS =================

  const relatedProducts = useMemo(() => {
    let result;

    if (category === "All") {
      result = products.filter(
        (product) => !product.future
      );
    } else {
      result = products.filter(
        (product) =>
          product.category === category &&
          !product.future
      );
    }

    return [...result]
      .sort((a, b) => {
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }

        return b.sales - a.sales;
      })
      .slice(0, 4);
  }, [category]);

  // ================= FILTERED PRODUCTS =================

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "All") {
      result = result.filter(
        (product) =>
          product.category === category
      );
    }

    if (search.trim() !== "") {
      result = result.filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "sales") {
      result.sort((a, b) => b.sales - a.sales);
    }

    return result;
  }, [search, category, sort]);

  // ================= OTHER PRODUCTS =================

  const newArrivals = products.filter(
    (product) => product.isNew
  );

  const topSelling = [...products]
    .filter((product) => !product.future)
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 8);

  const futureCollection = products.filter(
    (product) => product.future
  );

  // ================= CATEGORY CLICK =================

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
    setSearch("");

    setTimeout(() => {
      const section =
        document.getElementById("category-products");

      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  // ================= RESET =================

  const handleReset = () => {
    setSearch("");
    setCategory("All");
    setSort("default");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <main className="min-h-screen bg-[#f8f9f7]">

      {/* ==================================================
          CATEGORIES
      ================================================== */}

      <section
        id="categories"
        className="border-b border-gray-100 bg-white px-4 py-14"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">
              Explore Categories
            </p>

            <h1 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">
              Shop By Category
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500">
              Explore our carefully selected products by
              category and find exactly what you need.
            </p>
          </div>

          {/* CATEGORY CARDS */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {categories.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() =>
                  handleCategoryClick(item.name)
                }
                className={`group cursor-pointer overflow-hidden rounded-3xl border text-left transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  category === item.name
                    ? "border-green-500 shadow-xl"
                    : "border-gray-100"
                }`}
              >

                {/* CATEGORY IMAGE */}

                <div className="relative h-72 overflow-hidden bg-[#f7f7f5]">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full cursor-pointer object-contain p-5 transition duration-500 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  {category === item.name && (
                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white shadow-lg">
                      <FaCheck size={13} />
                    </div>
                  )}

                  <div className="absolute bottom-5 left-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-green-300">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-1 text-2xl font-black text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* CATEGORY FOOTER */}

                <div className="flex items-center justify-between bg-white p-5">

                  <div>
                    <p className="text-xs text-gray-400">
                      Explore
                    </p>

                    <p className="mt-1 font-bold text-gray-900">
                      {item.name === "All"
                        ? "Complete Collection"
                        : `Fresh ${item.name}`}
                    </p>
                  </div>

                  <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-700 transition group-hover:bg-green-600 group-hover:text-white">
                    <FaArrowRight size={13} />
                  </span>

                </div>
              </button>
            ))}

          </div>
        </div>
      </section>

      {/* ==================================================
          CATEGORY PRODUCTS
      ================================================== */}

      <section
        id="category-products"
        className="bg-[#f8f9f7] px-4 py-14"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex items-end justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                {category === "All"
                  ? "Popular Products"
                  : `${category} Collection`}
              </p>

              <h2 className="mt-2 text-3xl font-black text-gray-900">
                {category === "All"
                  ? "Explore Products"
                  : `Best ${category}`}
              </h2>
            </div>

            <span className="hidden cursor-default items-center gap-1 text-xs font-bold text-gray-500 sm:flex">
              {categoryProducts.length} Products
              <FaChevronRight />
            </span>

          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-white p-16 text-center">
              <h3 className="text-xl font-black text-gray-900">
                No Products Available
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                There are no products in this category yet.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ==================================================
          RELATED PRODUCTS
      ================================================== */}

      <section
        id="related-products"
        className="bg-white px-4 py-14"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
              You May Also Like
            </p>

            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">
              Related Products
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
              Discover more products that match your
              interests and shopping preferences.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          SEARCH & SORT
      ================================================== */}

      <section className="bg-[#f8f9f7] px-4 py-8">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">

            <div className="relative w-full md:max-w-md">

              <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search products..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-green-500 focus:bg-white"
              />

            </div>

            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
              className="cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold outline-none focus:border-green-500"
            >
              <option value="default">
                Sort: Default
              </option>

              <option value="low">
                Price: Low to High
              </option>

              <option value="high">
                Price: High to Low
              </option>

              <option value="rating">
                Highest Rated
              </option>

              <option value="sales">
                Best Selling
              </option>
            </select>

          </div>

        </div>
      </section>

      {/* ==================================================
          NEW ARRIVALS
      ================================================== */}

      {search.trim() === "" &&
        category === "All" && (
          <section className="bg-[#f8f9f7] px-4 py-14">
            <div className="mx-auto max-w-7xl">

              <div className="mb-8 flex items-end justify-between">

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                    Fresh Collection
                  </p>

                  <h2 className="mt-2 text-3xl font-black text-gray-900">
                    New Arrivals
                  </h2>
                </div>

                <span className="hidden cursor-default items-center gap-2 text-sm font-bold text-gray-500 sm:flex">
                  Explore More
                  <FaArrowRight />
                </span>

              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {newArrivals.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>

            </div>
          </section>
        )}

      {/* ==================================================
          TOP SELLING
      ================================================== */}

      {search.trim() === "" &&
        category === "All" && (
          <section className="bg-white px-4 py-14">
            <div className="mx-auto max-w-7xl">

              <div className="mb-8 flex items-end justify-between">

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                    Customer Favorites
                  </p>

                  <h2 className="mt-2 text-3xl font-black text-gray-900">
                    Top Selling
                  </h2>
                </div>

                <span className="hidden cursor-default items-center gap-2 text-sm font-bold text-gray-500 sm:flex">
                  Best Sellers
                  <FaArrowRight />
                </span>

              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {topSelling.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>

            </div>
          </section>
        )}

      {/* ==================================================
          FUTURE COLLECTION
      ================================================== */}

      {search.trim() === "" &&
        category === "All" && (
          <section className="bg-[#111111] px-4 py-16">
            <div className="mx-auto max-w-7xl">

              <div className="mb-9 text-center">

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                  Coming Soon
                </p>

                <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
                  Future Collection
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400">
                  New products are coming soon. Stay
                  connected and discover what's next.
                </p>

              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {futureCollection.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    dark
                  />
                ))}
              </div>

            </div>
          </section>
        )}

      {/* ==================================================
          ALL PRODUCTS
      ================================================== */}

      <section
        id="all-products"
        className="bg-[#f8f9f7] px-4 py-16"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                Our Complete Collection
              </p>

              <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">
                {search.trim() !== "" ||
                category !== "All"
                  ? "Search Results"
                  : "All Products"}
              </h2>
            </div>

            <p className="text-sm font-semibold text-gray-500">
              {filteredProducts.length} Products Found
            </p>

          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-white px-6 py-20 text-center shadow-sm">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <FaSearch className="text-gray-400" />
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                No Products Found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try searching with a different product
                name or category.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="mt-6 cursor-pointer rounded-xl bg-green-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-700"
              >
                Reset Filters
              </button>

            </div>
          )}

        </div>
      </section>

      {/* ==================================================
          FEATURES
      ================================================== */}

      <section className="bg-white px-4 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* PREMIUM QUALITY */}

          <div className="cursor-default rounded-2xl border border-gray-100 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <FaCheck />
            </div>

            <h3 className="mt-5 font-black text-gray-900">
              Premium Quality
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Carefully selected products with premium
              quality.
            </p>

          </div>

          {/* EASY SHOPPING */}

          <div className="cursor-default rounded-2xl border border-gray-100 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <FaShoppingCart />
            </div>

            <h3 className="mt-5 font-black text-gray-900">
              Easy Shopping
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Simple and smooth shopping experience for
              everyone.
            </p>

          </div>

          {/* CUSTOMER FAVORITES */}

          <div className="cursor-default rounded-2xl border border-gray-100 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <FaHeart />
            </div>

            <h3 className="mt-5 font-black text-gray-900">
              Customer Favorites
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Discover products loved by our customers.
            </p>

          </div>

          {/* FAST CHECKOUT */}

          <div className="cursor-default rounded-2xl border border-gray-100 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <FaArrowRight />
            </div>

            <h3 className="mt-5 font-black text-gray-900">
              Fast Checkout
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Quick and convenient checkout process from
              cart to order.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Shop;
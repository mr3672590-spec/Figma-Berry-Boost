import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaTrash,
  FaArrowLeft,
  FaStar,
} from "react-icons/fa";

import product1 from "../assets/products/product1.png";
import product2 from "../assets/products/product2.png";
import product3 from "../assets/products/product3.png";
import product4 from "../assets/products/product4.png";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Blueberry Drink",
      category: "Drinks",
      price: 250,
      oldPrice: 300,
      rating: 5,
      image: product1,
    },
    {
      id: 2,
      name: "Fresh Blueberry Juice",
      category: "Drinks",
      price: 280,
      oldPrice: 350,
      rating: 4,
      image: product2,
    },
    {
      id: 3,
      name: "Blueberry Can",
      category: "Drinks",
      price: 180,
      oldPrice: 220,
      rating: 5,
      image: product3,
    },
    {
      id: 4,
      name: "Premium Berry Pack",
      category: "Fruits",
      price: 450,
      oldPrice: 500,
      rating: 4,
      image: product4,
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlist((items) => items.filter((item) => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-[#faf8ff]">
      {/* Header */}
      <section className="bg-[#eee4ff] py-14">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <span className="inline-flex items-center gap-2 bg-white text-[#5b2bbf] px-4 py-2 rounded-full text-xs font-bold">
            <FaHeart />
            MY WISHLIST
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#241044]">
            Wishlist
          </h1>

          <p className="mt-3 text-sm text-gray-600">
            Save your favourite products and shop them anytime.
          </p>

          <div className="mt-5 text-sm text-gray-500">
            <Link
              to="/"
              className="hover:text-[#5b2bbf] transition"
            >
              Home
            </Link>

            <span className="mx-2">/</span>

            <span className="font-medium text-gray-800">
              Wishlist
            </span>
          </div>
        </div>
      </section>

      {/* Wishlist */}
      <section className="max-w-7xl mx-auto px-5 py-12">
        {wishlist.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#eee4ff] flex items-center justify-center text-[#5b2bbf]">
              <FaHeart size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-extrabold text-[#241044]">
              Your Wishlist Is Empty
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              You haven't added any products to your wishlist yet.
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-6 bg-[#5b2bbf] text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-[#45209a] transition"
            >
              <FaShoppingCart />
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-7">
              <div>
                <h2 className="text-2xl font-extrabold text-[#241044]">
                  My Favourite Products
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {wishlist.length} products in your wishlist
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlist.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition duration-300"
                >
                  {/* Image */}
                  <div className="relative h-64 bg-[#f5efff] flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-6 hover:scale-105 transition duration-500"
                    />

                    <button
                      onClick={() =>
                        removeFromWishlist(product.id)
                      }
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-red-500 shadow-md flex items-center justify-center hover:bg-red-500 hover:text-white transition"
                      aria-label="Remove from wishlist"
                    >
                      <FaTrash size={13} />
                    </button>
                  </div>

                  {/* Product info */}
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-wider font-bold text-[#5b2bbf]">
                      {product.category}
                    </p>

                    <Link to={`/product/${product.id}`}>
                      <h3 className="mt-2 text-lg font-bold text-[#241044] hover:text-[#5b2bbf] transition">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          size={13}
                          className={
                            star <= product.rating
                              ? "text-yellow-400"
                              : "text-gray-200"
                          }
                        />
                      ))}

                      <span className="text-xs text-gray-400 ml-1">
                        ({product.rating}.0)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3 mt-4">
                      <span className="text-xl font-extrabold text-[#5b2bbf]">
                        ৳{product.price}
                      </span>

                      <span className="text-sm text-gray-400 line-through">
                        ৳{product.oldPrice}
                      </span>
                    </div>

                    {/* Cart */}
                    <button
                      type="button"
                      className="w-full mt-5 bg-[#5b2bbf] hover:bg-[#45209a] text-white py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition"
                    >
                      <FaShoppingCart size={14} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Back */}
            <div className="mt-10">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 text-[#5b2bbf] text-sm font-bold hover:gap-3 transition-all"
              >
                <FaArrowLeft size={12} />
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Wishlist;
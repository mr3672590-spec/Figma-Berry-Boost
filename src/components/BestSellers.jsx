import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

// ================= IMAGES =================
import blueberryCan from "../assets/blueberry-can.png";
import mango from "../assets/mango.png";
import strawberry from "../assets/strawberry.png";
import kiwi from "../assets/kiwi.png";

// ================= PRODUCTS =================
const products = [
  {
    id: 1,
    name: "Blueberry Boost",
    image: blueberryCan,
    price: "3.99",
    description: "Rich in antioxidants and perfect for energy.",
  },
  {
    id: 2,
    name: "Mango Bliss",
    image: mango,
    price: "3.49",
    description: "Sweet, tropical and full of sunshine.",
  },
  {
    id: 3,
    name: "Strawberry Delight",
    image: strawberry,
    price: "3.79",
    description: "Sweet, delicious and absolutely refreshing.",
  },
  {
    id: 4,
    name: "Kiwi Crush",
    image: kiwi,
    price: "3.59",
    description: "Tangy, tasty and packed with nutrients.",
  },
];

// ================= COMPONENT =================
const BestSellers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-9">
          <p className="text-[#6b4ab6] text-[10px] font-bold uppercase tracking-widest">
            ✦ Refreshing flavours, naturally delicious ✦
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4b239e] mt-2">
            Discover Our Bestsellers
          </h2>
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* ================= ALL FLAVOURS ================= */}
        <div className="text-center mt-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-[#8e70c6] text-[#4b239e] px-7 py-2 rounded-full text-[11px] font-semibold hover:bg-[#4b239e] hover:text-white transition"
          >
            View All Flavours
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BestSellers;
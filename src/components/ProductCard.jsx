import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#eee] hover:shadow-xl transition duration-300 group">

      {/* IMAGE */}

      <div className="relative bg-[#f7f2ff] p-5">

        <button className="absolute right-3 top-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#5b2bbf] shadow-sm">
          <FaHeart size={12} />
        </button>

        <Link to={`/product/${product.id}`}>

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[220px] object-contain group-hover:scale-105 transition duration-300"
          />

        </Link>

      </div>


      {/* CONTENT */}

      <div className="p-4 text-center">

        <h3 className="font-bold text-[#30205d] text-sm">
          {product.name}
        </h3>

        <p className="text-[10px] text-gray-500 mt-2 min-h-[30px]">
          {product.description}
        </p>

        <p className="text-[#5b2bbf] font-bold mt-2">
          ${product.price}
        </p>


        <Link
          to={`/product/${product.id}`}
          className="inline-flex items-center justify-center gap-2 mt-3 bg-[#5b2bbf] cursor-pointer text-white px-6 py-2 rounded-full text-[10px] font-semibold hover:bg-[#45209a]"
        >
          <FaShoppingCart size={10} />
          Shop Now
        </Link>

      </div>

    </div>
  );
};

export default ProductCard;
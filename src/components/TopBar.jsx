import React from "react";
import { FaTruck } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-[#5b2bbf] text-white text-[11px] sm:text-xs">
      <div className="max-w-7xl mx-auto px-4 py-2 position-fixed  flex items-center justify-center gap-2">

        <FaTruck />

        <span>
          Free Shipping on all orders over $30
        </span>

      </div>
    </div>
  );
};

export default TopBar;
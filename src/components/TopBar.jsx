
import React, { useEffect, useState } from "react";
import { FaTruck } from "react-icons/fa";

const TopBar = () => {
  const messages = [
   
  "👋 WELCOME TO OUR SHOP",
  "✨ NEW COLLECTION IS HERE — SHOP NOW",
  "🚚 FREE SHIPPING ACROSS BANGLADESH",
  "🔥 GET 50% OFF ON ALL PRODUCTS",
  "⭐ PREMIUM QUALITY AT THE BEST PRICE",
  "⏰ LIMITED-TIME DEALS — DON'T MISS OUT"

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % messages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="bg-[#5b2bbf] text-white text-[11px] sm:text-xs overflow-hidden">
      <div className="w-full h-9 flex items-center justify-center">
        
        <div
          key={currentIndex}
          className="flex items-center gap-2 whitespace-nowrap animate-slide"
        >
          <FaTruck className="shrink-0" />

          <span className="font-semibold">
            {messages[currentIndex]}
          </span>
        </div>

      </div>

      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }

          15% {
            transform: translateX(0);
            opacity: 1;
          }

          85% {
            transform: translateX(0);
            opacity: 1;
          }

          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        .animate-slide {
          animation: slide 5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default TopBar;


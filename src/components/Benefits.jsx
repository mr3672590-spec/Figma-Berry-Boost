import React from "react";

import {
  FaTint,
  FaLeaf,
  FaSeedling,
  FaAppleAlt,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaAppleAlt />,
    title: "REAL FRUIT",
    text: "Made with real blueberries.",
  },
  {
    icon: <FaTint />,
    title: "NO ADDED SUGAR",
    text: "Naturally sweet, no added sugar.",
  },
  {
    icon: <FaLeaf />,
    title: "100% NATURAL",
    text: "Pure, natural and refreshing.",
  },
  {
    icon: <FaSeedling />,
    title: "RICH IN NUTRIENTS",
    text: "Packed with essential nutrients.",
  },
];

const Benefits = () => {
  return (
    <section className="relative -mt-10 z-20 px-4">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((item, index) => (

            <div
              key={item.title}
              className={`
                flex items-center gap-4 p-5
                ${index !== 3 ? "lg:border-r border-gray-200" : ""}
              `}
            >

              <div className="w-14 h-14 rounded-full bg-[#f0e8ff] flex items-center justify-center text-[#5b2bbf] text-xl shrink-0">
                {item.icon}
              </div>

              <div>

                <h3 className="text-[11px] font-extrabold text-[#30205d]">
                  {item.title}
                </h3>

                <p className="text-[9px] text-gray-500 mt-1 leading-4">
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Benefits;
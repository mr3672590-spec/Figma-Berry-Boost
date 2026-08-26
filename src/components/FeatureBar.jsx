import React from "react";
import {
  FaAppleAlt,
  FaTint,
  FaLeaf,
  FaSeedling,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAppleAlt />,
    title: "REAL FRUIT",
    description: "Made with real blueberries.",
  },
  {
    icon: <FaTint />,
    title: "NO ADDED SUGAR",
    description: "Naturally sweet, no added sugar.",
  },
  {
    icon: <FaLeaf />,
    title: "100% NATURAL",
    description: "Pure, natural and refreshing.",
  },
  {
    icon: <FaSeedling />,
    title: "RICH IN NUTRIENTS",
    description: "Packed with essential nutrients.",
  },
];

const FeatureBar = () => {
  return (
    <section className="relative z-20 -mt-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.10)] overflow-hidden">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`
                  flex items-center gap-4
                  px-5 py-5 sm:px-6
                  ${
                    index !== features.length - 1
                      ? "lg:border-r border-gray-200"
                      : ""
                  }
                  ${
                    index < 2
                      ? "sm:border-b lg:border-b-0 border-gray-200"
                      : ""
                  }
                `}
              >

                {/* Icon */}
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#f0e7ff] flex items-center justify-center text-[#5b2bbf] text-xl">
                  {feature.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[11px] sm:text-xs font-extrabold text-[#342064] tracking-wide">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-[9px] sm:text-[10px] leading-4 text-gray-500">
                    {feature.description}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeatureBar;
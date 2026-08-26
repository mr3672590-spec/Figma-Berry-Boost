import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLeaf,
  FaStar,
  FaSeedling,
} from "react-icons/fa";

import blueberry from "../assets/blueberry.png";
import heroCan from "../assets/blueberry-can.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[400px] lg:min-h-[450px] overflow-hidden bg-[#eee4ff]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#eee4ff]" />

        <div className="absolute -top-28 -left-28 w-[380px] h-[380px] rounded-full bg-[#d9c1ff] opacity-50" />

        <div className="absolute -bottom-32 -right-16 w-[420px] h-[420px] rounded-full bg-[#d0b3ff] opacity-50" />

        <div className="absolute top-16 right-[25%] w-[220px] h-[220px] rounded-full bg-white/30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="min-h-[560px] lg:min-h-[570px] flex items-center">
          <div className="w-full lg:w-[58%] py-14 lg:py-16">
            <span className="inline-flex items-center bg-white/90 text-[#5b2bbf] px-5 py-2 rounded-full text-[10px] font-bold tracking-widest shadow-sm">
              ✦ 100% NATURAL ✦
            </span>

            <h1 className="mt-5 text-[42px] sm:text-[54px] lg:text-[58px] xl:text-[64px] leading-[0.98] font-extrabold text-[#15162b]">
              Real Fruit.
              <br />
              <span className="text-[#5b2bbf]">
                Real Goodness.
              </span>
            </h1>

            <p className="mt-5 max-w-[500px] text-gray-600 text-sm sm:text-base leading-7">
              Delicious fruit juice made with real fruits.
              No artificial flavours, just pure refreshment
              in every sip.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-[#5b2bbf] text-white px-7 py-3.5 rounded-full text-xs font-bold shadow-lg hover:bg-[#45209a] hover:scale-105 transition"
              >
                Shop Now
                <FaArrowRight size={11} />
              </Link>

              <Link
                to="/categories"
                className="inline-flex items-center border border-[#7c55c7] bg-white/50 text-[#5b2bbf] px-7 py-3.5 rounded-full text-xs font-bold hover:bg-white hover:scale-105 transition"
              >
                Explore Flavours
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#5b2bbf] shadow-sm">
                  <FaLeaf size={13} />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-[#241044]">
                    100% Natural
                  </p>
                  <p className="text-[9px] text-gray-500">
                    Ingredients
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#5b2bbf] shadow-sm">
                  <FaStar size={13} />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-[#241044]">
                    No Artificial
                  </p>
                  <p className="text-[9px] text-gray-500">
                    Flavours
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#5b2bbf] shadow-sm">
                  <FaSeedling size={13} />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-[#241044]">
                    Rich in
                  </p>
                  <p className="text-[9px] text-gray-500">
                    Vitamins
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex absolute right-4 xl:right-12 bottom-0 w-[40%] h-full items-end justify-center">
            <div className="absolute w-[370px] h-[370px] xl:w-[400px] xl:h-[400px] rounded-full bg-[#d7bfff] opacity-60" />

            <div className="absolute w-[250px] h-[250px] xl:w-[280px] xl:h-[280px] rounded-full bg-[#c19cff] opacity-40" />

            <img
              src={blueberry}
              alt="Blueberry"
              className="absolute w-20 xl:w-22 left-4 bottom-24 z-20"
            />

            <img
              src={blueberry}
              alt="Blueberry"
              className="absolute w-16 xl:w-18 right-4 top-28 z-20"
            />

            <img
              src={heroCan}
              alt="Blueberry Boost"
              className="relative z-30 w-[240px] xl:w-[290px] drop-shadow-2xl"
            />
          </div>

          <div className="absolute right-[-30px] bottom-[-30px] lg:hidden opacity-20">
            <img
              src={heroCan}
              alt="Blueberry Boost"
              className="w-[220px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
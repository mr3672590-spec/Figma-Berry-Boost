import React from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";

import blueberry from "../assets/blueberry.png";
import blueberryCan from "../assets/blueberry-can.png";

const posts = [
  {
    id: 1,
    title: "Why Blueberries Are So Good For You",
    description:
      "Discover the natural goodness of blueberries and why they make a delicious addition to your everyday routine.",
    date: "August 20, 2026",
    author: "Blueberry Team",
    image: blueberry,
  },
  {
    id: 2,
    title: "Simple Ways To Stay Fresh Every Day",
    description:
      "From choosing natural drinks to staying hydrated, discover easy habits for a fresher everyday lifestyle.",
    date: "August 15, 2026",
    author: "Blueberry Team",
    image: blueberryCan,
  },
  {
    id: 3,
    title: "The Goodness Of Real Fruit",
    description:
      "Learn why real fruit ingredients can make your favourite drinks naturally delicious and refreshing.",
    date: "August 10, 2026",
    author: "Blueberry Team",
    image: blueberry,
  },
];

const Blog = () => {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-[#eee4ff] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[420px]">

            {/* LEFT */}
            <div className="py-14">
              <span className="inline-block bg-white text-[#5b2bbf] px-4 py-2 rounded-full text-[10px] font-bold tracking-wider">
                OUR BLOG
              </span>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#241044]">
                Fresh Ideas.
                <br />
                <span className="text-[#5b2bbf]">
                  Fresh Inspiration.
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-sm sm:text-base leading-7 text-gray-600">
                Discover useful tips, fruit goodness, refreshing
                ideas and stories from the Blueberry family.
              </p>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center lg:justify-end py-10">

              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#d5bdff]" />

              <img
                src={blueberry}
                alt="Blueberries"
                className="absolute w-24 left-10 bottom-12 z-10"
              />

              <img
                src={blueberryCan}
                alt="Blueberry Drink"
                className="relative z-20 w-60 sm:w-72 lg:w-80 drop-shadow-2xl"
              />

            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG ================= */}
      <section className="py-16 sm:py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* HEADING */}
          <div className="text-center max-w-2xl mx-auto">

            <p className="text-[#5b2bbf] text-[10px] font-bold tracking-[3px] uppercase">
              Latest Stories
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#241044]">
              From Our Blog
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Fresh content, helpful ideas and delicious inspiration
              for your everyday life.
            </p>

          </div>

          {/* BLOG CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition duration-300"
              >

                {/* IMAGE */}
                <div className="relative h-[240px] bg-[#f6f0ff] overflow-hidden">

                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition duration-500"
                  />

                  <span className="absolute top-4 left-4 bg-[#5b2bbf] text-white px-3 py-1 rounded-full text-[9px] font-bold">
                    FRUIT & WELLNESS
                  </span>

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  {/* META */}
                  <div className="flex flex-wrap items-center gap-4 text-[10px] text-gray-400">

                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-[#5b2bbf]" />
                      {post.date}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <FaUser className="text-[#5b2bbf]" />
                      {post.author}
                    </span>

                  </div>

                  {/* TITLE */}
                  <h3 className="mt-4 text-lg font-bold leading-6 text-[#241044] group-hover:text-[#5b2bbf] transition">
                    {post.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {post.description}
                  </p>

                  {/* READ MORE */}
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 mt-5 text-[#5b2bbf] text-xs font-bold hover:gap-3 transition-all"
                  >
                    Read More
                    <FaArrowRight size={10} />
                  </Link>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="pb-16 sm:pb-20">

        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden bg-[#5b2bbf] rounded-3xl px-6 sm:px-10 lg:px-16 py-12">

            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10" />

            <div className="absolute -left-10 -bottom-20 w-40 h-40 rounded-full bg-white/10" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

              <div className="text-white">

                <p className="text-purple-200 text-[10px] font-bold tracking-[3px] uppercase">
                  Stay Updated
                </p>

                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold">
                  Fresh News In Your Inbox
                </h2>

                <p className="mt-3 text-sm text-purple-100 leading-6 max-w-md">
                  Subscribe for fresh stories, product updates and
                  delicious inspiration.
                </p>

              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3"
              >

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-5 py-3 rounded-full bg-white text-gray-800 text-sm outline-none"
                />

                <button
                  type="submit"
                  className="shrink-0 bg-[#241044] text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-[#17072d] transition"
                >
                  Subscribe
                </button>

              </form>

            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-16">

        <div className="max-w-5xl mx-auto px-5">

          <div className="text-center bg-[#faf8ff] rounded-3xl px-6 py-12">

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241044]">
              Want To Taste The Goodness?
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Explore our refreshing collection of fruit drinks.
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-6 bg-[#5b2bbf] text-white px-7 py-3 rounded-full text-xs font-semibold hover:bg-[#45209a] transition"
            >
              Shop Our Products
              <FaArrowRight size={11} />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Blog;
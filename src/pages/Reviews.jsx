import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaUser,
  FaCheckCircle,
} from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Verified Customer",
    rating: 5,
    review:
      "Absolutely loved the blueberry drink! It tastes fresh, refreshing and naturally delicious. Definitely one of my favourite drinks.",
    initials: "SA",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Verified Customer",
    rating: 5,
    review:
      "The quality is amazing. The flavour feels natural and the drink is perfect for a hot day. I will definitely order again.",
    initials: "JW",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Verified Customer",
    rating: 4,
    review:
      "Really refreshing and tasty. I love the fruity flavour and the packaging also looks beautiful. Great experience overall.",
    initials: "NJ",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Verified Customer",
    rating: 5,
    review:
      "Fresh taste, beautiful packaging and excellent quality. This has quickly become my go-to refreshing drink.",
    initials: "MB",
  },
  {
    id: 5,
    name: "Ayesha Rahman",
    role: "Verified Customer",
    rating: 5,
    review:
      "I ordered it for my family and everyone enjoyed it. The flavour is delicious without feeling too heavy or artificial.",
    initials: "AR",
  },
  {
    id: 6,
    name: "Daniel Smith",
    role: "Verified Customer",
    rating: 5,
    review:
      "One of the best fruit drinks I have tried recently. Super refreshing and perfect with lunch or as an afternoon drink.",
    initials: "DS",
  },
];

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }

    alert("Thank you for your review!");
    e.target.reset();
    setRating(0);
  };

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#eee4ff]">
        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-[#d8c3ff]" />
        <div className="absolute -left-20 -bottom-28 w-64 h-64 rounded-full bg-[#e1d2ff]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="min-h-[400px] flex items-center justify-center text-center">

            <div className="max-w-3xl py-16">

              <span className="inline-flex items-center gap-2 bg-white text-[#5b2bbf] px-5 py-2 rounded-full text-[10px] font-bold tracking-[2px]">
                <FaStar size={10} />
                CUSTOMER REVIEWS
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#241044]">
                Loved By Our
                <br />
                <span className="text-[#5b2bbf]">
                  Happy Customers.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7 text-gray-600">
                Discover what our customers have to say about their
                experience with our fresh, delicious and refreshing
                fruit drinks.
              </p>

              <div className="mt-7 flex flex-wrap justify-center items-center gap-4">

                <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm">
                  <div className="flex text-yellow-400">
                    <FaStar size={13} />
                    <FaStar size={13} />
                    <FaStar size={13} />
                    <FaStar size={13} />
                    <FaStar size={13} />
                  </div>

                  <span className="text-xs font-bold text-[#241044]">
                    4.9/5
                  </span>
                </div>

                <span className="text-xs text-gray-500">
                  Based on 500+ happy customers
                </span>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="text-center bg-[#faf8ff] rounded-2xl p-6 border border-[#eee4ff]">
              <h3 className="text-3xl font-extrabold text-[#5b2bbf]">
                4.9
              </h3>
              <div className="flex justify-center gap-1 text-yellow-400 mt-2">
                <FaStar size={11} />
                <FaStar size={11} />
                <FaStar size={11} />
                <FaStar size={11} />
                <FaStar size={11} />
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Average Rating
              </p>
            </div>

            <div className="text-center bg-[#faf8ff] rounded-2xl p-6 border border-[#eee4ff]">
              <h3 className="text-3xl font-extrabold text-[#5b2bbf]">
                500+
              </h3>
              <p className="mt-2 text-xs text-gray-500">
                Happy Customers
              </p>
            </div>

            <div className="text-center bg-[#faf8ff] rounded-2xl p-6 border border-[#eee4ff]">
              <h3 className="text-3xl font-extrabold text-[#5b2bbf]">
                98%
              </h3>
              <p className="mt-2 text-xs text-gray-500">
                Satisfaction Rate
              </p>
            </div>

            <div className="text-center bg-[#faf8ff] rounded-2xl p-6 border border-[#eee4ff]">
              <h3 className="text-3xl font-extrabold text-[#5b2bbf]">
                4.8K+
              </h3>
              <p className="mt-2 text-xs text-gray-500">
                Drinks Enjoyed
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-[#5b2bbf] text-[10px] font-bold tracking-[3px] uppercase">
              What People Say
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#241044]">
              Real Reviews From Real People
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Our customers are at the heart of everything we do.
              Here's what they think about our products.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            {reviews.map((review) => (
              <article
                key={review.id}
                className="group relative bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                {/* Quote */}
                <div className="absolute top-5 right-6 text-[#eee4ff]">
                  <FaQuoteLeft size={28} />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      size={12}
                      className={
                        star <= review.rating
                          ? "text-yellow-400"
                          : "text-gray-200"
                      }
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="mt-5 text-sm text-gray-600 leading-7">
                  "{review.review}"
                </p>

                {/* Customer */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">

                  <div className="w-11 h-11 rounded-full bg-[#eee4ff] text-[#5b2bbf] flex items-center justify-center font-bold text-xs">
                    {review.initials}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#241044]">
                      {review.name}
                    </h4>

                    <p className="mt-0.5 flex items-center gap-1 text-[10px] text-gray-400">
                      <FaCheckCircle
                        size={9}
                        className="text-[#5b2bbf]"
                      />
                      {review.role}
                    </p>
                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ================= WRITE REVIEW ================= */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="bg-[#faf8ff] rounded-3xl border border-[#eee4ff] overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* LEFT */}
              <div className="bg-[#5b2bbf] text-white p-8 sm:p-10 lg:p-14">

                <span className="inline-block text-purple-200 text-[10px] font-bold tracking-[3px] uppercase">
                  Share Your Experience
                </span>

                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">
                  We'd Love To Hear From You.
                </h2>

                <p className="mt-4 text-sm leading-7 text-purple-100 max-w-md">
                  Tried our products? Tell us what you think.
                  Your feedback helps us improve and helps other
                  customers discover their next favourite drink.
                </p>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                      <FaCheckCircle size={14} />
                    </div>

                    <span className="text-xs text-purple-100">
                      Verified customer reviews
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                      <FaStar size={14} />
                    </div>

                    <span className="text-xs text-purple-100">
                      Honest ratings and feedback
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                      <FaUser size={14} />
                    </div>

                    <span className="text-xs text-purple-100">
                      Join our happy community
                    </span>
                  </div>

                </div>

              </div>

              {/* RIGHT */}
              <div className="p-8 sm:p-10 lg:p-14">

                <h3 className="text-2xl font-extrabold text-[#241044]">
                  Write A Review
                </h3>

                <p className="mt-2 text-xs text-gray-500">
                  Your feedback means a lot to us.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-5"
                >

                  {/* NAME */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#5b2bbf] focus:ring-2 focus:ring-[#eee4ff] transition"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#5b2bbf] focus:ring-2 focus:ring-[#eee4ff] transition"
                    />
                  </div>

                  {/* RATING */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">
                      Your Rating
                    </label>

                    <div className="flex items-center gap-2">

                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() =>
                            setHoverRating(star)
                          }
                          onMouseLeave={() =>
                            setHoverRating(0)
                          }
                          className="cursor-pointer transition-transform hover:scale-110"
                        >
                          <FaStar
                            size={22}
                            className={
                              star <= (hoverRating || rating)
                                ? "text-yellow-400"
                                : "text-gray-200"
                            }
                          />
                        </button>
                      ))}

                      <span className="ml-2 text-xs text-gray-400">
                        {rating > 0
                          ? `${rating}/5`
                          : "Select rating"}
                      </span>

                    </div>
                  </div>

                  {/* REVIEW */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">
                      Your Review
                    </label>

                    <textarea
                      required
                      rows="4"
                      placeholder="Write your experience..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none resize-none focus:border-[#5b2bbf] focus:ring-2 focus:ring-[#eee4ff] transition"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#5b2bbf] text-white py-3.5 rounded-xl text-xs font-bold hover:bg-[#47209d] hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    Submit Review
                    <FaArrowRight size={11} />
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-5">

          <div className="text-center bg-[#eee4ff] rounded-3xl px-6 py-12">

            <p className="text-[#5b2bbf] text-[10px] font-bold tracking-[3px] uppercase">
              Fresh & Delicious
            </p>

            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#241044]">
              Ready To Taste The Goodness?
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Explore our refreshing collection and find your
              favourite flavour today.
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-6 bg-[#5b2bbf] text-white px-7 py-3 rounded-full text-xs font-semibold hover:bg-[#45209a] hover:scale-105 transition duration-300 cursor-pointer"
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

export default Reviews;
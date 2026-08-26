import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaArrowLeft,
  FaShoppingBag,
  FaShieldAlt,
  FaTruck,
} from "react-icons/fa";

import blueberryCan from "../assets/blueberry-can.png";
import mango from "../assets/mango.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Blueberry Boost",
      description: "Natural Blueberry Juice",
      price: 3.99,
      quantity: 1,
      image: blueberryCan,
    },
    {
      id: 2,
      name: "Mango Bliss",
      description: "Refreshing Mango Juice",
      price: 3.49,
      quantity: 2,
      image: mango,
    },
  ]);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Shipping
  const shipping = subtotal >= 30 ? 0 : 4.99;

  // Total
  const total = subtotal + shipping;

  return (
    <div className="bg-[#faf8ff] min-h-screen">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-[#eee4ff] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center">

            <span className="inline-block bg-white text-[#5b2bbf] px-4 py-2 rounded-full text-[10px] font-bold tracking-wider">
              YOUR CART
            </span>

            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#241044]">
              Shopping Cart
            </h1>

            <p className="mt-3 text-sm text-gray-600">
              Review your favourite drinks before checkout.
            </p>

          </div>
        </div>
      </section>

      {/* ================= CART CONTENT ================= */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          {cartItems.length === 0 ? (

            /* ================= EMPTY CART ================= */
            <div className="bg-white rounded-3xl shadow-sm p-10 sm:p-16 text-center">

              <div className="w-20 h-20 mx-auto rounded-full bg-[#eee4ff] flex items-center justify-center text-[#5b2bbf]">
                <FaShoppingBag size={28} />
              </div>

              <h2 className="mt-6 text-2xl font-extrabold text-[#241044]">
                Your Cart Is Empty
              </h2>

              <p className="mt-3 text-sm text-gray-500">
                Looks like you haven't added anything to your cart yet.
              </p>

              <Link
                to="/shop"
                className="inline-flex items-center gap-2 mt-6 bg-[#5b2bbf] text-white px-7 py-3 rounded-full text-xs font-bold hover:bg-[#45209a] transition"
              >
                Start Shopping
              </Link>

            </div>

          ) : (

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

              {/* ================= PRODUCTS ================= */}
              <div className="lg:col-span-2 space-y-4">

                <div className="bg-white rounded-2xl shadow-sm p-5">
                  <div className="flex items-center justify-between">

                    <h2 className="text-lg font-extrabold text-[#241044]">
                      Your Items
                    </h2>

                    <span className="text-xs text-gray-500">
                      {cartItems.length} Products
                    </span>

                  </div>
                </div>

                {/* CART ITEMS */}
                {cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-sm p-4 sm:p-5"
                  >

                    <div className="flex flex-col sm:flex-row gap-5">

                      {/* IMAGE */}
                      <div className="w-full sm:w-32 h-32 shrink-0 bg-[#f5efff] rounded-xl flex items-center justify-center">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-28 w-28 object-contain"
                        />

                      </div>

                      {/* INFO */}
                      <div className="flex-1">

                        <div className="flex justify-between gap-4">

                          <div>

                            <h3 className="text-base sm:text-lg font-bold text-[#241044]">
                              {item.name}
                            </h3>

                            <p className="text-xs text-gray-500 mt-1">
                              {item.description}
                            </p>

                          </div>

                          {/* DELETE */}
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="w-9 h-9 shrink-0 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 transition"
                            aria-label={`Remove ${item.name}`}
                          >
                            <FaTrash size={12} />
                          </button>

                        </div>

                        {/* PRICE + QUANTITY */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">

                          {/* PRICE */}
                          <p className="text-[#5b2bbf] text-lg font-extrabold">
                            ${item.price.toFixed(2)}
                          </p>

                          {/* QUANTITY */}
                          <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">

                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-[#eee4ff] hover:text-[#5b2bbf] transition"
                              aria-label="Decrease quantity"
                            >
                              <FaMinus size={9} />
                            </button>

                            <span className="w-9 text-center text-sm font-bold text-[#241044]">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-[#eee4ff] hover:text-[#5b2bbf] transition"
                              aria-label="Increase quantity"
                            >
                              <FaPlus size={9} />
                            </button>

                          </div>

                          {/* ITEM TOTAL */}
                          <p className="text-sm font-bold text-gray-800">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>

                        </div>

                      </div>
                    </div>
                  </div>
                ))}

                {/* CONTINUE SHOPPING */}
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-[#5b2bbf] text-xs font-bold mt-3 hover:gap-3 transition-all"
                >
                  <FaArrowLeft size={10} />
                  Continue Shopping
                </Link>

              </div>

              {/* ================= ORDER SUMMARY ================= */}
              <div>

                <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">

                  <h2 className="text-lg font-extrabold text-[#241044]">
                    Order Summary
                  </h2>

                  {/* SUBTOTAL */}
                  <div className="flex justify-between mt-7 text-sm">

                    <span className="text-gray-500">
                      Subtotal
                    </span>

                    <span className="font-semibold text-gray-800">
                      ${subtotal.toFixed(2)}
                    </span>

                  </div>

                  {/* SHIPPING */}
                  <div className="flex justify-between mt-4 text-sm">

                    <span className="text-gray-500">
                      Shipping
                    </span>

                    <span className="font-semibold text-gray-800">
                      {shipping === 0
                        ? "FREE"
                        : `$${shipping.toFixed(2)}`}
                    </span>

                  </div>

                  {/* DIVIDER */}
                  <div className="border-t border-gray-200 my-5" />

                  {/* TOTAL */}
                  <div className="flex justify-between items-center">

                    <span className="font-bold text-[#241044]">
                      Total
                    </span>

                    <span className="text-2xl font-extrabold text-[#5b2bbf]">
                      ${total.toFixed(2)}
                    </span>

                  </div>

                  {/* CHECKOUT */}
                  <Link
                    to="/checkout"
                    className="flex items-center justify-center gap-2 w-full mt-6 bg-[#5b2bbf] text-white py-3.5 rounded-full text-xs font-bold hover:bg-[#45209a] transition"
                  >
                    Proceed To Checkout

                    <FaArrowLeft
                      size={10}
                      className="rotate-180"
                    />
                  </Link>

                  {/* SECURITY */}
                  <div className="mt-6 space-y-4">

                    {/* Secure Checkout */}
                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-full bg-[#eee4ff] flex items-center justify-center text-[#5b2bbf]">
                        <FaShieldAlt size={13} />
                      </div>

                      <div>
                        <p className="text-[11px] font-bold text-[#241044]">
                          Secure Checkout
                        </p>

                        <p className="text-[9px] text-gray-500">
                          Your information is protected.
                        </p>
                      </div>

                    </div>

                    {/* Fast Delivery */}
                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-full bg-[#eee4ff] flex items-center justify-center text-[#5b2bbf]">
                        <FaTruck size={13} />
                      </div>

                      <div>
                        <p className="text-[11px] font-bold text-[#241044]">
                          Fast Delivery
                        </p>

                        <p className="text-[9px] text-gray-500">
                          Free shipping over $30.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
};

export default Cart;
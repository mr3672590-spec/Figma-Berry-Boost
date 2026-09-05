import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaArrowLeft,
  FaShoppingCart,
} from "react-icons/fa";

const Cart = () => {
  const navigate = useNavigate();

  // ================= CART STATE =================
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");

      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Cart loading error:", error);
      return [];
    }
  });

  // ================= SAVE CART =================
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ================= INCREASE QUANTITY =================
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // ================= DECREASE QUANTITY =================
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ================= REMOVE PRODUCT =================
  const removeItem = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // ================= CLEAR CART =================
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // ================= SUBTOTAL =================
  const subtotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price) * Number(item.quantity),
    0
  );

  // ================= SHIPPING =================
  const shipping = subtotal > 0 ? 60 : 0;

  // ================= GRAND TOTAL =================
  const total = subtotal + shipping;

  // ================= CHECKOUT =================
  const handleCheckout = () => {
    if (cart.length === 0) {
      return;
    }

    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-[#f8f9f7] px-4 py-10">

      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <div className="mb-8">

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-[#5b2bbf]"
          >
            <FaArrowLeft />
            Continue Shopping
          </Link>

          <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
            Your Cart
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Review your products before checkout.
          </p>

        </div>

        {/* ================= EMPTY CART ================= */}
        {cart.length === 0 ? (

          <div className="rounded-2xl bg-white px-5 py-16 text-center shadow-sm">

            {/* CART ICON */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f7f2ff]">

              <FaShoppingCart className="text-2xl text-[#5b2bbf]" />

            </div>

            {/* TITLE */}
            <h2 className="mt-4 text-xl font-bold text-gray-900">
              Your Cart is Empty
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-2 text-sm text-gray-500">
              Add some products to continue shopping.
            </p>

            {/* SHOP BUTTON */}
            <Link
              to="/shop"
              className="mt-5 inline-flex rounded-full bg-[#5b2bbf] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#45209a]"
            >
              Start Shopping
            </Link>

          </div>

        ) : (

          /* ================= CART CONTENT ================= */
          <div className="grid gap-6 lg:grid-cols-[1fr_350px]">

            {/* ================= CART PRODUCTS ================= */}
            <div className="space-y-4">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center"
                >

                  {/* ================= IMAGE ================= */}
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#f7f2ff]">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain p-3"
                    />

                  </div>

                  {/* ================= PRODUCT INFO ================= */}
                  <div className="flex-1">

                    <h3 className="text-base font-bold text-[#30205d]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm font-bold text-[#5b2bbf]">
                      ৳{item.price}
                    </p>

                    {/* ================= QUANTITY + REMOVE ================= */}
                    <div className="mt-3 flex flex-wrap items-center gap-3">

                      {/* QUANTITY BOX */}
                      <div className="flex items-center overflow-hidden rounded-lg border border-gray-200">

                        {/* DECREASE */}
                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="px-3 py-2 text-gray-600 transition hover:bg-[#f7f2ff] hover:text-[#5b2bbf]"
                        >
                          <FaMinus className="text-[10px]" />
                        </button>

                        {/* NUMBER */}
                        <span className="min-w-8 text-center text-sm font-bold text-gray-800">
                          {item.quantity}
                        </span>

                        {/* INCREASE */}
                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="px-3 py-2 text-gray-600 transition hover:bg-[#f7f2ff] hover:text-[#5b2bbf]"
                        >
                          <FaPlus className="text-[10px]" />
                        </button>

                      </div>

                      {/* REMOVE BUTTON */}
                      <button
                        type="button"
                        onClick={() =>
                          removeItem(item.id)
                        }
                        className="flex items-center gap-1 text-xs font-bold text-red-500 transition hover:text-red-600"
                      >
                        <FaTrash />
                        Remove
                      </button>

                    </div>

                  </div>

                  {/* ================= ITEM TOTAL ================= */}
                  <div className="text-left sm:text-right">

                    <p className="text-xs text-gray-400">
                      Total
                    </p>

                    <p className="mt-1 text-lg font-extrabold text-gray-900">
                      ৳
                      {Number(item.price) *
                        Number(item.quantity)}
                    </p>

                  </div>

                </div>

              ))}

              {/* ================= CLEAR CART ================= */}
              <div className="flex justify-end pt-2">

                <button
                  type="button"
                  onClick={clearCart}
                  className="text-sm font-semibold text-red-500 transition hover:text-red-600"
                >
                  Clear Cart
                </button>

              </div>

            </div>

            {/* ================= ORDER SUMMARY ================= */}
            <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">

              <h2 className="text-lg font-extrabold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-5 space-y-4">

                {/* SUBTOTAL */}
                <div className="flex justify-between text-sm">

                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-bold text-gray-900">
                    ৳{subtotal}
                  </span>

                </div>

                {/* SHIPPING */}
                <div className="flex justify-between text-sm">

                  <span className="text-gray-500">
                    Shipping
                  </span>

                  <span className="font-bold text-gray-900">
                    ৳{shipping}
                  </span>

                </div>

                {/* DIVIDER */}
                <div className="border-t border-gray-100 pt-4">

                  <div className="flex items-center justify-between">

                    <span className="font-bold text-gray-900">
                      Total
                    </span>

                    <span className="text-xl font-extrabold text-[#5b2bbf]">
                      ৳{total}
                    </span>

                  </div>

                </div>

              </div>

              {/* ================= CHECKOUT ================= */}
              <button
                type="button"
                onClick={handleCheckout}
                className="mt-6 w-full rounded-xl bg-[#5b2bbf] py-3 text-sm font-bold text-white transition hover:bg-[#45209a]"
              >
                Proceed to Checkout
              </button>

              {/* ================= CONTINUE SHOPPING ================= */}
              <Link
                to="/shop"
                className="mt-3 flex w-full items-center justify-center rounded-xl border border-gray-200 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
              >
                Continue Shopping
              </Link>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default Cart;
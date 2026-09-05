
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [cart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    payment: "Cash on Delivery",
  });

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 60 : 0;

  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      navigate("/shop");
      return;
    }

    localStorage.removeItem("cart");

    alert("Order placed successfully!");

    navigate("/shop");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9f7] px-4">

        <div className="rounded-2xl bg-white p-10 text-center shadow-sm">

          <h2 className="text-xl font-extrabold text-gray-900">
            Your Cart is Empty
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Add products before checkout.
          </p>

          <Link
            to="/shop"
            className="mt-5 inline-block rounded-full bg-[#5b2bbf] px-6 py-3 text-sm font-bold text-white"
          >
            Go Shopping
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9f7] px-4 py-10">

      <div className="mx-auto max-w-6xl">

        <h1 className="text-3xl font-extrabold text-gray-900">
          Checkout
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Complete your information to place your order.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-6 lg:grid-cols-[1fr_350px]"
        >

          {/* DELIVERY INFORMATION */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="text-lg font-extrabold text-gray-900">
              Delivery Information
            </h2>

            <div className="mt-5 space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#5b2bbf]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#5b2bbf]"
              />

              <textarea
                name="address"
                placeholder="Full Delivery Address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="4"
                className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#5b2bbf]"
              />

              <input
                type="text"
                name="city"
                placeholder="City / District"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#5b2bbf]"
              />

              <select
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#5b2bbf]"
              >
                <option value="Cash on Delivery">
                  Cash on Delivery
                </option>

                <option value="bKash">
                  bKash
                </option>

                <option value="Nagad">
                  Nagad
                </option>
              </select>

            </div>

          </div>

          {/* ORDER SUMMARY */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="text-lg font-extrabold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-5 space-y-4">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3"
                >

                  <div>

                    <p className="text-sm font-bold text-gray-900">
                      {item.name}
                    </p>

                    <p className="text-xs text-gray-500">
                      Quantity: {item.quantity}
                    </p>

                  </div>

                  <p className="text-sm font-bold">
                    ৳{item.price * item.quantity}
                  </p>

                </div>
              ))}

            </div>

            <div className="mt-5 space-y-3 border-t border-gray-100 pt-5">

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-bold">
                  ৳{subtotal}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Shipping
                </span>

                <span className="font-bold">
                  ৳{shipping}
                </span>
              </div>

              <div className="flex justify-between border-t pt-4">

                <span className="font-extrabold">
                  Total
                </span>

                <span className="text-xl font-extrabold text-[#5b2bbf]">
                  ৳{total}
                </span>

              </div>

            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-[#5b2bbf] py-3 text-sm font-bold text-white hover:bg-[#45209a] transition"
            >
              Place Order
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Checkout;


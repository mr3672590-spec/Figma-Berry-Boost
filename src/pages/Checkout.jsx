import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaLock,
  FaTruck,
  FaCreditCard,
  FaMoneyBillWave,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-purple-700"
          >
            BerryBoost
          </Link>

          <div className="flex items-center gap-2 text-gray-600">
            <FaLock />
            <span className="text-sm font-medium">
              Secure Checkout
            </span>
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 py-10">

        {/* Back */}
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 mb-8"
        >
          <FaArrowLeft />
          Back to Cart
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-6">

              {/* Contact */}
              <section className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-5">
                  Contact Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                  />

                </div>
              </section>

              {/* Shipping */}
              <section className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center gap-3 mb-5">
                  <FaTruck className="text-purple-600 text-xl" />

                  <h2 className="text-xl font-bold">
                    Shipping Address
                  </h2>
                </div>

                <div className="space-y-4">

                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <input
                      type="text"
                      name="postalCode"
                      placeholder="Postal Code"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                    />

                  </div>

                </div>
              </section>

              {/* Payment */}
              <section className="bg-white rounded-2xl shadow-sm p-6">

                <div className="flex items-center gap-3 mb-5">
                  <FaCreditCard className="text-purple-600 text-xl" />

                  <h2 className="text-xl font-bold">
                    Payment Method
                  </h2>
                </div>

                <div className="space-y-3">

                  {/* Card */}
                  <label
                    className={`flex items-center gap-4 border rounded-xl p-4 cursor-pointer transition ${
                      paymentMethod === "card"
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    <FaCreditCard className="text-purple-600" />

                    <div>
                      <p className="font-semibold">
                        Credit / Debit Card
                      </p>

                      <p className="text-sm text-gray-500">
                        Pay securely with your card
                      </p>
                    </div>
                  </label>

                  {/* Cash */}
                  <label
                    className={`flex items-center gap-4 border rounded-xl p-4 cursor-pointer transition ${
                      paymentMethod === "cash"
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    <FaMoneyBillWave className="text-green-600" />

                    <div>
                      <p className="font-semibold">
                        Cash on Delivery
                      </p>

                      <p className="text-sm text-gray-500">
                        Pay when your order arrives
                      </p>
                    </div>
                  </label>

                </div>

                {/* Card Details */}
                {paymentMethod === "card" && (
                  <div className="mt-5 space-y-4">

                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <div className="grid grid-cols-2 gap-4">

                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                      />

                      <input
                        type="text"
                        placeholder="CVV"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                      />

                    </div>

                  </div>
                )}

              </section>

            </div>

            {/* RIGHT - ORDER SUMMARY */}
            <div>
              <section className="bg-white rounded-2xl shadow-sm p-6 sticky top-5">

                <h2 className="text-xl font-bold mb-6">
                  Order Summary
                </h2>

                {/* Product 1 */}
                <div className="flex items-center gap-4 pb-5 border-b">

                  <div className="w-20 h-20 rounded-xl bg-purple-50 flex items-center justify-center">
                    <span className="text-3xl">
                      🫐
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold">
                      Blueberry Drink
                    </h3>

                    <p className="text-sm text-gray-500">
                      Qty: 1
                    </p>
                  </div>

                  <p className="font-semibold">
                    $8.99
                  </p>

                </div>

                {/* Product 2 */}
                <div className="flex items-center gap-4 py-5 border-b">

                  <div className="w-20 h-20 rounded-xl bg-orange-50 flex items-center justify-center">
                    <span className="text-3xl">
                      🥭
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold">
                      Mango Drink
                    </h3>

                    <p className="text-sm text-gray-500">
                      Qty: 1
                    </p>
                  </div>

                  <p className="font-semibold">
                    $7.99
                  </p>

                </div>

                {/* Prices */}
                <div className="space-y-3 py-5">

                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>$16.98</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>$2.00</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>$1.70</span>
                  </div>

                  <div className="border-t pt-4 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>$20.68</span>
                  </div>

                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white py-4 rounded-xl font-semibold transition flex items-center justify-center gap-2"
                >
                  <FaCheckCircle />
                  Place Order
                </button>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
                  <FaLock />
                  Secure & encrypted payment
                </div>

              </section>
            </div>

          </div>
        </form>
      </main>
    </div>
  );
};

export default Checkout;
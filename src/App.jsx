import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Shop */}
          <Route path="/shop" element={<Shop />} />

          {/* Categories */}
          <Route path="/categories" element={<Categories />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Reviews */}
          <Route path="/reviews" element={<Reviews />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Wishlist */}
          <Route path="/wishlist" element={<Wishlist />} />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Product Details */}
          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
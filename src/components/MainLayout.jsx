import React from "react";
import { Outlet } from "react-router-dom";

import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Top Shipping Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="min-h-[70vh]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default MainLayout;
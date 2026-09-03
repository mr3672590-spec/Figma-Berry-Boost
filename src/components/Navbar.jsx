import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBag,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/shop" },
    { name: "Benefits", path: "/categories" },
    { name: "Reviews", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[68px] sm:h-[72px] flex items-center justify-between">

          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center shrink-0 cursor-pointer"
          >
            <img
              src={logo}
              alt="Fresh Juice"
              className="w-[105px] sm:w-[125px] md:w-[145px] lg:w-[155px] h-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-9">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-2 text-[12px] xl:text-[13px] font-semibold cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "text-[#5b2bbf]"
                      : "text-gray-700 hover:text-[#5b2bbf]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#eee4ff] hover:text-[#0000FF] transition cursor-pointer"
            >
              <FaSearch size={13} />
            </button>

            <Link
              to="/cart"
              aria-label="Shopping Cart"
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#eee4ff] hover:text-[#5b2bbf] transition cursor-pointer"
            >
              <FaShoppingBag size={14} />

              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#5b2bbf] text-white text-[8px] font-bold flex items-center justify-center">
                0
              </span>
            </Link>

            <Link
              to="/login"
              aria-label="Login"
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#eee4ff] hover:text-[#5b2bbf] transition cursor-pointer"
            >
              <FaUser size={13} />
            </Link>

            <Link
              to="/shop"
              className="ml-1 bg-[#5b2bbf] text-white px-5 py-2.5 rounded-full text-[11px] font-bold hover:bg-[#47209d] hover:scale-105 transition duration-300 cursor-pointer"
            >
              Shop Now
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/cart"
              aria-label="Cart"
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#eee4ff] hover:text-[#5b2bbf] transition cursor-pointer"
            >
              <FaShoppingBag size={15} />

              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#5b2bbf] text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            <Link
              to="/login"
              aria-label="Login"
              className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center text-gray-700 hover:bg-[#eee4ff] hover:text-[#5b2bbf] transition cursor-pointer"
            >
              <FaUser size={14} />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="w-10 h-10 rounded-full bg-[#eee4ff] text-[#5b2bbf] flex items-center justify-center hover:bg-[#dfd0ff] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              {menuOpen ? (
                <FaTimes size={19} />
              ) : (
                <FaBars size={19} />
              )}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen
              ? "max-h-[600px] opacity-100 pb-5"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-semibold cursor-pointer transition ${
                      isActive
                        ? "bg-[#eee4ff] text-[#5b2bbf]"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#5b2bbf]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <Link
                to="/login"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-50 text-gray-700 text-xs font-bold hover:bg-[#eee4ff] hover:text-[#5b2bbf] transition cursor-pointer"
              >
                <FaUser size={13} />
                Login
              </Link>

              <Link
                to="/shop"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#5b2bbf] text-white text-xs font-bold hover:bg-[#47209d] transition cursor-pointer"
              >
                Shop Now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
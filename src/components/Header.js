import { useState, useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const location = useLocation();

  const cartItems = useSelector((store) => store.cart.items);

  // Helper function to apply active link styling
  const isActive = (path) => location.pathname === path;

  // Close mobile menu on navigation link click
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/grocery", label: "Grocery" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 group"
          onClick={closeMenu}
        >
          <img
            alt="Food App Logo"
            className="h-14 sm:h-18 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            src={LOGO_URL}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <ul className="flex items-center space-x-2 text-sm font-medium text-slate-600">
            {/* Online Status Indicator */}
            <li className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/60 text-xs flex items-center space-x-1.5 mr-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  onlineStatus ? "bg-emerald-500 animate-pulse" : "bg-rose-500"
                }`}
              />
              <span className="text-slate-500 font-semibold">
                {onlineStatus ? "Online" : "Offline"}
              </span>
            </li>

            {/* Desktop Links */}
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isActive(path)
                      ? "text-indigo-600 font-semibold bg-indigo-50/60"
                      : "hover:text-indigo-600 hover:bg-slate-50"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Cart Link with Badge */}
            <li>
              <Link
                to="/cart"
                className={`relative flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive("/cart")
                    ? "text-indigo-600 bg-indigo-50/60 font-semibold"
                    : "hover:text-indigo-600 hover:bg-slate-50"
                }`}
              >
                <svg
                  className="w-5 h-5 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                  />
                </svg>
                <span>Cart</span>
                <span className="ml-1 px-2 py-0.5 text-xs font-bold bg-indigo-600 text-white rounded-full">
                  {cartItems.length}
                </span>
              </Link>
            </li>
          </ul>

          {/* User Profile & Auth Controls */}
          <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-slate-200">
            {loggedInUser && (
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">
                {loggedInUser}
              </span>
            )}

            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-indigo-600 rounded-lg shadow-sm transition-all duration-150 active:scale-95"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </nav>

        {/* Mobile Controls (Cart Button + Hamburger Toggle) */}
        <div className="flex items-center space-x-2 md:hidden">
          {/* Quick Cart Link for Mobile */}
          <Link
            to="/cart"
            onClick={closeMenu}
            className="relative p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
              />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute top-1 right-1 px-1.5 py-0.2 text-[10px] font-bold bg-indigo-600 text-white rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {/* Mobile Online Status Indicator */}
          <div className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-lg border border-slate-200/60 text-xs">
            <span className="text-slate-500 font-semibold">Network Status</span>
            <div className="flex items-center space-x-1.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  onlineStatus ? "bg-emerald-500 animate-pulse" : "bg-rose-500"
                }`}
              />
              <span className="font-semibold text-slate-700">
                {onlineStatus ? "Online" : "Offline"}
              </span>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="space-y-1 font-medium text-slate-600">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={closeMenu}
                  className={`block px-3 py-2.5 rounded-lg transition-colors ${
                    isActive(path)
                      ? "text-indigo-600 font-semibold bg-indigo-50/60"
                      : "hover:text-indigo-600 hover:bg-slate-50"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/cart"
                onClick={closeMenu}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                  isActive("/cart")
                    ? "text-indigo-600 font-semibold bg-indigo-50/60"
                    : "hover:text-indigo-600 hover:bg-slate-50"
                }`}
              >
                <span>Cart</span>
                <span className="px-2 py-0.5 text-xs font-bold bg-indigo-600 text-white rounded-full">
                  {cartItems.length}
                </span>
              </Link>
            </li>
          </ul>

          {/* Mobile Auth & User Profile Section */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            {loggedInUser ? (
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">
                {loggedInUser}
              </span>
            ) : (
              <span className="text-xs text-slate-400 font-medium">
                Guest User
              </span>
            )}

            <button
              onClick={() => {
                setIsLoggedIn(!isLoggedIn);
                closeMenu();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-indigo-600 rounded-lg shadow-sm transition-all duration-150"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

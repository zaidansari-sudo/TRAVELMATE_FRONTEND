"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, UserCircle, LogOut, User } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  const isHome =
    pathname === "/" ||
    pathname.startsWith("/about") ||
    pathname.startsWith("/biketrip") ||
    pathname.startsWith("/package");

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Check login status on mount and on route change
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [pathname]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setProfileOpen(false);
    setMenuOpen(false);
    router.push("/");
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          isHome
            ? scrolled
              ? "bg-white shadow-sm"
              : "bg-transparent"
            : "bg-white shadow-sm"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-6 md:py-7">

        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl sm:text-3xl font-serif tracking-wide transition-colors font-bold
            ${
              isHome && !scrolled
                ? "text-white"
                : "text-emerald-900"
            }
          `}
        >
          TRAVELMATE
        </Link>

        {/* Desktop Menu - Centered */}
        <ul
          className={`hidden md:flex items-center gap-8 font-serif font-semibold tracking-wide transition-colors absolute left-1/2 -translate-x-1/2
            ${
              isHome && !scrolled
                ? "text-white"
                : "text-gray-700"
            }
          `}
        >
          <li className="hover:text-emerald-600">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-emerald-600">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-emerald-600">
            <Link href="/package">Packages</Link>
          </li>
          <li className="hover:text-emerald-600">
            <Link href="/biketrip">Bike Trips</Link>
          </li>
          <li className="hover:text-emerald-600">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className={`px-6 py-3 rounded-full font-serif font-semibold transition-all duration-300
              ${
                isHome && !scrolled
                  ? "border border-white text-white hover:bg-white hover:text-emerald-900"
                  : "bg-emerald-700 text-white hover:bg-emerald-800"
              }
            `}
          >
            Plan Your Journey
          </Link>

          {/* Profile Icon (logged in) or Login Button */}
          {isLoggedIn ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className={`flex items-center justify-center w-11 h-11 rounded-full border-2 transition-all duration-300
                  ${
                    isHome && !scrolled
                      ? "border-white text-white hover:bg-white hover:text-emerald-900"
                      : "border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white"
                  }
                `}
              >
                <UserCircle size={24} />
              </button>

              {/* Dropdown */}
              {profileOpen && (
  <div className="absolute right-0 mt-4 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
    
    {/* Top Section */}
    <div className="px-5 py-4 bg-emerald-50 border-b border-emerald-100">
      <p className="text-sm text-gray-500">Signed in as</p>
      <p className="text-sm font-semibold text-emerald-700 truncate">
        {localStorage.getItem("userEmail") || "Traveler"}
      </p>
    </div>

    {/* Profile Link */}
    <Link
      href="/profile"
      onClick={() => setProfileOpen(false)}
      className="flex items-center gap-3 px-5 py-4 text-gray-700 font-medium hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200"
    >
      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
        <User size={16} className="text-emerald-700" />
      </div>
      View Profile
    </Link>

    {/* Divider */}
    <div className="border-t border-gray-100" />

    {/* Logout */}
    <button
      onClick={handleLogout}
      className="w-full flex items-center gap-3 px-5 py-4 text-red-500 font-medium hover:bg-red-50 transition-all duration-200"
    >
      <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
        <LogOut size={16} />
      </div>
      Log Out
    </button>
  </div>
)}
            </div>
          ) : (
            <Link
              href="/login"
              className={`px-5 py-3 rounded-full font-serif font-semibold transition-all duration-300 border-2
                ${
                  isHome && !scrolled
                    ? "border-white text-white hover:bg-white hover:text-emerald-900"
                    : "border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white"
                }
              `}
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 transition-colors
            ${
              isHome && !scrolled
                ? "text-white"
                : "text-emerald-900"
            }
          `}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          ${
            isHome && !scrolled
              ? "bg-white"
              : "bg-white"
          }
        `}
      >
        <ul className="flex flex-col items-center gap-6 py-8 font-serif font-semibold text-gray-700">
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/about">About Us</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/package">Packages</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/biketrip">Bike Trips</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/contact">Contact</Link>
          </li>

          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-6 py-3 rounded-full bg-emerald-700 text-white font-serif font-semibold hover:bg-emerald-800 transition"
          >
            Plan Your Journey
          </Link>

          {/* Mobile Login/Logout */}
          {isLoggedIn ? (
            <div className="flex flex-col items-center gap-3 w-full px-8">
              <Link
                href="/profile"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center px-6 py-3 rounded-full border-2 border-emerald-700 text-emerald-700 font-serif font-semibold hover:bg-emerald-700 hover:text-white transition flex items-center justify-center gap-2"
              >
                <User size={18} />
                View Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full px-6 py-3 rounded-full border-2 border-red-400 text-red-500 font-serif font-semibold hover:bg-red-500 hover:text-white transition flex items-center justify-center gap-2"
              >
                <LogOut size={18} />
                Log Out
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 rounded-full border-2 border-emerald-700 text-emerald-700 font-serif font-semibold hover:bg-emerald-700 hover:text-white transition"
            >
              Login
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
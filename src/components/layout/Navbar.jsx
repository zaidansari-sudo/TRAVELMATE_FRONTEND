"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/" ||
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
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-7">

        {/* Logo */}
        <Link
          href="/"
          className={`text-3xl font-serif tracking-wide group-hover:text-emerald-700 transition-colors font-bold
            ${
              isHome && !scrolled
                ? "text-white"
                : "text-emerald-900"
            }
          `}
        >
          TRAVELMATE
        </Link>

        {/* Menu - Centered */}
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

        {/* CTA Button - Right aligned */}
        <Link
          href="/login"
          className={`hidden md:block px-6 py-3 rounded-full font-serif font-semibold transition-all duration-300
            ${
              isHome && !scrolled
                ? "border border-white text-white hover:bg-white hover:text-emerald-900"
                : "bg-emerald-700 text-white hover:bg-emerald-800"
            }
          `}
        >
          Plan Your Journey
        </Link>

      </nav>
    </header>
  );
};

export default Navbar;
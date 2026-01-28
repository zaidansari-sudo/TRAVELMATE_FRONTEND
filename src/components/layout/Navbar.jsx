"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/" || pathname.startsWith("/biketrip");

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
          className={`text-3xl font-serif text-emerald-900 tracking-wide mb-2 group-hover:text-emerald-700 transition-colors font-bold
            ${
              isHome && !scrolled
                ? "text-white"
                : "text-emerald-900"
            }
          `}
        >
          TRAVELMATE
        </Link>

        {/* Menu */}
        <ul
          className={`hidden md:flex items-center gap-8 font-serif font-semibold tracking-wide transition-colors
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
            <Link href="/packages">Packages</Link>
          </li>
          <li className="hover:text-emerald-600">
            <Link href="/biketrip">Bike Trips</Link>
          </li>
          <li className="hover:text-emerald-600">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

              {/* CTA Button */}
        <div className="hidden md:block justify-self-end">
          <Link
            href="/packages"
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
        </div>

        {/* CTA placeholder to preserve layout */}
        <div className="w-[180px] hidden md:block" />

      </nav>
    </header>
  );
};

export default Navbar;

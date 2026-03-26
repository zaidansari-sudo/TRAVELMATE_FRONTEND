"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MapPin, Clock, ArrowRight, Star, Users, TrendingUp, Search, X } from "lucide-react";
import { packages } from "@/data/packages";
import { useState, useMemo, useRef, useEffect } from "react";

export default function Package() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const searchRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const suggestions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return packages;
    return packages.filter(
      (pkg) =>
        pkg.title.toLowerCase().includes(q) ||
        (pkg.region ?? "").toLowerCase().includes(q) ||
        (pkg.location ?? "").toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredPackages = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return packages;

    return packages.filter(
      (pkg) =>
        pkg.title.toLowerCase().includes(q) ||
        (pkg.region ?? "").toLowerCase().includes(q) ||
        (pkg.location ?? "").toLowerCase().includes(q)
    );
  }, [searchQuery]);

  function handleSuggestionClick(id) {
    setIsDropdownOpen(false);
    setSearchQuery("");
    router.push(`/package/${id}`);
  }

  function clearSearch() {
    setSearchQuery("");
    setIsDropdownOpen(false);
    inputRef.current?.focus();
  }

  return (
    <main className="bg-slate-50">
      {/* Hero — overflow-hidden removed so the search dropdown is not clipped */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1920&auto=format&fit=crop"
          alt="Travel Destinations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="relative text-center text-white px-6 max-w-4xl mx-auto z-10 w-full">
          <h1 className="font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Premium Travel Packages
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-10">
            Discover India's most breathtaking destinations with our expertly curated luxury experiences
          </p>

          {/* Search Bar with Autocomplete Dropdown — centered inside hero */}
          <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
              />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search packages by name or destination…"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => setIsDropdownOpen(true)}
                className="w-full pl-12 pr-10 py-5
border-2 border-emerald-500
rounded-2xl shadow-xl
focus:outline-none
focus:ring-4 focus:ring-emerald-500/20
bg-white text-gray-800
placeholder-gray-400
transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Autocomplete Dropdown */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto text-left">
                {suggestions.length > 0 ? (
                  suggestions.map((pkg) => (
                    <button
                      key={pkg.id}
                      onMouseDown={() => handleSuggestionClick(pkg.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition-colors text-left border-b border-gray-100 last:border-b-0 group"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                        <Image
                          src={pkg.images?.[0] ?? ""}
                          alt={pkg.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-emerald-700 transition-colors">
                          {pkg.title}
                        </p>
                        <div className="flex items-center gap-3 mt-0.5">
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <MapPin size={11} />
                            {pkg.region ?? pkg.location ?? "India"}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock size={11} />
                            {pkg.duration}
                          </span>
                        </div>
                      </div>

                      {/* Price */}
                      <span className="text-sm font-bold text-emerald-700 flex-shrink-0">
                        ₹{String(pkg.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-6 text-center text-gray-500 text-sm">
                    <Search size={24} className="mx-auto mb-2 text-gray-300" />
                    No packages found for &ldquo;
                    <span className="font-medium text-gray-700">{searchQuery}</span>
                    &rdquo;
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20 pt-16">

        {/* Results Count */}
        {searchQuery && (
          <p className="text-sm text-gray-600 mb-6">
            Showing{" "}
            <span className="font-semibold text-emerald-700">
              {filteredPackages.length}
            </span>{" "}
            result{filteredPackages.length !== 1 ? "s" : ""} for &ldquo;
            <span className="font-medium text-gray-800">{searchQuery}</span>
            &rdquo;
          </p>
        )}

        {/* Empty State */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-24">
            <Search size={48} className="mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">No packages found</h3>
            <p className="text-gray-500 mb-6">
              Try a different search term or clear the search to browse all packages.
            </p>
            <button
              onClick={clearSearch}
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-md"
            >
              <X size={16} /> Clear Search
            </button>
          </div>
        )}

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-emerald-300"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={pkg.images[0]}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {index < 3 && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                      <TrendingUp size={14} />
                      Popular
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {pkg.title}
                </h3>

                <div className="space-y-2.5 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} className="text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{pkg.region ?? pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} className="text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={16} className="text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium">Up to 15 travelers</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">(4.8 • 120 reviews)</span>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-emerald-700">
                      ₹{String(pkg.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                    <span className="text-sm text-gray-500">/ person</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Starting price • Customizable</p>
                </div>

                {/* CTA */}
                <Link
                  href={`/package/${pkg.id}`}
                  className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-28 px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-12 text-xl leading-relaxed">
            Let us create a custom package tailored to your preferences and budget
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all shadow-2xl hover:shadow-emerald-500/50 hover:scale-105"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
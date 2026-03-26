"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MapPin, Clock, ArrowRight, Search, X } from "lucide-react";
import { biketrips } from "@/data/biketrips";
import { useState, useMemo, useRef, useEffect } from "react";

function Biketrip() {
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
    if (!q) return biketrips;
    return biketrips.filter(
      (trip) =>
        trip.title.toLowerCase().includes(q) ||
        (trip.location ?? "").toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredTrips = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return biketrips;
    return biketrips.filter(
      (trip) =>
        trip.title.toLowerCase().includes(q) ||
        (trip.location ?? "").toLowerCase().includes(q)
    );
  }, [searchQuery]);

  function handleSuggestionClick(slug) {
    setIsDropdownOpen(false);
    setSearchQuery("");
    router.push(`/biketrip/${slug}`);
  }

  function clearSearch() {
    setSearchQuery("");
    setIsDropdownOpen(false);
    inputRef.current?.focus();
  }

  return (
    <main className="bg-[#FBFAF7]">
      {/* Hero Section — overflow-hidden removed so dropdown is not clipped */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1558981852-426c6c22a060?w=1600&q=80"
          alt="Bike trip adventure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full">

          {/* Top Tagline */}
          <p className="mb-4 text-xs md:text-sm tracking-[0.3em] uppercase text-emerald-300">
            Ride Beyond the Ordinary
          </p>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white mb-6">
            <span className="block text-gray-100">
              Travel with Strangers,
            </span>
            <span className="block text-emerald-400">
              Ride with Soulmates
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-200 max-w-2xl mx-auto font-light mb-8">
            Connect with fellow adventurers who share your vibe, your passion,
            and your thirst for the open road
          </p>

          {/* Traits */}
          <div className="mb-10 flex flex-wrap gap-6 justify-center text-xs md:text-sm tracking-wide uppercase text-white/90">
            <div>Same mindset</div>
            <div>Same adventure</div>
            <div>Unforgettable memories</div>
          </div>

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
                placeholder="Search trips by name or destination…"
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

            {/* Autocomplete Dropdown — scrollable */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto text-left">
                {suggestions.length > 0 ? (
                  suggestions.map((trip) => (
                    <button
                      key={trip.slug}
                      onMouseDown={() => handleSuggestionClick(trip.slug)}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition-colors text-left border-b border-gray-100 last:border-b-0 group"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                        <Image
                          src={trip.heroImage ?? ""}
                          alt={trip.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-emerald-700 transition-colors">
                          {trip.title}
                        </p>
                        <div className="flex items-center gap-3 mt-0.5">
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <MapPin size={11} />
                            {trip.location ?? "India"}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock size={11} />
                            {trip.duration}
                          </span>
                        </div>
                      </div>

                      {/* Price */}
                      <span className="text-sm font-bold text-emerald-700 flex-shrink-0">
                        ₹{String(trip.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-6 text-center text-gray-500 text-sm">
                    <Search size={24} className="mx-auto mb-2 text-gray-300" />
                    No trips found for &ldquo;
                    <span className="font-medium text-gray-700">{searchQuery}</span>
                    &rdquo;
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trips Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-serif mb-4 text-gray-900">
            Choose Your Adventure
          </h2>
          <p className="text-gray-600 text-lg">
            Handpicked routes designed for the ultimate riding experience
          </p>
        </div>

        {/* Results Count */}
        {searchQuery && (
          <p className="text-sm text-gray-600 mb-6">
            Showing{" "}
            <span className="font-semibold text-emerald-700">
              {filteredTrips.length}
            </span>{" "}
            result{filteredTrips.length !== 1 ? "s" : ""} for &ldquo;
            <span className="font-medium text-gray-800">{searchQuery}</span>
            &rdquo;
          </p>
        )}

        {/* Empty State */}
        {filteredTrips.length === 0 && (
          <div className="text-center py-24">
            <Search size={48} className="mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">No trips found</h3>
            <p className="text-gray-500 mb-6">
              Try a different search term or clear the search to browse all trips.
            </p>
            <button
              onClick={clearSearch}
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-md"
            >
              <X size={16} /> Clear Search
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrips.map((trip, index) => (
            <div
              key={trip.slug}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={trip.heroImage}
                  alt={trip.title}
                  width={600}
                  height={400}
                  className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-serif text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {trip.title}
                </h3>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} className="text-emerald-600" />
                    <span className="text-sm font-medium">{trip.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} className="text-emerald-600" />
                    <span className="text-sm font-medium">{trip.duration}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-2xl font-bold text-emerald-700 mb-4">
                    ₹{trip.price.toLocaleString()}
                  </p>

                  <Link
                    href={`/biketrip/${trip.slug}`}
                    className="flex items-center justify-center gap-2 w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-full font-semibold transition-all group/btn"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}

export default Biketrip;
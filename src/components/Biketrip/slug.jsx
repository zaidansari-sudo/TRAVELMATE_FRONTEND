"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { biketrips } from "@/data/biketrips";
import {
  CheckCircle,
  XCircle,
  Info,
  Star,
  MapPin,
  Clock,
  Users,
  Calendar,
  ChevronRight,
  Sparkles,
  Shield,
  Award,
  AlertCircle,
  Phone,
  Target,
  FileText,
  Footprints,
  CloudRain,
  Pill,
  Battery,
  Droplet,
} from "lucide-react";
import { useState } from "react";

export default function BiketripDetails() {
  const { slug } = useParams();
  const trip = biketrips.find((t) => t.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);

  // ── Icon mapper for "Things to Carry" ──────────────────────────────────────
  const getIconForItem = (item) => {
    const s = item.toLowerCase();
    if (s.includes("jacket") || s.includes("gloves") || s.includes("knee") || s.includes("guard") || s.includes("gear"))
      return { Icon: Shield,    bg: "bg-blue-50",    icon: "text-blue-600",   border: "border-blue-200"   };
    if (s.includes("helmet"))
      return { Icon: Shield,    bg: "bg-emerald-50", icon: "text-emerald-600",border: "border-emerald-200"};
    if (s.includes("license") || s.includes("id") || s.includes("document") || s.includes("valid"))
      return { Icon: FileText,  bg: "bg-purple-50",  icon: "text-purple-600", border: "border-purple-200" };
    if (s.includes("shoes") || s.includes("footwear") || s.includes("boot"))
      return { Icon: Footprints,bg: "bg-amber-50",   icon: "text-amber-600",  border: "border-amber-200"  };
    if (s.includes("rain") || s.includes("poncho") || s.includes("waterproof"))
      return { Icon: CloudRain, bg: "bg-sky-50",     icon: "text-sky-600",    border: "border-sky-200"    };
    if (s.includes("medicine") || s.includes("medication") || s.includes("first aid") || s.includes("personal med"))
      return { Icon: Pill,      bg: "bg-red-50",     icon: "text-red-600",    border: "border-red-200"    };
    if (s.includes("power") || s.includes("charger") || s.includes("battery") || s.includes("cable"))
      return { Icon: Battery,   bg: "bg-slate-50",   icon: "text-slate-600",  border: "border-slate-200"  };
    if (s.includes("water") || s.includes("bottle") || s.includes("hydration"))
      return { Icon: Droplet,   bg: "bg-cyan-50",    icon: "text-cyan-600",   border: "border-cyan-200"   };
    if (s.includes("sunscreen") || s.includes("sunglass") || s.includes("sun"))
      return { Icon: Award,     bg: "bg-orange-50",  icon: "text-orange-600", border: "border-orange-200" };
    if (s.includes("thermal") || s.includes("warm") || s.includes("wool") || s.includes("cloth"))
      return { Icon: Award,     bg: "bg-indigo-50",  icon: "text-indigo-600", border: "border-indigo-200" };
    return   { Icon: Award,     bg: "bg-emerald-50", icon: "text-emerald-600",border: "border-emerald-200"};
  };

  // ── 404 ────────────────────────────────────────────────────────────────────
  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-8xl mb-4">🏍️</div>
          <h1 className="text-3xl font-bold text-gray-800">Trip Not Found</h1>
          <p className="text-gray-600 mt-2">The bike trip you're looking for doesn't exist.</p>
          <Link href="/biketrip">
            <button className="mt-6 bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition">
              Browse All Trips
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // ── Build a safe, deduplicated image list ──────────────────────────────────
  const rawImages = [
    trip.heroImage,
    ...(Array.isArray(trip.images) ? trip.images : []),
  ].filter(Boolean);                          // remove null / undefined / ""
  const allImages = [...new Set(rawImages)]; // deduplicate identical URLs

  // safe arrays — guards against missing keys in some trip objects
  const highlights    = trip.highlights     ?? [];
  const itinerary     = trip.itinerary      ?? [];
  const inclusions    = trip.inclusions     ?? [];
  const exclusions    = trip.exclusions     ?? [];
  const thingsToCarry = trip.thingsToCarry  ?? [];
  const precautions   = trip.precautions    ?? [];
  const notes         = trip.notes          ?? [];
  const idealFor      = trip.idealFor       ?? [];
  const importantInfo = [...precautions, ...notes]; // merged for display

  return (
    <main className="bg-gray-50">

      {/* ════════════════════════════════════════════════
          HERO — full-bleed image with dot navigation
      ════════════════════════════════════════════════ */}
      <section className="relative h-[85vh] overflow-hidden">
        {allImages.length > 0 ? (
          <Image
            src={allImages[selectedImage]}
            alt={trip.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
            unoptimized   // allows external Unsplash URLs without next.config domain config
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Image Navigation Dots */}
        {allImages.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`h-2 rounded-full transition-all ${
                  i === selectedImage ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={14} />
            <Link href="/biketrip" className="hover:text-white transition">Bike Trips</Link>
            <ChevronRight size={14} />
            <span className="text-white">{trip.location}</span>
          </div>

          <div className="flex-1 flex flex-col justify-end">
            <div className="inline-flex items-center gap-2 bg-emerald-600 px-4 py-2 rounded-full text-white text-sm font-medium mb-4 w-fit">
              <Sparkles size={16} />
              Adventure Ride
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
              {trip.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90 text-base md:text-lg">
              {trip.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-emerald-400" />
                  <span>{trip.location}</span>
                </div>
              )}
              {trip.duration && (
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-emerald-400" />
                  <span>{trip.duration}</span>
                </div>
              )}
              {trip.difficulty && (
                <div className="flex items-center gap-2">
                  <Target size={20} className="text-amber-400" />
                  <span>{trip.difficulty}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          STICKY NAV BAR
      ════════════════════════════════════════════════ */}
      <div className="sticky top-0 z-40 bg-white border-b-2 border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex gap-6 md:gap-8 overflow-x-auto">
            {[
              { href: "#overview",  label: "Overview"        },
              { href: "#itinerary", label: "Itinerary"       },
              { href: "#includes",  label: "What's Included" },
              { href: "#notes",     label: "Important Info"  },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="text-gray-700 hover:text-emerald-600 font-medium transition whitespace-nowrap text-sm md:text-base">
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 ml-4 flex-shrink-0">
            {trip.price && (
              <span className="text-xl md:text-2xl font-bold text-emerald-700">
                ₹{trip.price.toLocaleString("en-IN")}
              </span>
            )}
            <Link href={`/book/biketrip/${trip.slug}`}>
              <button className="bg-emerald-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-emerald-700 transition shadow-lg hover:shadow-xl text-sm md:text-base">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          OVERVIEW
      ════════════════════════════════════════════════ */}
      <section id="overview" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">About This Ride</h2>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {/* Group Size */}
          <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Users className="text-white" size={28} />
            </div>
            <p className="text-sm text-gray-600 font-medium mb-1">Group Size</p>
            <p className="font-bold text-xl text-gray-900">6 – 15 Riders</p>
          </div>

          {/* Best Season */}
          <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Calendar className="text-white" size={28} />
            </div>
            <p className="text-sm text-gray-600 font-medium mb-1">Best Season</p>
            <p className="font-bold text-xl text-gray-900">{trip.bestSeason ?? "All Year"}</p>
          </div>

          {/* Duration */}
          <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Clock className="text-white" size={28} />
            </div>
            <p className="text-sm text-gray-600 font-medium mb-1">Duration</p>
            <p className="font-bold text-xl text-gray-900">{trip.duration ?? "—"}</p>
          </div>
        </div>

        {/* Ideal For */}
        {idealFor.length > 0 && (
          <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg mb-6">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Ideal For</h3>
            <div className="flex flex-wrap gap-3">
              {idealFor.map((t, i) => (
                <span key={i} className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold border-2 border-emerald-700 shadow-md flex items-center gap-1">
                  <Star size={14} className="fill-white text-white" /> {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Trip Details — start / end / difficulty */}
        {(trip.startPoint || trip.endPoint || trip.difficulty) && (
          <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Trip Details</h3>
            <div className="flex flex-wrap gap-3">
              {trip.startPoint && (
                <span className="bg-amber-500/10 text-amber-700 px-4 py-2 rounded-lg text-sm font-semibold border border-amber-400 flex items-center gap-2">
🏁 Start: {trip.startPoint}
</span>
              )}
              {trip.endPoint && (
                <span className="bg-blue-500/10 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold border border-blue-400 flex items-center gap-2">
🏴 End: {trip.endPoint}
</span>
              )}
              {trip.difficulty && (
                <span className="bg-red-500/10 text-red-700 px-4 py-2 rounded-lg text-sm font-semibold border border-red-400 flex items-center gap-2">
⚡ {trip.difficulty}
</span>
              )}
            </div>
          </div>
        )}
      </section>

      {/* ════════════════════════════════════════════════
          GALLERY
      ════════════════════════════════════════════════ */}
      {allImages.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <h2 className="text-4xl font-serif font-bold mb-8 text-gray-900">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`relative h-64 rounded-xl overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-all hover:scale-105 group ${
                  i === selectedImage ? "border-emerald-600 ring-2 ring-emerald-400" : "border-gray-200 hover:border-emerald-600"
                }`}
              >
                <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════
          HIGHLIGHTS
      ════════════════════════════════════════════════ */}
      {highlights.length > 0 && (
        <section className="bg-white py-20 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold mb-12 text-gray-900">Trip Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-emerald-600 transition-all flex items-start gap-4"
                >
                  <div className="bg-emerald-600 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-white" size={20} />
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════
          ITINERARY TIMELINE
      ════════════════════════════════════════════════ */}
      {itinerary.length > 0 && (
        <section id="itinerary" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold mb-12 text-gray-900">Day by Day Itinerary</h2>
            <div className="space-y-6">
              {itinerary.map((day, i) => (
                <div key={i} className="flex gap-6 group">
                  {/* Day number bubble */}
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  {/* Day card */}
                  <div className="flex-1 bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-emerald-600 transition-all">
                    {/* day label, e.g. "Day 1" */}
                    {day.day && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                        <Calendar size={14} />
                        <span className="font-medium">{day.day}</span>
                      </div>
                    )}
                    {/* title */}
                    {day.title && (
                      <h4 className="font-bold text-xl mb-2 text-gray-900">{day.title}</h4>
                    )}
                    {/* description */}
                    {day.desc && (
                      <p className="text-gray-600 leading-relaxed">{day.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════
          INCLUSIONS & EXCLUSIONS
      ════════════════════════════════════════════════ */}
      {(inclusions.length > 0 || exclusions.length > 0) && (
        <section id="includes" className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Inclusions */}
            {inclusions.length > 0 && (
              <div className="bg-emerald-50 border-2 border-emerald-600 p-8 rounded-xl shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-emerald-600 p-3 rounded-lg shadow-md">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-gray-900">What's Included</h3>
                </div>
                <ul className="space-y-3">
                  {inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800 bg-white border border-emerald-200 p-4 rounded-lg shadow-sm">
                      <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Exclusions */}
            {exclusions.length > 0 && (
              <div className="bg-red-50 border-2 border-red-600 p-8 rounded-xl shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-600 p-3 rounded-lg shadow-md">
                    <XCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-gray-900">Not Included</h3>
                </div>
                <ul className="space-y-3">
                  {exclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800 bg-white border border-red-200 p-4 rounded-lg shadow-sm">
                      <XCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════
          THINGS TO CARRY
      ════════════════════════════════════════════════ */}
      {thingsToCarry.length > 0 && (
        <section className="bg-white border-y border-gray-200 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold mb-12 text-gray-900">Things to Carry</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {thingsToCarry.map((item, i) => {
                const { Icon, bg, icon, border } = getIconForItem(item);
                return (
                  <div
                    key={i}
                    className={`bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 ${border} hover:scale-105`}
                  >
                    <div className={`w-14 h-14 ${bg} rounded-xl mx-auto mb-3 flex items-center justify-center`}>
                      <Icon size={24} className={icon} />
                    </div>
                    <span className="text-sm text-gray-700 font-medium leading-relaxed">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════
          NOTES & PRECAUTIONS (merged)
      ════════════════════════════════════════════════ */}
      {importantInfo.length > 0 && (
        <section id="notes" className="bg-blue-50 border-y-4 border-blue-600 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-600 p-3 rounded-lg shadow-md">
                <Info className="text-white" size={28} />
              </div>
              <h2 className="text-4xl font-serif font-bold text-gray-900">Important Information</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {importantInfo.map((n, i) => (
                <div key={i} className="bg-white border-2 border-blue-200 p-5 rounded-lg shadow-lg hover:shadow-xl hover:border-blue-600 transition-all flex gap-3">
                  <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-800 font-medium">{n}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════════════════════ */}

      {/* ════════════════════════════════════════════════
          PRICE CTA
      ════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border-4 border-emerald-600 rounded-2xl shadow-2xl p-12 text-center">
            <div className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              LIMITED SEATS AVAILABLE
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">Ready to Hit the Road?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
              Book your seat now and join hundreds of riders who've conquered this legendary route. Don't miss out!
            </p>

            {trip.price && (
              <div className="flex items-baseline justify-center gap-2 mb-8">
                <p className="text-5xl font-bold text-emerald-700">
                  ₹{trip.price.toLocaleString("en-IN")}
                </p>
                <p className="text-sm text-gray-600 font-medium">per person</p>
              </div>
            )}

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={`/book/biketrip/${trip.slug}`}>
                <button className="bg-emerald-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition shadow-lg hover:shadow-xl">
                  Book This Ride
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition shadow-md">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/data/packages";
import { 
  CheckCircle, 
  XCircle, 
  Info, 
  Tag, 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  Calendar,
  Share2,
  Heart,
  Download,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { useState } from "react";

export default function PackageDetails() {
  const { slug } = useParams();
  const pkg = packages.find((p) => p.id === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-8xl mb-4">🗺️</div>
          <h1 className="text-3xl font-bold text-gray-800">Package Not Found</h1>
          <p className="text-gray-600 mt-2">The travel package you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-gray-50">

      {/* ENHANCED HERO SECTION */}
      <section className="relative h-[85vh] overflow-hidden">
        <Image
          src={pkg.images[selectedImage]}
          alt={pkg.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {pkg.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(i)}
              className={`h-2 rounded-full transition-all ${
                i === selectedImage 
                  ? "w-8 bg-white" 
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>Packages</span>
            <ChevronRight size={14} />
            <span className="text-white">{pkg.region}</span>
          </div>

          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-emerald-600 px-4 py-2 rounded-full text-white text-sm font-medium mb-4">
                <Sparkles size={16} />
                Popular Choice
              </div>
              
              <h1 className="text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                {pkg.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-emerald-400" />
                  <span>{pkg.region}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-emerald-400" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <span>4.9 (128 reviews)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button 
                onClick={() => setIsFavorited(!isFavorited)}
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all hover:scale-110"
                aria-label="Add to favorites"
              >
                <Heart size={24} className={isFavorited ? "fill-red-500 text-red-500" : ""} />
              </button>
              <button 
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all hover:scale-110"
                aria-label="Share package"
              >
                <Share2 size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO BAR */}
      <section className="sticky top-0 z-40 bg-white border-b-2 border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex gap-8">
            <a href="#overview" className="text-gray-700 hover:text-emerald-600 font-medium transition">Overview</a>
            <a href="#itinerary" className="text-gray-700 hover:text-emerald-600 font-medium transition">Itinerary</a>
            <a href="#includes" className="text-gray-700 hover:text-emerald-600 font-medium transition">What's Included</a>
            <a href="#notes" className="text-gray-700 hover:text-emerald-600 font-medium transition">Important Info</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-emerald-700">
  ₹{pkg.price.toLocaleString()}
</span>

           <Link href={`/book/package/${pkg.id}`}>
  <button className="bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-700 transition shadow-lg hover:shadow-xl">
    Book Now
  </button>
</Link>

          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">About This Experience</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">{pkg.overview}</p>
        
        {/* Quick Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Users className="text-white" size={28} />
            </div>
            <p className="text-sm text-gray-600 font-medium mb-1">Group Size</p>
            <p className="font-bold text-xl text-gray-900">2-12 people</p>
          </div>
          <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Calendar className="text-white" size={28} />
            </div>
            <p className="text-sm text-gray-600 font-medium mb-1">Availability</p>
            <p className="font-bold text-xl text-gray-900">Year Round</p>
          </div>
          <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Clock className="text-white" size={28} />
            </div>
            <p className="text-sm text-gray-600 font-medium mb-1">Duration</p>
            <p className="font-bold text-xl text-gray-900">{pkg.duration}</p>
          </div>
        </div>

        {/* Travel Style & Ideal For - Inline */}
        <div className="space-y-6">
          <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Travel Style</h3>
            <div className="flex flex-wrap gap-3">
              {pkg.travelStyle.map((t, i) => (
                <span key={i} className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold border-2 border-emerald-700 shadow-md">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Ideal For</h3>
            <div className="flex flex-wrap gap-3">
              {pkg.idealFor.map((t, i) => (
                <span key={i} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold border-2 border-blue-700 shadow-md flex items-center gap-1">
                  <Star size={14} fill="white" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-serif font-bold mb-8 text-gray-900">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pkg.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(i)}
              className="relative h-64 rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-emerald-600 transition-all hover:scale-105 group"
            >
              <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      </section>

      {/* ITINERARY TIMELINE */}
      <section id="itinerary" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold mb-12 text-gray-900">Day by Day Itinerary</h2>

          <div className="space-y-6">
            {pkg.itinerary.map((day, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <div className="flex-1 bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-emerald-600 transition-all">
                  <h4 className="font-bold text-xl mb-2 text-gray-900">Day {i + 1}</h4>
                  <p className="text-gray-600 leading-relaxed">{day}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDES & EXCLUDES */}
      <section id="includes" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Includes */}
          <div className="bg-emerald-50 border-2 border-emerald-600 p-8 rounded-xl shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-600 p-3 rounded-lg shadow-md">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900">What's Included</h3>
            </div>
            <ul className="space-y-3">
              {pkg.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800 bg-white border border-emerald-200 p-4 rounded-lg shadow-sm">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Excludes */}
          <div className="bg-red-50 border-2 border-red-600 p-8 rounded-xl shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 p-3 rounded-lg shadow-md">
                <XCircle className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900">Not Included</h3>
            </div>
            <ul className="space-y-3">
              {pkg.excludes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-800 bg-white border border-red-200 p-4 rounded-lg shadow-sm">
                  <XCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* NOTES */}
      <section id="notes" className="bg-blue-50 border-y-4 border-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-600 p-3 rounded-lg shadow-md">
              <Info className="text-white" size={28} />
            </div>
            <h2 className="text-4xl font-serif font-bold text-gray-900">Important Information</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {pkg.notes.map((n, i) => (
              <div key={i} className="bg-white border-2 border-blue-200 p-5 rounded-lg shadow-lg hover:shadow-xl hover:border-blue-600 transition-all flex gap-3">
                <Info className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-800 font-medium">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENHANCED PRICE CTA */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border-4 border-emerald-600 rounded-2xl shadow-2xl p-12 text-center">
            <div className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              LIMITED TIME OFFER
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">Ready for an Adventure?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
              Book now and save 15% on your dream vacation. Limited spots available for this month!
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-left">
                <p className="text-sm text-gray-500 line-through">
  {"₹45,999"}
</p>

                <p className="text-5xl font-bold text-emerald-700">{pkg.price}</p>
                <p className="text-sm text-gray-600 font-medium">per person</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={`/book/package/${pkg.id}`}>
  <button className="bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold">
    Book This Package
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
"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Star, Users, Calendar, TrendingUp } from "lucide-react";
import { packages } from "@/data/packages";

export default function Package() {
  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Travel Destinations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="relative text-center text-white px-6 max-w-4xl mx-auto z-10">
          <div className="inline-block mb-6">
          </div>

          <h1 className="font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Premium Travel Packages
          </h1>

          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover India's most breathtaking destinations with our expertly curated luxury experiences
          </p>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-white border-y border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10K+</div>
              <div className="text-sm text-gray-600 font-medium">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">4.9★</div>
              <div className="text-sm text-gray-600 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section (Optional - you can add filtering logic later) */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Explore Our Packages</h2>
            <p className="text-gray-600">Find the perfect getaway for your next adventure</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 font-medium">Sort by:</span>
            <select className="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all cursor-pointer">
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Duration</option>
            </select>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.slug} 
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-emerald-300"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image 
                  src={pkg.images[0]} 
                  alt={pkg.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                
                {/* Popular Badge */}
                {index < 3 && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                      <TrendingUp size={14} />
                      Popular
                    </span>
                  </div>
                )}

                {/* Quick View Overlay */}
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
                    <span className="text-sm font-medium">{pkg.location}</span>
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
                      ₹{pkg.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500">/ person</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Starting price • Customizable</p>
                </div>

                {/* CTA Button */}
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
      {/* CTA Section */}
<section className="relative py-24 md:py-28 px-6 text-center text-white overflow-hidden">
  
  {/* Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900" />
  
  {/* Subtle Pattern Overlay */}
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
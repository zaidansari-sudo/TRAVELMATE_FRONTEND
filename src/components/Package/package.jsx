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
      <section className="bg-emerald-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Let us create a custom package tailored to your preferences and budget
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TravelMate?</h3>
            <p className="text-gray-600 text-lg">Experience the difference with India's trusted travel partner</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-slate-50 border border-gray-200 hover:border-emerald-300 transition-all">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Calendar size={32} className="text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Flexible Booking</h4>
              <p className="text-gray-600">Easy rescheduling and cancellation policies for your peace of mind</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-slate-50 border border-gray-200 hover:border-emerald-300 transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Users size={32} className="text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Expert Guides</h4>
              <p className="text-gray-600">Knowledgeable local guides who bring destinations to life</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-slate-50 border border-gray-200 hover:border-emerald-300 transition-all">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Star size={32} className="text-amber-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Premium Experience</h4>
              <p className="text-gray-600">Handpicked accommodations and exclusive experiences</p>
            </div>
          </div>
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
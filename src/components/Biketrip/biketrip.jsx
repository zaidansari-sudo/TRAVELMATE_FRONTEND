"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { biketrips } from "@/data/biketrips";

function Biketrip() {
  return (
    <main className="bg-[#FBFAF7]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558981852-426c6c22a060?w=1600&q=80"
          alt="Bike trip adventure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

          {/* Top Tagline — matches Home hero */}
          <p className="mb-4 text-xs md:text-sm tracking-[0.3em] uppercase text-emerald-300">
            Ride Beyond the Ordinary
          </p>

          {/* Heading — serif, editorial */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white mb-6">
            <span className="block text-gray-100">
              Travel with Strangers,
            </span>
            <span className="block text-emerald-400">
              Ride with Soulmates
            </span>
          </h1>

          {/* Description — lighter weight */}
          <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-200 max-w-2xl mx-auto font-light">
            Connect with fellow adventurers who share your vibe, your passion,
            and your thirst for the open road
          </p>

          {/* Traits */}
          <div className="mt-8 flex flex-wrap gap-6 justify-center text-xs md:text-sm tracking-wide uppercase text-white/90">
            <div>Same mindset</div>
            <div>Same adventure</div>
            <div>Unforgettable memories</div>
          </div>
        </div>
      </section>

      {/* Trips Section (UNCHANGED) */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-serif mb-4 text-gray-900">
            Choose Your Adventure
          </h2>
          <p className="text-gray-600 text-lg">
            Handpicked routes designed for the ultimate riding experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {biketrips.map((trip, index) => (
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

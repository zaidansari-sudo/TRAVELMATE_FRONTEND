"use client";
import React, { useState } from "react";
import { MapPin, ArrowUpRight, Sparkles, Mountain, Waves, Trees, Home } from "lucide-react";

const regions = [
  {
    number: "01",
    title: "Northeast India",
    subtitle: "The Unexplored Frontier",
    places: ["Meghalaya", "Arunachal Pradesh", "Nagaland", "Sikkim"],
    icon: Trees,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop",
    description: "Mystical valleys and living root bridges"
  },
  {
    number: "02",
    title: "Konkan Coast",
    subtitle: "Hidden Shores & Sea Forts",
    places: ["Malvan", "Gokarna", "Tarkarli", "Vengurla"],
    icon: Waves,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    description: "Pristine beaches and historic fortresses"
  },
  {
    number: "03",
    title: "Central India",
    subtitle: "Wilderness & Heritage",
    places: ["Orchha", "Panna", "Chanderi", "Mandu"],
    icon: Home,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&h=600&fit=crop",
    description: "Ancient palaces and wildlife sanctuaries"
  },
  {
    number: "04",
    title: "Himalayan Villages",
    subtitle: "Where Mountains Meet Sky",
    places: ["Spiti", "Kinnaur", "Chopta", "Munsiyari"],
    icon: Mountain,
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description: "High-altitude monasteries and snowy peaks"
  },
];

const FeaturedTerritories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-[#F3FAF7] via-white to-[#F3FAF7] py-24 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-emerald-100 mb-6">
            <MapPin className="w-4 h-4 text-emerald-700" />
            <p className="text-xs tracking-[0.35em] uppercase text-emerald-700 font-bold">
              Regions We Specialize In
            </p>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl mb-6">
            <span className="text-gray-900">Featured </span>
            <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
              Territories
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Four distinct realms of India, each offering a unique tapestry of
            landscapes, cultures, and hidden wonders waiting to be uncovered.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-300" />
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-300" />
          </div>
        </div>

        {/* Territory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {regions.map((region, index) => {
            const Icon = region.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`
                  absolute -inset-1 bg-gradient-to-r ${region.color} rounded-3xl 
                  opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700
                `} />

                {/* Main card */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent">
                  {/* Image header with overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={region.image} 
                      alt={region.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent`} />
                    
                    {/* Large number watermark */}
                    <span className="absolute top-4 right-6 text-[80px] font-serif text-white/20 leading-none select-none">
                      {region.number}
                    </span>

                    {/* Icon badge */}
                    <div className={`
                      absolute bottom-4 left-6 w-12 h-12 rounded-xl ${region.bgColor} 
                      flex items-center justify-center backdrop-blur-sm
                      transition-all duration-500 group-hover:scale-110 group-hover:rotate-12
                      shadow-lg
                    `}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${region.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <Icon className={`w-6 h-6 relative z-10 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-emerald-700'}`} />
                    </div>

                    {/* Number badge */}
                    <div className="absolute top-4 left-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className={`text-xs font-bold bg-gradient-to-r ${region.color} bg-clip-text text-transparent`}>
                        {region.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Title and subtitle */}
                    <div className="mb-6">
                      <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                        {region.title}
                      </h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${region.color} bg-clip-text text-transparent mb-2`}>
                        {region.subtitle}
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        {region.description}
                      </p>
                    </div>

                    {/* Places grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {region.places.map((place, idx) => (
                        <div
                          key={idx}
                          className={`
                            flex items-center gap-2 px-3 py-2 rounded-lg ${region.bgColor}
                            transition-all duration-300
                            ${isHovered ? 'translate-x-1' : 'translate-x-0'}
                          `}
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${region.color}`} />
                          <span className="text-sm text-gray-700 font-medium">{place}</span>
                        </div>
                      ))}
                    </div>

                    {/* Explore button */}
                    <button className={`
                      group/btn flex items-center gap-2 w-full justify-center
                      bg-gradient-to-r ${region.color} text-white
                      px-6 py-3 rounded-xl font-semibold text-sm
                      transition-all duration-300 shadow-md hover:shadow-lg
                      hover:scale-105 active:scale-95
                    `}>
                      <span>Explore Region</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
                    <div className={`
                      absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${region.color}
                      opacity-0 group-hover:opacity-5 transition-all duration-500
                      transform translate-x-16 translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0
                    `} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <a
              href="/packages"
              className="group inline-flex items-center gap-3 bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <MapPin className="w-5 h-5" />
              <span>Explore All Destinations</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};

export default FeaturedTerritories;
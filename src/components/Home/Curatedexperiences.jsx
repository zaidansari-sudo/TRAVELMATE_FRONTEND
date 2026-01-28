"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Leaf, Palette, Mountain, Heart, ArrowRight, Sparkles } from "lucide-react";

const experiences = [
  {
    title: "Slow Travel",
    desc: "Immersive journeys that honor local rhythms, allowing you to truly absorb each destination's essence.",
    features: ["Local homestays", "Cultural workshops", "Authentic cuisine"],
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80"
  },
  {
    title: "Cultural Immersion",
    desc: "Authentic encounters with artisans, storytellers, and keepers of traditions passed through generations.",
    features: ["Artisan meet-ups", "Traditional crafts", "Folk performances"],
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80"
  },
  {
    title: "Nature Escapes",
    desc: "Pristine wilderness experiences in protected forests, remote valleys, and untouched coastlines.",
    features: ["Wildlife safaris", "Trekking trails", "Eco-lodges"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
  },
  {
    title: "Wellness Retreats",
    desc: "Rejuvenating sojourns blending ancient healing traditions with serene natural settings.",
    features: ["Yoga sessions", "Ayurvedic spa", "Meditation"],
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80"
  },
];

const CuratedExperiences = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-[#F3FAF7] via-white to-[#F3FAF7] py-24 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-md border border-emerald-100 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <p className="text-xs tracking-[0.35em] uppercase text-emerald-700 font-bold">
              Experiences
            </p>
          </div>

          {/* Main heading */}
          <h2 className="font-serif text-4xl md:text-6xl mb-6">
            <span className="text-gray-900">Curated </span>
            <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Every journey is crafted around meaningful moments—designed to
            connect you with the soul of a place, not just its surface.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-300" />
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-300" />
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />

                {/* Card */}
                <div className="relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden">
                  {/* Image container */}
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute bottom-6 left-6">
                      <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                        <span className="text-sm font-bold text-gray-900">{item.title}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="p-8 md:p-10">
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                      {item.desc}
                    </p>

                    {/* Features list */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-gray-700 border border-gray-200 transition-all duration-300 group-hover:scale-105 group-hover:border-transparent"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Learn more link */}
                    <Link href="/packages" className="inline-block">
  <button className="group/btn flex items-center gap-2 text-emerald-700 font-semibold text-sm hover:text-emerald-800 transition-colors">
    <span className="relative">
      Explore More
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 group-hover/btn:w-full transition-all duration-300" />
    </span>
    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
  </button>
</Link>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-all duration-500 transform translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Can't find what you're looking for? We craft custom experiences tailored to your dreams.
          </p>
          <button className="group/cta inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105">
            <span>Design Your Journey</span>
            <Sparkles className="w-5 h-5 group-hover/cta:rotate-12 transition-transform" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default CuratedExperiences;
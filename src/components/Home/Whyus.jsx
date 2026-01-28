"use client";
import React, { useState } from "react";
import { Shield, Users, Map, Star, Award, TrendingUp, Check } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Exclusive Access",
    desc: "Private entries to heritage sites, artisan workshops, and experiences unavailable to the public.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    benefits: ["Private tours", "VIP access", "Behind-the-scenes"]
  },
  {
    icon: Users,
    title: "Local Expertise",
    desc: "Accompanied by regional specialists who share insider knowledge and personal connections.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-blue-50",
    benefits: ["Expert guides", "Local insights", "Cultural context"]
  },
  {
    icon: Map,
    title: "Bespoke Itineraries",
    desc: "Every journey tailored to your interests, pace, and desire for discovery.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-purple-50",
    benefits: ["Custom routes", "Flexible timing", "Your preferences"]
  },
  {
    icon: Star,
    title: "Luxury Stays",
    desc: "Hand-selected heritage homes, boutique retreats, and exclusive wilderness camps.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-amber-50",
    benefits: ["Premium hotels", "Unique stays", "Exceptional service"]
  },
];

const WhyUs = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-[#FBFAF7] via-white to-[#FBFAF7] py-24 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Heading */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-md border border-emerald-100 mb-6">
              <Award className="w-4 h-4 text-emerald-700" />
              <p className="text-xs tracking-[0.35em] uppercase text-emerald-700 font-bold">
                The TRAVELMATE Difference
              </p>
            </div>

            <h2 className="font-serif text-4xl md:text-6xl mb-6">
              <span className="text-gray-900">Why Travel </span>
              <span className="block bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                With Us
              </span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We believe the most profound journeys happen off the beaten path.
              With over a decade of exploring India's hidden corners, we've built
              relationships and access that transform ordinary trips into
              extraordinary memories.
            </p>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-gray-700">Certified Travel Experts</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-gray-700">Award-Winning Service</span>
              </div>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {[
              { value: "150+", label: "Hidden Destinations", icon: Map, trend: "+25 this year" },
              { value: "12", label: "Years of Expertise", icon: TrendingUp, trend: "Since 2014" },
              { value: "98%", label: "Guest Satisfaction", icon: Star, trend: "5-star reviews" },
            ].map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                          <StatIcon className="w-4 h-4 text-emerald-700" />
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl bg-gradient-to-br from-emerald-700 to-teal-600 bg-clip-text text-transparent font-bold">
                          {stat.value}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-700 font-semibold mb-1">{stat.label}</p>
                      <p className="text-xs text-emerald-600 font-medium">{stat.trend}</p>
                    </div>
                    
                    {/* Animated indicator */}
                    <div className={`
                      w-2 h-2 rounded-full bg-emerald-500 transition-all duration-500
                      ${hoveredStat === i ? 'scale-150 ring-4 ring-emerald-200' : 'scale-100'}
                    `} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative divider */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-6">
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Features List - Flowing Layout */}
        <div className="space-y-16">
          {features.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Connecting line for flow */}
                {index < features.length - 1 && (
                  <div className="absolute left-1/2 -bottom-16 w-px h-16 bg-gradient-to-b from-emerald-200 to-transparent hidden md:block" />
                )}

                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
                  {/* Icon Side */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Animated glow ring */}
                      <div className={`
                        absolute -inset-4 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700
                      `} />
                      
                      {/* Outer ring */}
                      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-emerald-50 to-teal-50 p-1 group-hover:scale-110 transition-transform duration-500">
                        {/* Inner circle */}
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-500">
                          <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}>
                            <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Orbiting dots */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Number indicator */}
                    <div className={`inline-flex items-center gap-3 mb-4 ${!isEven && 'md:justify-end md:ml-auto'}`}>
                      <div className="w-8 h-px bg-gradient-to-r from-emerald-300 to-transparent" />
                      <span className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-br from-emerald-100 to-teal-100 bg-clip-text text-transparent">
                        0{index + 1}
                      </span>
                      <div className="w-8 h-px bg-gradient-to-l from-emerald-300 to-transparent" />
                    </div>

                    {/* Title with gradient underline */}
                    <div className="mb-4">
                      <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto md:mx-0 group-hover:w-32 transition-all duration-500" />
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0">
                      {item.desc}
                    </p>

                    {/* Benefits - Horizontal Pills */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      {item.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="group/pill relative overflow-hidden"
                        >
                          <div className={`
                            absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300
                          `} />
                          <div className="relative flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-100 rounded-full group-hover/pill:border-transparent transition-all duration-300">
                            <Check className="w-4 h-4 text-emerald-600 group-hover/pill:text-white transition-colors duration-300" />
                            <span className="text-sm font-semibold text-gray-700 group-hover/pill:text-white transition-colors duration-300">
                              {benefit}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative background element */}
                <div className={`
                  absolute top-1/2 -translate-y-1/2 ${isEven ? 'left-0' : 'right-0'} -z-10
                  w-64 h-64 bg-gradient-to-br ${item.color} rounded-full 
                  opacity-0 group-hover:opacity-5 blur-3xl transition-all duration-700
                `} />
              </div>
            );
          })}
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
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default WhyUs;
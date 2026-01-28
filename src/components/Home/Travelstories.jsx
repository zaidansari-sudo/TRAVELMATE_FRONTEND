"use client";
import React, { useState } from "react";
import { Quote, Star, MapPin, Heart, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
  {
    quote:
      "TRAVELMATE showed us an India we never knew existed. The hidden village stays and local encounters were beyond anything we imagined.",
    name: "Sarah & James Mitchell",
    location: "London, UK",
    journey: "Northeast Discovery",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    color: "from-blue-500 to-cyan-500"
  },
  {
    quote:
      "Pure magic. From the forgotten heritage towns to the pristine beaches—every moment felt like a precious secret shared just with us.",
    name: "Priya Sharma",
    location: "Mumbai, India",
    journey: "Konkan Coastal Journey",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    color: "from-blue-500 to-cyan-500"
  },
  {
    quote:
      "The attention to detail and depth of local knowledge transformed our trip into a genuine cultural immersion. Simply extraordinary.",
    name: "Thomas Weber",
    location: "Zurich, Switzerland",
    journey: "Himalayan Heritage",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    color: "from-blue-500 to-cyan-500"
  },
];

const TravelerStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#FBFAF7] via-white to-[#FBFAF7] py-24 px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-emerald-100 mb-6">
            <Heart className="w-4 h-4 text-emerald-700" />
            <p className="text-xs tracking-[0.35em] uppercase text-emerald-700 font-bold">
              Traveler Stories
            </p>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl mb-6">
            <span className="text-gray-900">Voices of </span>
            <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
              Discovery
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Real experiences from travelers who ventured beyond the ordinary
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-300" />
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-300" />
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {stories.map((story, index) => {
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
                  absolute -inset-1 bg-gradient-to-r ${story.color} rounded-3xl 
                  opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500
                `} />

                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden h-full flex flex-col">
                  {/* Quote icon background */}
                  <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Quote className="w-24 h-24 text-gray-900" />
                  </div>

                  {/* Quote icon */}
                  <div className={`
                    w-14 h-14 rounded-2xl bg-gradient-to-br ${story.color} 
                    flex items-center justify-center mb-6 shadow-lg
                    transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12
                  `}>
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 fill-amber-400 text-amber-400 transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-gray-800 leading-relaxed mb-8 flex-grow text-base relative z-10">
                    "{story.quote}"
                  </p>

                  {/* Divider */}
                  <div className={`h-px w-full bg-gradient-to-r ${story.color} opacity-20 mb-6`} />

                  {/* Author section */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="relative">
                      <div className={`absolute -inset-1 bg-gradient-to-r ${story.color} rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity`} />
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                      />
                    </div>

                    {/* Author details */}
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 mb-1">
                        {story.name}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                        <MapPin className="w-3 h-3" />
                        <span>{story.location}</span>
                      </div>
                      <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${story.color} bg-opacity-10`}>
                        <p className={`text-xs font-bold bg-gradient-to-r ${story.color} bg-clip-text text-transparent`}>
                          {story.journey}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                    <div className={`
                      absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${story.color}
                      opacity-0 group-hover:opacity-5 transition-all duration-500
                      transform translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0
                    `} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {stories.map((story, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${story.color} flex items-center justify-center mb-6 shadow-md`}>
                      <Quote className="w-5 h-5 text-white" />
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-gray-800 leading-relaxed mb-6">
                      "{story.quote}"
                    </p>

                    <div className={`h-px w-full bg-gradient-to-r ${story.color} opacity-20 mb-6`} />

                    <div className="flex items-center gap-4">
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div>
                        <p className="font-bold text-gray-900">{story.name}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {story.location}
                        </p>
                        <p className={`text-xs font-semibold bg-gradient-to-r ${story.color} bg-clip-text text-transparent mt-1`}>
                          {story.journey}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white border-2 border-emerald-600 text-emerald-700 rounded-full hover:bg-emerald-600 hover:text-white transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-emerald-600' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white border-2 border-emerald-600 text-emerald-700 rounded-full hover:bg-emerald-600 hover:text-white transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { value: "500+", label: "Happy Travelers", icon: Heart },
            { value: "4.9/5", label: "Average Rating", icon: Star },
            { value: "98%", label: "Would Recommend", icon: Sparkles }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-3">
                  <Icon className="w-5 h-5 text-emerald-700" />
                </div>
                <p className="text-3xl font-serif font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
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
      `}</style>
    </section>
  );
};

export default TravelerStories;
"use client";

import React, { useRef, useState, useEffect } from "react";
import { MapPin, Users, Heart, Compass, Camera, Mountain, Bike } from "lucide-react";

function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-white text-gray-900 overflow-hidden">
     {/* HERO */}
<section className="relative h-[85vh] md:h-screen w-full px-6 overflow-hidden">

  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&q=80"
    alt="About TravelMate"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Strong Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />

  <div className="relative z-10 flex h-full items-center justify-center">
    <div className="max-w-4xl text-center text-white px-4 backdrop-blur-[2px]">

      {/* Tagline */}
      <p className="mb-6 text-xs md:text-sm tracking-[0.4em] uppercase text-emerald-400 font-semibold">
        ABOUT TRAVELMATE
      </p>

      {/* Main Heading */}
      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
        <span className="block text-white">
          Travel Beyond
        </span>
        <span className="block text-emerald-400">
          The Obvious
        </span>
      </h1>

      {/* Description */}
      <p className="mt-8 text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
        TRAVELMATE exists to uncover India beyond the familiar — beyond landmarks,
        crowds, and predictable itineraries. We bring you closer to villages,
        rituals, heritage, and stories that define India’s living culture.
      </p>

    </div>
  </div>
</section>

      {/* IMAGE GALLERY SECTION */}
      <section className="py-20 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 px-5 py-2.5 rounded-full mb-6">
              <Camera className="w-4 h-4 text-emerald-700" />
              <p className="text-xs tracking-[0.35em] uppercase text-emerald-700 font-bold">
                Visual Journey
              </p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-gray-900">
              India Through Our Lens
            </h2>
            <div className="w-60 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto" />
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80", span: "md:col-span-2 md:row-span-2" },
              { img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", span: "" },
              { img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80", span: "" },
              { img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80", span: "" },
              { img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80", span: "" },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl ${item.span} h-64 md:h-auto`}
              >
                <img 
                  src={item.img} 
                  alt={`India destination ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY with Enhanced Cards */}
      <section className="py-20 md:py-24 px-6 bg-gradient-to-b from-emerald-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-gray-900">
              Our Philosophy
            </h2>
            <div className="w-60 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-100 rounded-3xl p-8 border border-emerald-300 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-2xl mb-4 text-gray-900">Slow & Immersive</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe meaningful travel is slow, immersive, and human. It's about
                  listening to stories, understanding traditions, and respecting the land
                  and people who call it home.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-100 rounded-3xl p-8 border border-emerald-300 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-2xl mb-4 text-gray-900">Living Civilization</h3>
                <p className="text-gray-600 leading-relaxed">
                  From ancient temple towns and tribal heartlands to coastal hamlets and
                  mountain villages, our journeys celebrate India as a living civilization.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-emerald-900 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
              
              <div className="relative z-10">
                <h3 className="font-serif text-2xl mb-8 text-emerald-100">What We Offer</h3>
                <ul className="space-y-5">
                  {[
                    { icon: MapPin, text: "Hidden villages & cultural landscapes" },
                    { icon: Users, text: "Local historians, artisans & families" },
                    { icon: Heart, text: "Slow, immersive travel experiences" },
                    { icon: Bike, text: "Bike expeditions through scenic routes" },
                    { icon: Compass, text: "Culture-first, community-respecting journeys" },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors flex-shrink-0">
                        <item.icon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <p className="text-white/90 group-hover:text-white transition-colors">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURAL JOURNEY - Enhanced Timeline with Images */}
      <section className="py-20 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              A Cultural Journey Across India
            </h2>
            <div className="w-96 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto" />
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Himalayan Heartlands",
                desc: "Remote villages where ancient rituals, monasteries, and mountain life remain unchanged.",
                color: "from-teal-500 to-emerald-500",
                img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80"
              },
              {
                title: "Desert & Tribal Cultures",
                desc: "Indigenous communities, folk traditions, crafts, and stories passed through generations.",
                color: "from-teal-500 to-emerald-500",
                img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80"
              },
              {
                title: "Sacred Temple Towns",
                desc: "Living spiritual centers where daily life follows centuries-old rhythms and beliefs.",
                color: "from-teal-500 to-emerald-500",
                img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80"
              },
              {
                title: "Coastal & Maritime Heritage",
                desc: "Forgotten ports, fishing communities, and cultures shaped by the sea.",
                color: "from-teal-500 to-emerald-500",
                img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80"
              },
              {
                title: "Mountain Bike Expeditions",
                desc: "Explore India's hidden trails on two wheels—from winding mountain passes to rural backroads, experiencing landscapes and cultures at your own pace.",
                color: "from-emerald-500 to-cyan-500",
                img: "/aboutus.png"

              },
            ].map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="group relative">
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                    {/* Image */}
                    <div className="w-full md:w-5/12 flex-shrink-0">
                      <div className="relative overflow-hidden rounded-3xl shadow-xl">
                        <img 
                          src={item.img} 
                          alt={item.title}
                          className="w-full h-64 md:h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-100 rounded-3xl p-8 md:p-10 border border-emerald-300 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                        <h3 className="font-serif text-2xl md:text-3xl mb-4 text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">{item.desc}</p>
                        <div className={`mt-6 w-24 h-1 bg-gradient-to-r ${item.color}`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFFERENCE - Enhanced Layout */}
      <section className="py-20 md:py-24 px-6 bg-white text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-gray-900 to-emerald-900 rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="font-serif text-4xl md:text-5xl mb-8 text-white">
              The TRAVELMATE Difference
            </h2>

            <div className="space-y-6 text-lg">
              <p className="text-emerald-50 leading-relaxed">
                Our journeys are shaped by years of exploration and relationships with
                local families, monks, artists, historians, and naturalists across India.
              </p>

              <p className="text-emerald-50 leading-relaxed">
                We don't sell destinations — we create meaningful cultural connections
                that stay with you long after the journey ends.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-emerald-400/30 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: "Personal Touch", value: "Every Journey" },
                { label: "Local Experts", value: "Every Location" },
                { label: "Cultural Depth", value: "Every Experience" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-serif text-white mb-2">{item.value}</div>
                  <div className="text-sm text-emerald-200">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </main>
  );
}

export default About;


// Show booking ID on thankyou page

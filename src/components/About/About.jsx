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
      {/* HERO with Parallax */}
      <section className="relative pt-28 md:pt-36 pb-24 md:pb-28 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Compass className="w-4 h-4 text-emerald-700" />
              <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-emerald-700 font-semibold">
                About TravelMate
              </span>
            </div>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight mb-8 bg-gradient-to-r from-gray-900 via-emerald-900 to-gray-900 bg-clip-text text-transparent animate-fade-in-up">
            Travel Beyond the Obvious
          </h1>

          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            TRAVELMATE exists to uncover India beyond the familiar — beyond landmarks,
            crowds, and predictable itineraries. We bring you closer to the villages,
            rituals, heritage, and stories that define India's living culture.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: MapPin, text: "Hidden Destinations" },
              { icon: Users, text: "Local Communities" },
              { icon: Heart, text: "Authentic Experiences" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/95 backdrop-blur px-5 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <item.icon className="w-5 h-5 text-emerald-800" />
                <span className="text-sm text-gray-900 font-semibold tracking-wide">{item.text}</span>
              </div>
            ))}
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
              { img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80", span: "md:col-span-2 md:row-span-2" },
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
                img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
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

      {/* STATS - More Dynamic */}
      <section className="py-20 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { num: "150+", label: "Hidden Cultural Destinations", color: "from-emerald-600 to-teal-600" },
              { num: "12+", label: "Years of Exploration", color: "from-teal-600 to-cyan-600" },
              { num: "98%", label: "Traveler Satisfaction", color: "from-cyan-600 to-blue-600" },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100">
                  <div className={`inline-block bg-gradient-to-br ${item.color} bg-clip-text text-transparent font-serif text-5xl md:text-6xl mb-4`}>
                    {item.num}
                  </div>
                  <p className="text-gray-600 font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Enhanced */}
      <section className="relative py-24 md:py-28 px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block mb-6 bg-emerald-500/20 backdrop-blur-sm px-6 py-2 rounded-full">
            <p className="text-xs tracking-[0.35em] uppercase text-emerald-300 font-semibold">
              Begin Your Journey
            </p>
          </div>

          <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
            Discover India, Differently
          </h2>

          <p className="text-gray-200 max-w-2xl mx-auto mb-12 text-xl leading-relaxed">
            Travel deeper. Travel slower. Travel with purpose.
          </p>

          <a
            href="/plan-journey"
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all shadow-2xl hover:shadow-emerald-500/50 hover:scale-105"
          >
            Plan Your Journey
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
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
// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { MapPin, Users, Heart, Compass } from "lucide-react";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1 },
// };
//  function About() {
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   return (
//     <main className="bg-white text-gray-900 overflow-hidden">
//       {/* HERO with Parallax */}
//       <section
//         ref={heroRef}
//         className="relative pt-28 md:pt-36 pb-24 md:pb-28 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden"

//       >
//         {/* Decorative Elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
//           <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />
//         </div>

//         <motion.div
//           style={{ y: heroY, opacity: heroOpacity }}
//           className="max-w-5xl mx-auto text-center relative z-10"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="inline-block mb-6"
//           >
//             <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
//               <Compass className="w-4 h-4 text-emerald-700" />
//               <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-emerald-700 font-semibold">
//                 About TravelMate
//               </span>
//             </div>
//           </motion.div>

//           <motion.h1
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight mb-8 bg-gradient-to-r from-gray-900 via-emerald-900 to-gray-900 bg-clip-text text-transparent"
//           >
//             Travel Beyond the Obvious
//           </motion.h1>

//           <motion.p
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
//           >
//             TRAVELMATE exists to uncover India beyond the familiar — beyond landmarks,
//             crowds, and predictable itineraries. We bring you closer to the villages,
//             rituals, heritage, and stories that define India's living culture.
//           </motion.p>

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="mt-12 flex flex-wrap justify-center gap-6"
//           >
//             {[
//               { icon: MapPin, text: "Hidden Destinations" },
//               { icon: Users, text: "Local Communities" },
//               { icon: Heart, text: "Authentic Experiences" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-3 bg-white/95 backdrop-blur px-5 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
//               >
//                 <item.icon className="w-5 h-5 text-emerald-800" />
//                 <span className="text-sm text-gray-900 font-semibold tracking-wide">{item.text}</span>
//               </div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* PHILOSOPHY with Enhanced Cards */}
//       <section className="py-20 md:py-24 px-6 bg-white">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="max-w-6xl mx-auto"
//         >
//           <motion.div variants={fadeUp} className="text-center mb-16">
//             <h2 className="font-serif text-4xl md:text-5xl mb-6 text-gray-900">
//               Our Philosophy
//             </h2>
//             <div className="w-60 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto" />
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//             <motion.div variants={fadeUp} className="space-y-6">
//               <div className="bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-100 rounded-3xl p-8 border border-emerald-300 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
//                 <h3 className="font-serif text-2xl mb-4 text-gray-900">Slow & Immersive</h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   We believe meaningful travel is slow, immersive, and human. It's about
//                   listening to stories, understanding traditions, and respecting the land
//                   and people who call it home.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-100 rounded-3xl p-8 border border-emerald-300 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
//                 <h3 className="font-serif text-2xl mb-4 text-gray-900">Living Civilization</h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   From ancient temple towns and tribal heartlands to coastal hamlets and
//                   mountain villages, our journeys celebrate India as a living civilization.
//                 </p>
//               </div>
//             </motion.div>

//             <motion.div
//               variants={scaleIn}
//               className="bg-gradient-to-br from-gray-900 to-emerald-900 rounded-3xl p-10 shadow-2xl relative overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
              
//               <div className="relative z-10">
//                 <h3 className="font-serif text-2xl mb-8 text-emerald-100">What We Offer</h3>
//                 <ul className="space-y-5">
//                   {[
//                     "Hidden villages & cultural landscapes",
//                     "Local historians, artisans & families",
//                     "Slow, immersive travel experiences",
//                     "Culture-first, community-respecting journeys",
//                   ].map((item, i) => (
//                     <motion.li
//                       key={i}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: i * 0.1 }}
//                       className="flex gap-4 group"
//                     >
//                       <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform" />
//                       <p className="text-white/90 group-hover:text-white transition-colors">{item}</p>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* CULTURAL JOURNEY - Enhanced Timeline */}
//       <section className="py-20 md:py-24 px-6 bg-gradient-to-b from-emerald-50/50 to-white">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="max-w-5xl mx-auto"
//         >
//           <motion.div variants={fadeUp} className="text-center mb-16">
//             <h2 className="font-serif text-4xl md:text-5xl mb-6">
//               A Cultural Journey Across India
//             </h2>
//             <div className="w-96 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto" />
//           </motion.div>

//           <div className="relative border-l-2 border-emerald-300 pl-12 space-y-16">
//             {[
//               {
//                 title: "Himalayan Heartlands",
//                 desc: "Remote villages where ancient rituals, monasteries, and mountain life remain unchanged.",
//                 color: "from-teal-500 to-emerald-500",
//               },
//               {
//                 title: "Desert & Tribal Cultures",
//                 desc: "Indigenous communities, folk traditions, crafts, and stories passed through generations.",
//                 color: "from-teal-500 to-emerald-500",
//               },
//               {
//                 title: "Sacred Temple Towns",
//                 desc: "Living spiritual centers where daily life follows centuries-old rhythms and beliefs.",
//                 color: "from-teal-500 to-emerald-500",
//               },
//               {
//                 title: "Coastal & Maritime Heritage",
//                 desc: "Forgotten ports, fishing communities, and cultures shaped by the sea.",
//                 color: "from-teal-500 to-emerald-500",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeUp}
//                 className="relative group"
//               >
//                 <div className={`absolute -left-[54px] top-0 w-10 h-10 bg-gradient-to-br ${item.color} rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300 flex items-center justify-center`}>
//                   <div className="w-3 h-3 bg-white rounded-full" />
//                 </div>
                
//                 <div className="bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-100 rounded-3xl p-8 border border-emerald-300 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
//                   <h3 className="font-serif text-2xl mb-3 text-gray-900">{item.title}</h3>
//                   <p className="text-gray-600 leading-relaxed">{item.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* DIFFERENCE - Enhanced Layout */}
//       <section className="py-20 md:py-24 px-6 bg-white text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={fadeUp}
//           transition={{ duration: 0.7 }}
//           className="max-w-5xl mx-auto relative z-10"
//         >
//           <div className="bg-gradient-to-br from-gray-900 to-emerald-900 rounded-3xl p-12 md:p-16 shadow-2xl">
//             <h2 className="font-serif text-4xl md:text-5xl mb-8 text-white">
//               The TRAVELMATE Difference
//             </h2>

//             <div className="space-y-6 text-lg">
//               <p className="text-emerald-50 leading-relaxed">
//                 Our journeys are shaped by years of exploration and relationships with
//                 local families, monks, artists, historians, and naturalists across India.
//               </p>

//               <p className="text-emerald-50 leading-relaxed">
//                 We don't sell destinations — we create meaningful cultural connections
//                 that stay with you long after the journey ends.
//               </p>
//             </div>

//             <div className="mt-10 pt-10 border-t border-emerald-400/30 grid grid-cols-1 sm:grid-cols-3 gap-6">
//               {[
//                 { label: "Personal Touch", value: "Every Journey" },
//                 { label: "Local Experts", value: "Every Location" },
//                 { label: "Cultural Depth", value: "Every Experience" },
//               ].map((item, i) => (
//                 <div key={i} className="text-center">
//                   <div className="text-2xl font-serif text-white mb-2">{item.value}</div>
//                   <div className="text-sm text-emerald-200">{item.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* STATS - More Dynamic */}
//       <section className="py-20 md:py-24 px-6 bg-white">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="max-w-6xl mx-auto"
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//             {[
//               { num: "150+", label: "Hidden Cultural Destinations", color: "from-emerald-600 to-teal-600" },
//               { num: "12+", label: "Years of Exploration", color: "from-teal-600 to-cyan-600" },
//               { num: "98%", label: "Traveler Satisfaction", color: "from-cyan-600 to-blue-600" },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 variants={scaleIn}
//                 transition={{ delay: i * 0.1 }}
//                 className="relative group"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
//                 <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100">
//                   <div className={`inline-block bg-gradient-to-br ${item.color} bg-clip-text text-transparent font-serif text-5xl md:text-6xl mb-4`}>
//                     {item.num}
//                   </div>
//                   <p className="text-gray-600 font-medium">{item.label}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* CTA - Enhanced */}
//       <section className="relative py-24 md:py-28 px-6 text-center text-white overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900" />
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           transition={{ duration: 0.7 }}
//           className="relative z-10 max-w-4xl mx-auto"
//         >
//           <div className="inline-block mb-6 bg-emerald-500/20 backdrop-blur-sm px-6 py-2 rounded-full">
//             <p className="text-xs tracking-[0.35em] uppercase text-emerald-300 font-semibold">
//               Begin Your Journey
//             </p>
//           </div>

//           <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
//             Discover India, Differently
//           </h2>

//           <p className="text-gray-200 max-w-2xl mx-auto mb-12 text-xl leading-relaxed">
//             Travel deeper. Travel slower. Travel with purpose.
//           </p>

//           <motion.a
//             href="/plan-journey"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all shadow-2xl hover:shadow-emerald-500/50"
//           >
//             Plan Your Journey
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </motion.a>
//         </motion.div>
//       </section>
//     </main>
//   );
// }
// export default About

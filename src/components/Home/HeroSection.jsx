"use client";

import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
    >
      <img
        src="/hero.png"
        alt="Discover India Beyond Instagram"
        className="absolute inset-0 h-full w-full object-cover"
        ></img>
      {/* Soft overlay for premium contrast */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">

          {/* Top Tagline */}
          <p className="mb-4 text-xs md:text-sm tracking-[0.3em] uppercase text-emerald-300">
            Exclusive Journeys to India’s Best-Kept Secrets
          </p>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-6xl leading-tight">
            <span className="block text-gray-100">
              Discover India
            </span>
            <span className="block text-emerald-400">
              Beyond the Guidebooks
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
            Curated private journeys to hidden valleys, forgotten heritage towns,
            and pristine coastlines — where authentic experiences await the
            discerning traveler.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

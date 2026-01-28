"use client";

import React from "react";

const Cta = () => {
  return (
    <section className="bg-[#1B2433] py-28 px-6">
      <div className="max-w-4xl mx-auto text-center text-white">

        {/* Eyebrow */}
        <p className="text-xs tracking-[0.35em] uppercase text-emerald-300 mb-6">
          Begin Your Journey
        </p>

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
          Ready to Discover the Hidden India?
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Let us craft a bespoke journey that reveals the extraordinary—designed
          around your dreams and desires.
        </p>

        {/* CTA Button */}
        <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-gray-100 transition">
          Start Planning <span>→</span>
        </button>

      </div>
    </section>
  );
};

export default Cta;

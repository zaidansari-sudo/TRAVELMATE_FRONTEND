"use client";

import React from "react";

const Cta = () => {
  return (
    <section className="relative py-24 md:py-28 px-6 text-center text-white overflow-hidden">
      
      {/* Main Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900" />

      {/* Grid Overlay Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Eyebrow */}
        <div className="inline-block mb-6 bg-emerald-500/20 backdrop-blur-sm px-6 py-2 rounded-full">
          <p className="text-xs tracking-[0.35em] uppercase text-emerald-300 font-semibold">
            Begin Your Journey
          </p>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
          Ready to Discover the Hidden India?
        </h2>

        {/* Description */}
        <p className="text-gray-200 max-w-2xl mx-auto mb-12 text-xl leading-relaxed">
          Let us craft a bespoke journey that reveals the extraordinary—designed
          around your dreams and desires.
        </p>

        {/* CTA Button */}
        <a
          href="/login"
          className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all shadow-2xl hover:shadow-emerald-500/50 hover:scale-105"
        >
          Start Planning
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

      </div>
    </section>
  );
};

export default Cta;

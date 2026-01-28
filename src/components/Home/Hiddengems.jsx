"use client";

import React from "react";
import Link from "next/link";

const gems = [
  {
    region: "Maharashtra Coast",
    title: "Secret Coves of Konkan",
    desc: "Untouched beaches framed by dramatic cliffs and ancient sea forts.",
    image: "/hiddengems/konkan.png",
  },
  {
    region: "Shekhawati, Rajasthan",
    title: "The Painted Havelis",
    desc: "An open-air gallery of forgotten mansions with intricate frescoes.",
    image: "/hiddengems/shekhawati.png",
  },
  {
    region: "Himachal Pradesh",
    title: "Himalayan Hidden Villages",
    desc: "Remote mountain hamlets where time moves at nature’s pace.",
    image: "/hiddengems/himachal.png",
  },
  {
    region: "Munnar, Kerala",
    title: "Misty Tea Highlands",
    desc: "Rolling emerald hills and colonial-era plantations in the clouds.",
    image: "/hiddengems/munnar.png",
  },
];

const HiddenGems = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.35em] uppercase text-emerald-700 mb-4">
            Curated Discoveries
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
            Hidden Gems of India
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg">
            Venture beyond the well-trodden paths to places few travelers have
            seen—each destination handpicked for its authenticity and wonder.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {gems.map((item, index) => (
            <div
              key={index}
              className="group relative h-[360px] rounded-3xl overflow-hidden"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-8 text-white">
                <p className="text-sm opacity-90 mb-1">
                  {item.region}
                </p>

                <h3 className="font-serif text-2xl mb-3">
                  {item.title}
                </h3>

                <p className="text-sm opacity-90 max-w-md">
                  {item.desc}
                </p>

                <p className="mt-4 text-sm font-medium flex items-center gap-1">
                  Explore <span className="text-lg">↗</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-16 text-center">
          <Link href="/packages">
          <button className="text-emerald-700 font-medium hover:underline underline-offset-4">
            View All Destinations ↗
          </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HiddenGems;

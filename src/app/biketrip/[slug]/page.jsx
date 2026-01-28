"use client";

import { useParams } from "next/navigation";
import { MapPin, Clock, CheckCircle, Phone, AlertCircle, Calendar, Users, Award, Sparkles, Mail, User, MessageSquare, Send, Shield, FileText, Footprints, CloudRain, Pill, Battery, Droplet } from "lucide-react";
import Image from "next/image";
import { biketrips } from "@/data/biketrips";
import React, { useState } from "react";

function Biketrip() {
  const { slug } = useParams();
  const trip = biketrips.find((t) => t.slug === slug);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "1",
    message: ""
  });

  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => {
        setFormStatus("idle");
        setFormData({ name: "", email: "", phone: "", travelers: "1", message: "" });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Calculate total price based on number of travelers
  const calculateTotalPrice = () => {
    const numTravelers = formData.travelers === "10+" ? 10 : parseInt(formData.travelers);
    return trip.price * numTravelers;
  };

  // Helper function to get appropriate icon for each item
  const getIconForItem = (item) => {
    const itemLower = item.toLowerCase();
    
    if (itemLower.includes('jacket') || itemLower.includes('gloves') || itemLower.includes('knee') || itemLower.includes('guard')) {
      return { Icon: Shield, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' };
    }
    if (itemLower.includes('helmet')) {
      return { Icon: Shield, bgColor: 'bg-emerald-100', iconColor: 'text-emerald-600' };
    }
    if (itemLower.includes('license') || itemLower.includes('id') || itemLower.includes('document')) {
      return { Icon: FileText, bgColor: 'bg-purple-100', iconColor: 'text-purple-600' };
    }
    if (itemLower.includes('shoes') || itemLower.includes('footwear') || itemLower.includes('boot')) {
      return { Icon: Footprints, bgColor: 'bg-amber-100', iconColor: 'text-amber-600' };
    }
    if (itemLower.includes('rain') || itemLower.includes('poncho') || itemLower.includes('waterproof')) {
      return { Icon: CloudRain, bgColor: 'bg-sky-100', iconColor: 'text-sky-600' };
    }
    if (itemLower.includes('medicine') || itemLower.includes('medication') || itemLower.includes('first aid')) {
      return { Icon: Pill, bgColor: 'bg-red-100', iconColor: 'text-red-600' };
    }
    if (itemLower.includes('power') || itemLower.includes('charger') || itemLower.includes('battery') || itemLower.includes('cable')) {
      return { Icon: Battery, bgColor: 'bg-slate-100', iconColor: 'text-slate-600' };
    }
    if (itemLower.includes('water') || itemLower.includes('bottle') || itemLower.includes('hydration')) {
      return { Icon: Droplet, bgColor: 'bg-cyan-100', iconColor: 'text-cyan-600' };
    }
    if (itemLower.includes('sunscreen') || itemLower.includes('sun')) {
      return { Icon: Award, bgColor: 'bg-orange-100', iconColor: 'text-orange-600' };
    }
    if (itemLower.includes('towel') || itemLower.includes('cloth')) {
      return { Icon: Award, bgColor: 'bg-teal-100', iconColor: 'text-teal-600' };
    }
    if (itemLower.includes('torch') || itemLower.includes('flashlight') || itemLower.includes('light')) {
      return { Icon: Award, bgColor: 'bg-yellow-100', iconColor: 'text-yellow-600' };
    }
    if (itemLower.includes('bag') || itemLower.includes('backpack')) {
      return { Icon: Award, bgColor: 'bg-indigo-100', iconColor: 'text-indigo-600' };
    }
    
    // Default fallback
    return { Icon: Award, bgColor: 'bg-emerald-100', iconColor: 'text-emerald-600' };
  };

  if (!trip) {
    return (
      <main className="pt-32 text-center min-h-screen flex items-center justify-center bg-[#FBFAF7]">
        <div>
          <h1 className="text-3xl font-serif text-gray-900 mb-4">Bike trip not found</h1>
          <p className="text-gray-600">The trip you're looking for doesn't exist.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gradient-to-br from-slate-50 via-emerald-50/30 to-amber-50/20">
      
      {/* HERO SECTION */}
      <section className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
            <span>Bike Trips</span>
            <span>/</span>
            <span className="text-emerald-700 font-semibold">{trip.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Hero Image */}
            <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-2xl group relative">
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={trip.heroImage}
                  alt={trip.title}
                  width={1200}
                  height={700}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 shadow-lg backdrop-blur-sm">
                    <Sparkles size={16} />
                    <span>Popular Adventure</span>
                  </div>
                  <h1 className="text-white text-3xl font-bold drop-shadow-lg">{trip.title}</h1>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 h-fit sticky top-28 hover:shadow-emerald-100 transition-all duration-300 hover:scale-[1.02]">
              <h2 className="text-2xl font-serif text-gray-900 mb-6 leading-tight">{trip.title}</h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 text-gray-700 group hover:text-emerald-700 transition-colors">
                  <MapPin size={18} className="text-emerald-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{trip.location}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700 group hover:text-emerald-700 transition-colors">
                  <Clock size={18} className="text-emerald-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{trip.duration}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700 group hover:text-amber-700 transition-colors">
                  <AlertCircle size={18} className="text-amber-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Difficulty: <span className="font-semibold">{trip.difficulty}</span></span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide font-semibold">Starting from</p>
                <p className="text-4xl font-bold text-emerald-700 mb-1">
                  ₹{trip.price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">per person</p>
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-800 hover:to-emerald-700 text-white py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-emerald-700/30 hover:shadow-xl hover:shadow-emerald-700/40 hover:-translate-y-1 active:translate-y-0">
                Send Enquiry
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-6 pt-6 border-t border-gray-100 hover:text-emerald-700 transition-colors cursor-pointer">
                <Phone size={16} className="text-emerald-600" />
                <span className="font-semibold">+91 90015 04000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
              Why Choose This Trip
            </span>
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-3">
            Trip Highlights
          </h3>
          <p className="text-gray-600 text-lg">What makes this journey unforgettable</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trip.highlights.map((item, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex items-start gap-4 group hover:-translate-y-2 border border-gray-100 hover:border-emerald-200"
              style={{
                animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both`
              }}
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors flex-shrink-0">
                <CheckCircle className="text-emerald-600 group-hover:scale-110 transition-transform" size={20} />
              </div>
              <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ITINERARY */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
              Your Journey
            </span>
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-3">
            Day-wise Itinerary
          </h3>
          <p className="text-gray-600 text-lg">Detailed breakdown of your adventure</p>
        </div>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-600 via-emerald-400 to-emerald-600 hidden md:block" />
          
          {trip.itinerary.map((day, i) => (
            <div
              key={i}
              className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-emerald-600 hover:-translate-y-1 group hover:border-l-8"
              style={{
                animation: `fadeInLeft 0.6s ease-out ${i * 0.15}s both`
              }}
            >
              {/* Day number badge */}
              <div className="absolute -left-10 top-8 w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-2xl shadow-lg hidden md:flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              
              <div className="flex items-start gap-3 mb-4">
                <Calendar size={20} className="text-emerald-600 mt-1 flex-shrink-0" />
                <h4 className="font-bold text-xl text-gray-900">
                  {day.day}: <span className="text-emerald-700">{day.title}</span>
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed pl-8">
                {day.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INCLUSIONS & EXCLUSIONS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
              What's Included
            </span>
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-3">
            Package Details
          </h3>
          <p className="text-gray-600 text-lg">Know exactly what you're getting</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inclusions */}
          <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 rounded-3xl p-8 shadow-xl border-2 border-emerald-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Inclusions</h3>
            </div>
            <ul className="space-y-4">
              {trip.inclusions.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700 items-start group hover:text-emerald-700 transition-colors">
                  <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50/30 rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-500 rounded-2xl flex items-center justify-center shadow-lg">
                <AlertCircle className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Exclusions</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              {trip.exclusions.map((item, i) => (
                <li key={i} className="flex gap-3 items-start group hover:text-gray-800 transition-colors">
                  <span className="text-gray-400 mt-0.5 flex-shrink-0 text-xl">•</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* THINGS TO CARRY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
              Packing List
            </span>
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-3">Things to Carry</h3>
          <p className="text-gray-600 text-lg">Pack smart for your adventure</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trip.thingsToCarry.map((item, i) => {
            const { Icon, bgColor, iconColor } = getIconForItem(item);
            return (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center font-semibold text-gray-700 hover:-translate-y-2 border border-gray-100 group hover:border-gray-300"
                style={{
                  animation: `fadeInUp 0.4s ease-out ${i * 0.05}s both`
                }}
              >
                <div className={`w-14 h-14 ${bgColor} rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                  <Icon size={24} className={iconColor} />
                </div>
                <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* NOTES & PRECAUTIONS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
              Read Carefully
            </span>
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-3">Important Information</h3>
          <p className="text-gray-600 text-lg">Please read carefully before booking</p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50/30 rounded-3xl p-10 shadow-xl border-2 border-amber-200 hover:shadow-2xl transition-all duration-300">
          <div className="space-y-4">
            {[...trip.precautions, ...trip.notes].map((item, i) => (
              <div key={i} className="flex gap-4 items-start group hover:translate-x-1 transition-transform">
                <AlertCircle size={20} className="text-amber-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="relative z-20 max-w-4xl mx-auto px-6 py-16 pb-24">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
              Reserve Your Spot
            </span>
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-3">Book Your Adventure</h3>
          <p className="text-gray-600 text-lg">Fill in your details and we'll get back to you shortly</p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-emerald-100 font-sans">
          {formStatus === "success" ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle className="text-emerald-600" size={40} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Booking Request Sent!</h4>
              <p className="text-gray-600 text-lg">We'll contact you within 24 hours to confirm your trip details.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="group">
                <label htmlFor="name" className="tm-label">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-600 transition-colors pointer-events-none z-10" size={20} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="tm-input pl-12"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="email" className="tm-label">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-600 transition-colors pointer-events-none z-10" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="tm-input pl-12"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="phone" className="tm-label">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-600 transition-colors pointer-events-none z-10" size={20} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="tm-input pl-12"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
              </div>

              {/* Number of Travelers */}
              <div className="group">
                <label htmlFor="travelers" className="tm-label">
                  Number of Travelers *
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-600 transition-colors pointer-events-none z-10" size={20} />
                  <select
                    id="travelers"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    required
                    className="tm-select pl-12"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                    <option value="10+">10+ People</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="group">
                <label htmlFor="message" className="tm-label">
                  Additional Message (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400 group-focus-within:text-emerald-600 transition-colors pointer-events-none z-10" size={20} />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="tm-textarea pl-12"
                    placeholder="Any special requests or questions?"
                  />
                </div>
              </div>

              {/* Trip Summary */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-6 border-2 border-emerald-200">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Trip Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Trip:</span>
                    <span className="text-gray-900 font-semibold">{trip.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Duration:</span>
                    <span className="text-gray-900 font-semibold">{trip.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Number of Travelers:</span>
                    <span className="text-gray-900 font-semibold">{formData.travelers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Price per person:</span>
                    <span className="text-gray-900 font-semibold">₹{trip.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-emerald-300 mt-3">
                    <span className="text-gray-700 font-bold">Total Price:</span>
                    <span className="text-emerald-700 font-bold text-xl">₹{calculateTotalPrice().toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-800 hover:to-emerald-700 text-white py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg shadow-emerald-700/30 hover:shadow-xl hover:shadow-emerald-700/40 hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
              >
                {formStatus === "submitting" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Request...</span>
                  </>
                ) : (
                  <>
                    <span>Book This Trip</span>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                By booking, you agree to our terms and conditions. We'll contact you within 24 hours.
              </p>
            </form>
          )}
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </main>
  );
}

export default Biketrip;
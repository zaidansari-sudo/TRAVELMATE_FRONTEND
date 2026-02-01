"use client";

import { useParams } from "next/navigation";
import { MapPin, Clock, CheckCircle, Phone, AlertCircle, Calendar, Users, Award, Sparkles, Mail, User, MessageSquare, Send, Shield, FileText, Footprints, CloudRain, Pill, Battery, Droplet, Star, TrendingUp, Target } from "lucide-react";
import Image from "next/image";
import { biketrips } from "@/data/biketrips";
import React, { useState } from "react";
import Link from "next/link";
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
      return { Icon: Shield, bgColor: 'bg-blue-50', iconColor: 'text-blue-600', borderColor: 'border-blue-200' };
    }
    if (itemLower.includes('helmet')) {
      return { Icon: Shield, bgColor: 'bg-emerald-50', iconColor: 'text-emerald-600', borderColor: 'border-emerald-200' };
    }
    if (itemLower.includes('license') || itemLower.includes('id') || itemLower.includes('document')) {
      return { Icon: FileText, bgColor: 'bg-purple-50', iconColor: 'text-purple-600', borderColor: 'border-purple-200' };
    }
    if (itemLower.includes('shoes') || itemLower.includes('footwear') || itemLower.includes('boot')) {
      return { Icon: Footprints, bgColor: 'bg-amber-50', iconColor: 'text-amber-600', borderColor: 'border-amber-200' };
    }
    if (itemLower.includes('rain') || itemLower.includes('poncho') || itemLower.includes('waterproof')) {
      return { Icon: CloudRain, bgColor: 'bg-sky-50', iconColor: 'text-sky-600', borderColor: 'border-sky-200' };
    }
    if (itemLower.includes('medicine') || itemLower.includes('medication') || itemLower.includes('first aid')) {
      return { Icon: Pill, bgColor: 'bg-red-50', iconColor: 'text-red-600', borderColor: 'border-red-200' };
    }
    if (itemLower.includes('power') || itemLower.includes('charger') || itemLower.includes('battery') || itemLower.includes('cable')) {
      return { Icon: Battery, bgColor: 'bg-slate-50', iconColor: 'text-slate-600', borderColor: 'border-slate-200' };
    }
    if (itemLower.includes('water') || itemLower.includes('bottle') || itemLower.includes('hydration')) {
      return { Icon: Droplet, bgColor: 'bg-cyan-50', iconColor: 'text-cyan-600', borderColor: 'border-cyan-200' };
    }
    if (itemLower.includes('sunscreen') || itemLower.includes('sun')) {
      return { Icon: Award, bgColor: 'bg-orange-50', iconColor: 'text-orange-600', borderColor: 'border-orange-200' };
    }
    if (itemLower.includes('towel') || itemLower.includes('cloth')) {
      return { Icon: Award, bgColor: 'bg-teal-50', iconColor: 'text-teal-600', borderColor: 'border-teal-200' };
    }
    if (itemLower.includes('torch') || itemLower.includes('flashlight') || itemLower.includes('light')) {
      return { Icon: Award, bgColor: 'bg-yellow-50', iconColor: 'text-yellow-600', borderColor: 'border-yellow-200' };
    }
    if (itemLower.includes('bag') || itemLower.includes('backpack')) {
      return { Icon: Award, bgColor: 'bg-indigo-50', iconColor: 'text-indigo-600', borderColor: 'border-indigo-200' };
    }
    
    // Default fallback
    return { Icon: Award, bgColor: 'bg-emerald-50', iconColor: 'text-emerald-600', borderColor: 'border-emerald-200' };
  };

  if (!trip) {
    return (
      <main className="pt-32 text-center min-h-screen flex items-center justify-center bg-slate-50">
        <div>
          <h1 className="text-3xl font-serif text-gray-900 mb-4">Bike trip not found</h1>
          <p className="text-gray-600">The trip you're looking for doesn't exist.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-slate-50">

      
      {/* HERO SECTION */}
      <section className="pt-28 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <a href="/biketrip" className="hover:text-emerald-600 transition-colors">Bike Trips</a>
            <span>/</span>
            <span className="text-gray-900 font-medium">{trip.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Hero Image */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 group relative">
                <div className="relative h-[500px] overflow-hidden bg-gray-100">
                  <Image
                    src={trip.heroImage}
                    alt={trip.title}
                    width={1200}
                    height={700}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Image Type: Main destination scenic photo showing the landscape/route */}
                  <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center gap-2 bg-white text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      <Star size={16} className="fill-emerald-600" />
                      <span>Featured Trip</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Gallery Section - Add below main image */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="rounded-xl overflow-hidden border border-gray-200 h-32 bg-gray-100">
                  {/* Image Type: Route scenic photo 1 */}
                  <img 
                    src="/placeholder-route-1.jpg" 
                    alt="Route view 1" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-gray-200 h-32 bg-gray-100">
                  {/* Image Type: Route scenic photo 2 */}
                  <img 
                    src="/placeholder-route-2.jpg" 
                    alt="Route view 2" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-gray-200 h-32 bg-gray-100">
                  {/* Image Type: Accommodation/camp photo */}
                  <img 
                    src="/placeholder-accommodation.jpg" 
                    alt="Accommodation" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-600 h-fit sticky top-28">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-emerald-700 mb-3">
                  <TrendingUp size={18} />
                  <span className="text-sm font-semibold uppercase tracking-wide">Popular Choice</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{trip.title}</h2>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(4.8 • 120 reviews)</span>
                </div>
              </div>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">{trip.location}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Clock size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">{trip.duration}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Target size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">Difficulty: <span className="font-semibold text-gray-900">{trip.difficulty}</span></span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">Starting from</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-emerald-700">
                    ₹{trip.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">/ person</p>
                </div>
              </div>

              <Link href={`/book/biketrip/${trip.slug}`}>
  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold">
    Book Now
  </button>
</Link>


              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 pt-4 border-t border-gray-100">
                <Phone size={16} className="text-emerald-600" />
                <span>Call us: <span className="font-semibold text-gray-900">+91 90015 04000</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - NEW SECTION */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-200 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:border-emerald-600 transition-colors">
                <Shield size={28} className="text-emerald-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Safety First</h4>
              <p className="text-sm text-gray-600">Certified guides & equipment</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-50 border-2 border-blue-200 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:border-blue-600 transition-colors">
                <Award size={28} className="text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">15+ Years</h4>
              <p className="text-sm text-gray-600">Experience in adventure tourism</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-amber-50 border-2 border-amber-200 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:border-amber-600 transition-colors">
                <Users size={28} className="text-amber-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">5000+ Riders</h4>
              <p className="text-sm text-gray-600">Successfully completed trips</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-50 border-2 border-purple-200 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:border-purple-600 transition-colors">
                <CheckCircle size={28} className="text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">100% Support</h4>
              <p className="text-sm text-gray-600">24/7 assistance during trip</p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Experience
            </span>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Trip Highlights
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover what makes this journey truly unforgettable
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trip.highlights.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 border border-gray-200 hover:border-emerald-300"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-emerald-600" size={20} />
                </div>
                <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Daily Plan
            </span>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Day-wise Itinerary
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Detailed breakdown of your adventure journey
            </p>
          </div>

          <div className="space-y-6">
            {trip.itinerary.map((day, i) => (
              <div
                key={i}
                className="bg-slate-50 border-l-4 border-emerald-600 rounded-r-xl p-8 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar size={16} />
                      <span className="font-medium">{day.day}</span>
                    </div>
                    <h4 className="font-bold text-xl text-gray-900 mb-3">
                      {day.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {day.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUSIONS & EXCLUSIONS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Package Information
            </span>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Transparent pricing with complete details
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-emerald-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Inclusions</h3>
              </div>
              <ul className="space-y-4">
                {trip.inclusions.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-700 items-start">
                    <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={20} />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center">
                  <AlertCircle className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Exclusions</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                {trip.exclusions.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-gray-400 mt-0.5 flex-shrink-0 text-xl">•</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THINGS TO CARRY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Packing Guide
            </span>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Things to Carry</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Essential items for a comfortable journey</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {trip.thingsToCarry.map((item, i) => {
              const { Icon, bgColor, iconColor, borderColor } = getIconForItem(item);
              return (
                <div
                  key={i}
                  className={`bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center border-2 ${borderColor} hover:scale-105`}
                >
                  <div className={`w-14 h-14 ${bgColor} rounded-xl mx-auto mb-3 flex items-center justify-center`}>
                    <Icon size={24} className={iconColor} />
                  </div>
                  <span className="text-sm text-gray-700 font-medium leading-relaxed">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NOTES & PRECAUTIONS */}
      <section className="py-20 bg-amber-50 border-y-4 border-amber-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-200 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Important
            </span>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h3>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">Please read carefully before booking your trip</p>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-md border-2 border-amber-300">
            <div className="space-y-5">
              {[...trip.precautions, ...trip.notes].map((item, i) => (
                <div key={i} className="flex gap-4 items-start pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertCircle size={16} className="text-amber-600" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION - NEW */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What Riders Say</h3>
            <p className="text-gray-600 text-lg">Real experiences from our customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"Amazing experience! The route was scenic and the organization was top-notch. Highly recommend TravelMate for bike trips."</p>
              <div className="flex items-center gap-3">
                {/* Image Type: Customer profile photo */}
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="/placeholder-user-1.jpg" alt="Rider" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Rahul Sharma</p>
                  <p className="text-sm text-gray-500">Delhi, India</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"Safety was the priority throughout the trip. Guides were experienced and helpful. An adventure I'll never forget!"</p>
              <div className="flex items-center gap-3">
                {/* Image Type: Customer profile photo */}
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="/placeholder-user-2.jpg" alt="Rider" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Priya Mehta</p>
                  <p className="text-sm text-gray-500">Mumbai, India</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"Perfect for solo travelers and groups alike. Met amazing people and created memories for a lifetime. Thank you TravelMate!"</p>
              <div className="flex items-center gap-3">
                {/* Image Type: Customer profile photo */}
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="/placeholder-user-3.jpg" alt="Rider" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Arjun Patel</p>
                  <p className="text-sm text-gray-500">Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </main>
  );
}

export default Biketrip;
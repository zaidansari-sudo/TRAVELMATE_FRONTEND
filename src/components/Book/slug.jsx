"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { biketrips } from "@/data/biketrips";
import { packages } from "@/data/packages";
import { useState } from "react";
import { User, Mail, Phone, Users, CheckCircle, Calendar, MapPin, Clock, ArrowRight, Shield, Sparkles, Star, ChevronUp, ChevronDown } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

const fadeInStyle = {
  animation: "fade-in 0.6s ease-out",
};

export default function BookingPage() {
  const { type, slug } = useParams();
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);
  
   // Protect booking page
 useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    router.push("/login");
  } else {
    setCheckingAuth(false);
  }
}, []);

  const data =
    type === "biketrip"
      ? biketrips.find((t) => t.slug === slug)
      : packages.find((p) => p.id === slug);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: 1,
    startDate: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const numericPrice =
  typeof data.price === "string"
    ? Number(data.price.replace(/[₹,]/g, ""))
    : data.price;

    if (checkingAuth) {
  return null; // prevents flicker before redirect
}

 if (!data || !data.price) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold text-red-600">
        Invalid booking data
      </h1>
    </div>
  );
}

const handleSubmit = async (e) => {
  e.preventDefault();

        if (!form.startDate) {
    toast.error("Please select a travel date");
    return; // stops here
  }


  const loadingToast = toast.loading("Processing your booking...");

  try {
    const token = localStorage.getItem("token");
    const API = process.env.NEXT_PUBLIC_API_URL;

    const res = await axios.post(
      `${API}/api/bookings`,
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        travelers: form.travelers,
        tripTitle: data.title,
        price: numericPrice * form.travelers,
        startDate: form.startDate, 
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.dismiss(loadingToast); 
    toast.success("Booking received successfully! Check your email 📩");

    router.push(`/thankyou?code=${res.data.booking.bookingCode}`);

  } catch (error) {
    toast.dismiss(loadingToast); 
    toast.error(error.response?.data?.message || "Booking failed");
  }
};


  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        input[type="date"]::-webkit-calendar-picker-indicator {
          opacity: 0.6;
          cursor: pointer;
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10" style={fadeInStyle}>
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-5 py-2.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span className="text-sm font-bold text-emerald-800">Secure Booking Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Complete Your Adventure
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            You're one step away from an unforgettable journey. Fill in your details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* LEFT: FORM - 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-200 transition-all duration-300 hover:shadow-2xl">
              
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Traveler Information</h2>
                  <p className="text-sm text-gray-500">Please provide accurate contact details</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div className="group">
                  <label className="text-sm font-bold text-gray-700 mb-2 block">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-200 ${
                      focusedField === 'name' ? 'text-emerald-600 scale-110' : 'text-gray-400'
                    }`} size={20} />
                    <input
  value={form.name}
  className="
    w-full border-2 border-emerald-700 rounded-xl
    pl-12 pr-4 py-4
    text-gray-900 caret-emerald-600
    bg-white
    focus:outline-none focus:border-emerald-600
    focus:ring-2 focus:ring-emerald-200
    transition-all
    placeholder:text-gray-400
  "
  placeholder="Enter your full name"
  required
  onFocus={() => setFocusedField('name')}
  onBlur={() => setFocusedField(null)}
  onChange={(e) => setForm({ ...form, name: e.target.value })}
/>

                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="text-sm font-bold text-gray-700 mb-2 block">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-200 ${
                      focusedField === 'email' ? 'text-emerald-600 scale-110' : 'text-gray-400'
                    }`} size={20} />
                    <input
                      type="email"
                      value={form.email}
                      className="w-full border-2 border-emerald-700 rounded-xl pl-12 pr-4 py-4 text-gray-900 caret-emerald-600
  bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200
  transition-all placeholder:text-gray-400"
                      placeholder="xyz@gmail.com"
                      required
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="text-sm font-bold text-gray-700 mb-2 block">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-200 ${
                      focusedField === 'phone' ? 'text-emerald-600 scale-110' : 'text-gray-400'
                    }`} size={20} />
                    <input
                      type="tel"
                      value={form.phone}
                      className="w-full border-2 border-emerald-700 rounded-xl pl-12 pr-4 py-4 text-gray-900 caret-emerald-600
  bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200
  transition-all placeholder:text-gray-400"
                      placeholder="+91 98765 43210"
                      required
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Travelers */}
                <div className="group">
                  <label className="text-sm font-bold text-gray-700 mb-2 block">
                    Number of Travelers *
                  </label>
                  <div className="relative flex items-stretch">
                    <Users className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-200 z-10 ${
                      focusedField === 'travelers' ? 'text-emerald-600 scale-110' : 'text-gray-400'
                    }`} size={20} />
                    <div
                      className={`w-full border-2 rounded-xl pl-12 pr-0 bg-white flex items-center overflow-hidden transition-all ${
                        focusedField === 'travelers'
                          ? 'border-emerald-600 ring-2 ring-emerald-200'
                          : 'border-emerald-700'
                      }`}
                    >
                      <span
                        className="flex-1 py-4 text-gray-900 cursor-default select-none"
                        tabIndex={0}
                        onFocus={() => setFocusedField('travelers')}
                        onBlur={() => setFocusedField(null)}
                      >
                        {form.travelers} {form.travelers === 1 ? 'Person' : 'People'}
                      </span>
                      <div className="flex flex-col h-full border-l-2 border-emerald-700 self-stretch">
                        <button
                          type="button"
                          onClick={() => setForm({ ...form, travelers: Math.min(15, form.travelers + 1) })}
                          className="flex-1 px-3 flex items-center justify-center hover:bg-emerald-50 active:bg-emerald-100 transition-colors border-b border-emerald-200"
                          style={{ minHeight: '28px' }}
                        >
                          <ChevronUp className="w-4 h-4 text-emerald-700" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setForm({ ...form, travelers: Math.max(1, form.travelers - 1) })}
                          className="flex-1 px-3 flex items-center justify-center hover:bg-emerald-50 active:bg-emerald-100 transition-colors"
                          style={{ minHeight: '28px' }}
                        >
                          <ChevronDown className="w-4 h-4 text-emerald-700" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Travel Date */}
                <div className="group">
                  <label className="text-sm font-bold text-gray-700 mb-2 block">
                    Travel Date *
                  </label>
                  <div className="relative">
                    <Calendar className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-200 ${
                      focusedField === 'startDate' ? 'text-emerald-600 scale-110' : 'text-gray-400'
                    }`} size={20} />
                    <input
                      type="date"
                      name="startDate"
                      min={new Date().toISOString().split("T")[0]}
                      value={form.startDate}
                      onFocus={() => setFocusedField('startDate')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                      required
                      className="w-full border-2 border-emerald-700 rounded-xl pl-12 pr-4 py-4 text-gray-900 caret-emerald-600
                        bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200
                        transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <button
  type="submit"
  className="group w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 mt-8"
>
  Confirm Booking
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>Your information is secure and encrypted</span>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT: SUMMARY - 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 sticky top-24">
              
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Booking Summary</h2>
              </div>

              {/* Trip Title Card */}
              <div className="bg-emerald-50 rounded-2xl p-5 mb-6 border-2 border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    {type === "biketrip" ? " Bike Trip" : " Package Tour"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">{data.title}</h3>
              </div>

              <div className="space-y-3 mb-6">
                
                {data.duration && (
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200">
                        <Clock className="w-5 h-5 text-gray-600" />
                      </div>
                      <span className="font-semibold text-gray-700">Duration</span>
                    </div>
                    <span className="font-bold text-gray-900">{data.duration}</span>
                  </div>
                )}

                {data.location && (
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200">
                        <MapPin className="w-5 h-5 text-gray-600" />
                      </div>
                      <span className="font-semibold text-gray-700">Location</span>
                    </div>
                    <span className="font-bold text-gray-900">{data.location}</span>
                  </div>
                )}
              </div>

              {data.price && (
                <>
                  <div className="bg-emerald-600 rounded-2xl p-5 mb-4 shadow-lg">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <p className="text-sm font-medium opacity-90 mb-1">Price per person</p>
                        <p className="text-3xl font-bold">
  ₹{(
    typeof data.price === "string"
      ? Number(data.price.replace(/[₹,]/g, ""))
      : data.price
  ).toLocaleString()}
</p>

                      </div>
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">₹</span>
                      </div>
                    </div>
                  </div>

                  {form.travelers > 1 && (
                    <div className="flex items-center justify-between p-5 bg-emerald-50 rounded-xl border-2 border-emerald-200 mb-6">
                      <div>
                        <p className="text-sm text-emerald-700 font-medium mb-1">Total Amount</p>
                        <p className="text-xs text-emerald-600">for {form.travelers} travelers</p>
                      </div>
                      <span className="font-bold text-2xl text-emerald-700">
                        ₹{(numericPrice * form.travelers).toLocaleString()}

                      </span>
                    </div>
                  )}
                </>
              )}

              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-5 mb-6">
                <div className="flex gap-3 items-start">
                  <div className="mt-0.5 flex-shrink-0">
                    <CheckCircle className="text-emerald-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-900 mb-1.5">What happens next?</h4>
                    <p className="text-sm text-emerald-800 leading-relaxed">
                      Our team will contact you within 24 hours to confirm your booking and share detailed itinerary information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">500+</div>
                    <div className="text-xs text-gray-600 font-medium">Happy Travelers</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <span className="text-2xl font-bold text-emerald-600">4.9</span>
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
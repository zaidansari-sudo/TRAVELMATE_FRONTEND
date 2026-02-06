"use client";

import { CheckCircle, Mail, Calendar, Download, ArrowRight, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ThankYou() {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setShowContent(true), 100);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12 pt-32">
      
      {/* Success Animation Container */}
      <div className={`max-w-2xl w-full transition-all duration-700 transform ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-600 rounded-full opacity-20 animate-ping"></div>
            <div className="relative bg-emerald-600 rounded-full p-6 shadow-2xl">
              <CheckCircle className="text-white" size={64} strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">
            Booking Confirmed!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Your adventure awaits! We've received your booking.
          </p>
          {/* <p className="text-lg text-gray-500">
            Booking ID: <span className="font-mono font-bold text-emerald-700">#TRV-{Math.floor(Math.random() * 100000)}</span>
          </p> */}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          
          {/* Email Confirmation */}
          <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-emerald-600 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Mail className="text-blue-600" size={24} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Email Sent</h3>
                <p className="text-sm text-gray-600">
                  Confirmation details and itinerary sent to your email
                </p>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-emerald-600 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Calendar className="text-emerald-600" size={24} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-lg text-gray-900 mb-1">What's Next?</h3>
                <p className="text-sm text-gray-600">
                  Our team will contact you within 24 hours
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Next Steps */}
        <div className="bg-white border-2 border-emerald-600 p-8 rounded-xl shadow-xl mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Happens Next?</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">Email Confirmation</h4>
                <p className="text-sm text-gray-600">
                  Check your inbox for detailed booking confirmation and payment instructions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">Travel Coordinator Call</h4>
                <p className="text-sm text-gray-600">
                  Our team will reach out within 24 hours to finalize details and answer questions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">Preparation Guide</h4>
                <p className="text-sm text-gray-600">
                  Receive packing list, travel tips, and local information before your trip
                </p>
              </div>
            </div>
          </div>
        </div>
    {/* Support Info */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Need help? Contact our support team
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="tel:+1234567890" className="text-emerald-700 font-semibold hover:underline">
              +91 8591525279
            </a>
            <a href="mailto:support@travel.com" className="text-emerald-700 font-semibold hover:underline">
              hello@travelmate.com
            </a>
            <a href="/chat" className="text-emerald-700 font-semibold hover:underline">
              💬 Live Chat
            </a>
          </div>
        </div>

      </div>

      {/* Floating Confetti Effect (Optional decorative element) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-500 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-5%`,
              animation: `fall ${3 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

    </div>
  );
}
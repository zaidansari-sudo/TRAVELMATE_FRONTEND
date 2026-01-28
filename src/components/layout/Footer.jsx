"use client";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Globe,
  Award,
  Shield
} from "lucide-react";

const underlineHover =
  "relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-emerald-600 after:transition-all after:duration-300 hover:after:w-full transition-colors hover:text-emerald-700";

const Footer = () => {
  return (
    <footer className="relative bg-white text-emerald-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl" />
      </div>

      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 8C120 16 240 32 360 37.3C480 43 600 37 720 32C840 27 960 21 1080 21.3C1200 21 1320 27 1380 29.3L1440 32V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z" fill="url(#footerGradient)" fillOpacity="0.1"/>
          <defs>
            <linearGradient id="footerGradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#059669"/>
              <stop offset="50%" stopColor="#14b8a6"/>
              <stop offset="100%" stopColor="#059669"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div>
              <a href="/" className="inline-block group">
                <h2 className="text-4xl font-serif text-emerald-900 tracking-wide mb-2 group-hover:text-emerald-700 transition-colors font-bold">
                  TRAVELMATE
                </h2>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-500" />
              </a>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-gray-700 max-w-md mx-auto lg:mx-0 font-semibold">
              Thoughtfully crafted journeys across India's hidden landscapes, cultures, and stories — designed beyond the guidebooks for travelers seeking depth, authenticity, and meaning.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-emerald-100 shadow-sm">
                <Award className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-semibold text-gray-700">Award Winning</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-emerald-100 shadow-sm">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-semibold text-gray-700">Secure Booking</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-emerald-100 shadow-sm">
                <Globe className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-semibold text-gray-700">Global Support</span>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-10 text-center sm:text-left">
            <div>
              <h4 className="text-xl uppercase tracking-[0.35em] text-emerald-900 font-bold mb-5 flex items-center gap-2 justify-center sm:justify-start">
                <div className="w-8 h-px bg-emerald-600" />
                Explore
              </h4>
              <ul className="space-y-3 text-l font-semibold">
                <li><a href="/" className={underlineHover}>Home</a></li>
                <li><a href="/about" className={underlineHover}>About Us</a></li>
                <li><a href="/packages" className={underlineHover}>Packages</a></li>
                <li><a href="/biketrips" className={underlineHover}>Bike Trips</a></li>
                <li><a href="/contact" className={underlineHover}>Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl uppercase tracking-[0.35em] text-emerald-900 font-bold mb-5 flex items-center gap-2 justify-center sm:justify-start">
                <div className="w-8 h-px bg-emerald-600" />
                Legal
              </h4>
              <ul className="space-y-3 text-l font-semibold">
                <li><a href="/privacy" className={underlineHover}>Privacy Policy</a></li>
                <li><a href="/terms" className={underlineHover}>Terms & Conditions</a></li>
                <li><a href="/refund" className={underlineHover}>Refund Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-3 text-center sm:text-left lg:text-right">
            <h4 className="text-xl uppercase tracking-[0.35em] text-emerald-900 font-bold mb-5 flex items-center gap-2 justify-center sm:justify-start lg:justify-end">
              <div className="w-8 h-px bg-emerald-600" />
              Contact
            </h4>

            <div className="space-y-4 text-l mb-6 flex flex-col items-center sm:items-start lg:items-end font-semibold">
              <a href="mailto:hello@travelmate.com" className="group flex items-center gap-3 hover:text-emerald-700 transition-colors">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <Mail size={16} className="text-emerald-700" />
                </div>
                <span>hello@travelmate.com</span>
              </a>

              <a href="tel:+919876543210" className="group flex items-center gap-3 hover:text-emerald-700 transition-colors">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <Phone size={16} className="text-emerald-700" />
                </div>
                <span>+91 98765 43210</span>
              </a>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <MapPin size={16} className="text-emerald-700" />
                </div>
                <span>Mumbai, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 justify-center sm:justify-start lg:justify-end">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group p-3 rounded-full bg-white border-2 border-emerald-200 hover:border-emerald-600 hover:bg-emerald-600 transition-all shadow-sm hover:shadow-md hover:scale-110"
                >
                  <Icon size={18} className="text-emerald-700 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-600 font-medium">
            © {new Date().getFullYear()} TRAVELMATE. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Globe,
  ArrowRight,
  Heart
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNewsletterSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <main className="bg-white overflow-hidden">
      {/* HERO / INTRO */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 px-6 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeUp} className="inline-block mb-6">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-emerald-100">
              <Send className="w-4 h-4 text-emerald-700" />
              <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-emerald-700 font-semibold">
                Contact Us
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl sm:text-6xl md:text-7xl text-gray-900 leading-tight mb-6 bg-gradient-to-r from-gray-900 via-emerald-900 to-gray-900 bg-clip-text"
          >
            Let's Begin Your Journey
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Whether you're dreaming of a hidden Himalayan village or a secluded
            coastal escape, we'd love to hear from you. Every journey begins with
            a conversation.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            {[
              { icon: Clock, text: "24h Response Time" },
              { icon: Globe, text: "150+ Destinations" },
              { icon: Phone, text: "Expert Guidance" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/90 backdrop-blur px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <item.icon className="w-4 h-4 text-emerald-700" />
                <span className="text-sm text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="pb-24 sm:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT – INFO & MAP */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">
                Get in Touch
              </h2>

              <p className="text-gray-600 leading-relaxed mb-10 text-base">
                Share a few details about your travel interests, preferred pace,
                and destinations you're curious about. Our team will reach out to
                craft a journey tailored just for you.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "travelmate@gmail.com",
                    href: "mailto:travelmate@gmail.com",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 8591525279",
                    href: "tel:+918591525279",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: MapPin,
                    label: "Office",
                    value: "Bandra West, Mumbai, India",
                    href: null,
                    gradient: "from-blue-500 to-cyan-500",
                  },
                ].map((contact, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 overflow-hidden">
                      {/* Gradient Bar */}
                      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${contact.gradient}`} />
                      
                      <div className="flex items-start gap-4 ml-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <contact.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 mb-1 text-sm">
                            {contact.label}
                          </p>
                          {contact.href ? (
                            <a
                              href={contact.href}
                              className="text-emerald-700 hover:text-emerald-800 transition font-medium"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-gray-700">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-white h-80 sm:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1206620874364!2d72.83650697425131!3d19.058431752525653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c917fd5e3179%3A0xa275ac5e7759fdd7!2sPrem%20Mayurasan%2C%20Bambardekar%20Marg%2C%20Patkar%20Blocks%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1767610688418!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </motion.div>

            {/* Office Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-700 via-teal-600 to-emerald-800 rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-emerald-300" />
                <h3 className="font-semibold text-lg">Office Hours</h3>
              </div>
              <div className="space-y-2 text-sm text-emerald-50">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT – ENHANCED FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-20" />
            
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-emerald-100">
              <div className="mb-8">
                <h3 className="font-serif text-3xl text-gray-900 mb-2">
                  Send us a Message
                </h3>
                <p className="text-sm text-gray-500">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <div className="space-y-6">
                {/* Full Name */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full border-2 border-emerald-700 rounded-xl px-4 py-4
  focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200
  transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      required
                       className="w-full border-2 border-emerald-700 rounded-xl px-4 py-4
  focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200
  transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                       className="w-full border-2 border-emerald-700 rounded-xl px-4 py-4
  focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200
  transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your journey <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                      placeholder="I'm interested in exploring the Himalayas in March 2026..."
                       className="w-full border-2 border-emerald-700 rounded-xl px-4 py-4
  focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200
  transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-5 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Privacy Notice */}
                <div className="flex items-center justify-center gap-2 pt-4">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs text-gray-500">
                    We respect your privacy and will never share your information
                  </p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-center justify-center gap-8 text-center">
                  <div>
                    <p className="text-2xl font-serif text-emerald-700">24h</p>
                    <p className="text-xs text-gray-500">Response</p>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div>
                    <p className="text-2xl font-serif text-emerald-700">100%</p>
                    <p className="text-xs text-gray-500">Secure</p>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div>
                    <p className="text-2xl font-serif text-emerald-700">500+</p>
                    <p className="text-xs text-gray-500">Happy Travelers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* CTA – JOIN OUR JOURNEY (Newsletter) */}
      <section className="pb-28 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-700 via-teal-600 to-emerald-800 rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative text-center">
            <div className="inline-block p-3 bg-white/20 rounded-2xl mb-4">
              <Send className="w-6 h-6 text-white" />
            </div>

            <h3 className="font-serif text-3xl md:text-4xl text-white mb-3">
              Join Our Journey
            </h3>

            <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to receive exclusive travel insights, special offers,
              and destination guides delivered to your inbox
            </p>

            {!isSubmitted ? (
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-4 rounded-full bg-white/95 backdrop-blur-sm border-2 border-white/50 focus:border-white focus:ring-4 focus:ring-white/30 outline-none transition-all text-gray-900 font-medium"
                    />
                  </div>

                  <button
                    onClick={handleNewsletterSubmit}
                    className="group bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                  >
                    Subscribe
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <div className="flex items-center justify-center gap-3 text-white">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Heart className="w-5 h-5 fill-white" />
                  </div>
                  <p className="font-semibold text-lg">
                    Thank you for subscribing!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
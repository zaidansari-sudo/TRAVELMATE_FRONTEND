"use client";

import { useState, useEffect } from "react";
import { Mail, Lock, ArrowRight, Plane, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

 useEffect(() => {
  const token = localStorage.getItem("token");
  const expiry = localStorage.getItem("tokenExpiry");

  if (token && expiry) {
    if (Date.now() > expiry) {
      // expired → clear
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiry");
    } else {
      // valid → redirect
      router.push("/");
    }
  }
}, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
   const API = process.env.NEXT_PUBLIC_API_URL;
    const res = await axios.post(`${API}/api/auth/login`, form);

    toast.success("Login Successful ");

    const oneDay = 24 * 60 * 60 * 1000;

localStorage.setItem("token", res.data.token);
localStorage.setItem("tokenExpiry", Date.now() + oneDay);

    if (res.data.user.isAdmin) {
      router.push("/admin");
    } else {
      router.push("/");
    }

  } catch (err) {
    toast.error(err.response?.data?.message || "Login Failed");
  }

  setLoading(false);
};

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6 relative overflow-hidden">

      {/* Geometric decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/5 rounded-full -translate-x-24 translate-y-24" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-12 rounded-2xl shadow-xl border border-slate-200 max-w-md w-full relative z-10"
      >
        {/* Brand Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4"
          >
            <Plane className="w-8 h-8 text-emerald-600" />
          </motion.div>

          <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-slate-500 text-sm">
            Sign in to continue your adventure
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-slate-900 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-slate-700">
                Password
              </label>
              <a className="text-xs text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer">
                Forgot?
              </a>
            </div>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                <Lock className="w-5 h-5" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-slate-900 placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600 transition-colors focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg"
          >
            {loading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                />
                Signing in...
              </>
            ) : (
              <>
                Sign In <ArrowRight className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-4 bg-white text-slate-500">New to TravelMate?</span>
          </div>
        </div>

        {/* Signup */}
        <a
          href="/signup"
          className="block w-full text-center py-3.5 border-2 border-slate-200 hover:border-emerald-600 rounded-xl font-semibold text-slate-700 hover:text-emerald-600 transition-all"
        >
          Create an Account
        </a>
      </motion.div>
    </main>
  );
}
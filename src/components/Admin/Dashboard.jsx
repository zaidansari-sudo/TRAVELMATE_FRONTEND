"use client";

import React, { useEffect, useMemo, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";
import {
  CreditCard,
  Calendar,
  CheckCircle,
  Clock,
  XCircle,
  TrendingUp,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import toast from "react-hot-toast";

const COLORS = ["#059669", "#f59e0b", "#ef4444"];

function TravelMateDashboard() {
  const [bookings, setBookings] = useState([]);
  const API = process.env.NEXT_PUBLIC_API_URL;

  /* ================= FETCH BOOKINGS ================= */

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${API}/api/admin/bookings`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBookings(res.data);
    } catch (error) {
  toast.error("Failed to load dashboard data");
}
  };

  /* ================= KPI CALCULATIONS ================= */

  const totalBookings = bookings.length;
  const confirmed = bookings.filter(b => b.status === "Confirmed").length;
  const pending = bookings.filter(b => b.status === "Pending").length;
  const cancelled = bookings.filter(b => b.status === "Cancelled").length;

  const totalRevenue = bookings
    .filter(b => b.status === "Confirmed")
    .reduce((sum, b) => sum + b.price, 0);

  const avgBooking =
    confirmed > 0 ? Math.round(totalRevenue / confirmed) : 0;

  /* ================= CHART DATA ================= */

  const monthlyRevenue = useMemo(() => {
    const map = {};

    bookings
      .filter(b => b.status === "Confirmed")
      .forEach(b => {
        const month = new Date(b.createdAt).toLocaleString("default", {
          month: "short",
        });

        map[month] = (map[month] || 0) + b.price;
      });

    return Object.keys(map).map(month => ({
      month,
      revenue: map[month],
    }));
  }, [bookings]);

  const bookingStatus = [
    { name: "Confirmed", value: confirmed },
    { name: "Pending", value: pending },
    { name: "Cancelled", value: cancelled },
  ];

  const topPackages = useMemo(() => {
    const map = {};

    bookings.forEach(b => {
      map[b.tripTitle] = (map[b.tripTitle] || 0) + 1;
    });

    return Object.keys(map).map(name => ({
      name,
      bookings: map[name],
    }));
  }, [bookings]);

  const dailyBookings = useMemo(() => {
    const map = {};

    bookings.forEach(b => {
      const day = new Date(b.createdAt).toLocaleDateString("default", {
        weekday: "short",
      });

      map[day] = (map[day] || 0) + 1;
    });

    return Object.keys(map).map(day => ({
      day,
      bookings: map[day],
    }));
  }, [bookings]);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 sm:p-6 space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-1 text-sm sm:text-base">
          Real-time analytics & booking insights
        </p>
      </div>

      {/* KPI SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">

        <MetricCard title="Total Bookings" value={totalBookings} icon={Calendar} />

        <MetricCard title="Confirmed" value={confirmed} icon={CheckCircle} accent="text-emerald-600" />

        <MetricCard title="Pending" value={pending} icon={Clock} accent="text-amber-500" />

        <MetricCard title="Cancelled" value={cancelled} icon={XCircle} accent="text-red-500" />

        <MetricCard title="Total Revenue" value={`₹${totalRevenue.toLocaleString()}`} icon={CreditCard} isText />

        <MetricCard title="Avg Booking" value={`₹${avgBooking.toLocaleString()}`} icon={TrendingUp} isText />

      </div>

      {/* CHART SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <ChartCard title="Monthly Revenue Trend">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#059669" fill="#059669" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Booking Status">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={bookingStatus} dataKey="value" nameKey="name" outerRadius={100} innerRadius={60} label>
                {bookingStatus.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Top Packages">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topPackages}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="#059669" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Daily Booking Trend">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyBookings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bookings" stroke="#059669" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

      </div>

    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function MetricCard({ title, value, icon: Icon, accent = "text-gray-900", isText = false }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition">
      <div className="flex justify-between items-start mb-3">
        <div className="p-2 bg-emerald-100 rounded-xl">
          <Icon size={18} className="text-emerald-700" />
        </div>
      </div>
      <p className="text-xs text-gray-500 uppercase font-semibold">{title}</p>
      <p className={`text-xl sm:text-2xl font-bold mt-1 ${accent}`}>
        {!isText && typeof value === "number" ? (
          <CountUp end={value} duration={1.2} />
        ) : (
          value
        )}
      </p>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
      <h3 className="text-sm font-bold text-gray-700 uppercase mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default TravelMateDashboard;